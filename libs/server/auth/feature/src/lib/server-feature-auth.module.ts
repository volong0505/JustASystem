import { Module } from '@nestjs/common';
import { ServerFeatureAuthController } from './server-feature-auth.controller';
import { ServerDataAccessAuthModule } from '@just-a-system/server-data-access-auth';

@Module({
  imports: [
    ServerDataAccessAuthModule
  ],
  controllers: [ServerFeatureAuthController],
  providers: []
})
export class ServerFeatureAuthModule {}
