import { ServerFeatureCoreModule } from '@just-a-system/server-feature-core';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { Config } from '../../config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ServerFeatureCoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
