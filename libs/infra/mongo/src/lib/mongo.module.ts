import { DynamicModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({})
export class MongoModule {
  static register(mongoConnectURI: string): DynamicModule {
    return {
      module: MongoModule,
      imports: [
        MongooseModule.forRoot(mongoConnectURI),
        MongooseModule.forFeature([
          
        ])
      ],
      exports: [
        MongoModule
      ]
    }
  }
}
