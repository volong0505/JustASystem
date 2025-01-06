import { ServerDataAccessUsersModule } from '@just-a-system/server-data-access-users';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ServerDataAccessAuthService } from './server-data-access-auth.service';

@Module({
  imports: [
    ServerDataAccessUsersModule,
    JwtModule
    ],
  providers: [ServerDataAccessAuthService],
  exports: [ServerDataAccessAuthService],
})
export class ServerDataAccessAuthModule {}
