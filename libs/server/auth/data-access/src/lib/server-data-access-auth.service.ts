import * as bcrypt from 'bcrypt';

import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { AuthTokenReponseDto, UserLoginRequest } from '@just-a-system/api-interfaces';
import { ServerDataAccessUsersService } from '@just-a-system/server-data-access-users'
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { ENV_JWT_ACCESS_EXPIRATION_TIME, ENV_JWT_ACCESS_SECRET, ENV_JWT_REFRESH_EXPIRATION_TIME, ENV_JWT_REFRESH_SECRET } from '@just-a-system/util-constants';
import { UpdateRefreshTokenDto } from 'libs/server/users/data-access/src/lib/dtos/update-refresh-token.dto';

@Injectable()
export class ServerDataAccessAuthService {

    constructor(
        private readonly userService: ServerDataAccessUsersService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService
    ) {}

    async validateUser(userLogin: UserLoginRequest) {
        const user = await this.userService.findOne(userLogin.username);

        if (!user) {
            throw new UnauthorizedException()
        }
        const isPasswordValid = await bcrypt.compare(
            userLogin.password, user.password ?? ''
        )

        if (!isPasswordValid) {
            throw new UnauthorizedException()
        }

        return user;
    }

    async getTokens(data: any): Promise<AuthTokenReponseDto> {
        const [accessToken, refreshToken] = await Promise.all([
            await this.generateAccessToken(data),
            await this.generateRefreshToken(data)
        ]);

        return new AuthTokenReponseDto({ accessToken, refreshToken });
    }

    async generateAccessToken(data: any): Promise<string> {
        const payload = {
            username: data.username
        };

        return await this.jwtService.signAsync(payload, {
            expiresIn: this.configService.get(ENV_JWT_ACCESS_EXPIRATION_TIME),
            subject: data.username,
            secret: this.configService.get(ENV_JWT_ACCESS_SECRET)
        })
    }

    async generateRefreshToken(data: any): Promise<string> {
       const token = await this.jwtService.signAsync(
        {
            username: data.username
        },
        {
            expiresIn: this.configService.get(ENV_JWT_REFRESH_EXPIRATION_TIME),
            subject: data.username,
            secret: this.configService.get(ENV_JWT_REFRESH_SECRET)
        });
       return token

    }

    async updateUserRefreshToken(username: string, refreshToken: string) {
        const hashed = await bcrypt.hash(refreshToken, 10);
        const user: UpdateRefreshTokenDto = {
            username: username,
            refreshToken: hashed
        }
        await this.userService.updateRefreshToken(user)
    }
}
