import { DynamicModule, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongoModule } from '@just-a-system/mongo';
import { LoggerMiddleware } from '@just-a-system/server-middlewares';
import { ServerFeatureUsersModule } from '@just-a-system/server-feature-users';
import { ServerFeatureAuthModule } from '@just-a-system/server-feature-auth';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [],
    }),
    MongoModule,
    ServerFeatureUsersModule,
    ServerFeatureAuthModule
  ],
  exports: [
    MongoModule
  ]
})
export class ServerFeatureCoreModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware) 
      .forRoutes('*') // applying LoggerMiddleware for all routes
  }
}
