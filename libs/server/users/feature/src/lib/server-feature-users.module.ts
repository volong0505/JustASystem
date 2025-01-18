import { Module } from '@nestjs/common';
import { ServerFeatureUsersController } from './server-feature-users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {  UserSchemaFeature } from '@just-a-system/mongo';
import { ServerDataAccessUsersModule } from '@just-a-system/server-data-access-users';

@Module({
  imports: [
    MongooseModule.forFeature([
      UserSchemaFeature
    ]),
    ServerDataAccessUsersModule
  ],
  controllers: [ServerFeatureUsersController],
})
export class ServerFeatureUsersModule {}
