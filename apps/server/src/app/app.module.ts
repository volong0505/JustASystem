import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongoModule } from '@just-a-system/mongo'
import { Config } from '../../config'
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
export class AppModule {}
