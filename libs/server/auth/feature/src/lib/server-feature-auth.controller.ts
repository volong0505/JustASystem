import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ServerDataAccessAuthService } from '@just-a-system/server-data-access-auth';
import { AuthTokenReponseDto, UserLoginRequest } from '@just-a-system/api-interfaces';
import { AUTH_LOGIN_API } from '@just-a-system/util-constants';

@Controller()
export class ServerFeatureAuthController {
  constructor(private service: ServerDataAccessAuthService) {}

  @Post(AUTH_LOGIN_API)
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: UserLoginRequest): Promise<AuthTokenReponseDto> {
    const user = await this.service.validateUser(dto)
    return this.service.getTokens({
      username: user.username,
    })
  }
}
