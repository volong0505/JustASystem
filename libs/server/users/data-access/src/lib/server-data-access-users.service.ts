import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Users } from './domain/users';
import { GetListUsersQuery } from './queries/impl/get-list-users.query';
import { GetUserQuery } from './queries/impl/get-user.query';
import { GetUserRequestDto } from './dtos/get-user.request.dto';
import { CreateUserRequestDto } from './dtos/create-user-request.dto';
import { CreateUserCommand } from './commands/impl/create-user.command';
import { UpdateRefreshTokenDto } from './dtos/update-refresh-token.dto';
import { UpdateRefreshTokenCommand } from './commands/impl/update-refresh-token.command';
import * as bcrypt from 'bcrypt';
import { compare } from 'bcrypt';
import { timer } from 'rxjs';

const default_user: CreateUserRequestDto = {
    username: "admin",
    password: '123456'
};

@Injectable()
export class ServerDataAccessUsersService  {

    constructor(
        private readonly queryBus: QueryBus,
        private readonly commandBus: CommandBus
    ){
        this.checkExistingUsers()
    }

    findAll(): Promise<Users[]> {
        return this.queryBus.execute(new GetListUsersQuery({}));
    }

    findOne(username: string) {
        const dto: GetUserRequestDto = {
            username: username
        };
        return this.queryBus.execute(new GetUserQuery(dto));
    }

    async create(dto: CreateUserRequestDto) {
        const hashPassword = await bcrypt.hash(dto.password, 10);

        return this.commandBus.execute(new CreateUserCommand({...dto, password: hashPassword}))

    }

    updateRefreshToken(dto: UpdateRefreshTokenDto) {
        return this.commandBus.execute(new UpdateRefreshTokenCommand(dto))
    }

    async checkExistingUsers() {
        await timer(5000).toPromise();

        const listUser = await this.findAll();

        if (!listUser.length) {
            Logger.log('Users not found!');

            return this.create(default_user)
        }
    }
}
