import { DynamicModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoSchemas } from '.';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { databaseProviders } from '@just-a-system/util-common';
import { ENV_MONGO_URI } from '@just-a-system/util-constants';
@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get(ENV_MONGO_URI),
      }),
      inject: [ConfigService]
    }),
    MongooseModule.forFeature([
      ...mongoSchemas
    ])
  ],
  // providers: [
  //   ...databaseProviders
  // ],
  // exports: [
  //   ...databaseProviders
  // ]
})
export class MongoModule {}
