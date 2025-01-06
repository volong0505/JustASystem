import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ServerDataAccessAuthService } from '@just-a-system/server-data-access-auth';
import { AuthTokenReponseDto, UserLoginRequest } from '@just-a-system/api-interfaces';

@Controller('auth')
export class ServerFeatureAuthController {
  constructor(private service: ServerDataAccessAuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: UserLoginRequest): Promise<AuthTokenReponseDto> {
    const user = await this.service.validateUser(dto)
    return this.service.getTokens({
      username: user.username,
    })
  }
}
