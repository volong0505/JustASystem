import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongoModule } from '@just-a-system/mongo'
import { Config } from '../../config'
import { LoggerMiddleware } from './common/middleware/logger.middleware';
@Module({
  imports: [
    // infra modules..
    MongoModule.register(Config.MONGO_URI),

    // modules...
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware) 
      .forRoutes('*') // applying LoggerMiddleware for all routes
  }
}
