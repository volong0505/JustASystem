import { UserSchemaFeature } from '@just-a-system/mongo';
import { Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { users_commands, users_queries } from '.';
import { UsersFactory } from './domain/users.factory';
import { UsersQueryImpl } from './infrastructure/query/users.query-impl';
import { UsersRepositoryImpl } from './infrastructure/repository/users.repository-impl';
import { ServerDataAccessUsersInjectionTokenEnum } from './server-data-access-users.injection-token';
import { ServerDataAccessUsersService } from './server-data-access-users.service';
import { JwtModule } from '@nestjs/jwt';

const infrastructure: Provider[] = [
  {
    provide: ServerDataAccessUsersInjectionTokenEnum.USERS_REPOSITORY,
    useClass: UsersRepositoryImpl
  },
  {
    provide: ServerDataAccessUsersInjectionTokenEnum.USERS_QUERY,
    useClass: UsersQueryImpl
  }
]

const domains = [ UsersFactory ];

@Module({
  imports: [
    JwtModule,
    MongooseModule.forFeature([UserSchemaFeature]),
    CqrsModule
  ],
  providers: [
    ...infrastructure,
    ...domains,
    ...users_commands,
    ...users_queries,
    ServerDataAccessUsersService,
 
  ],
  exports: [
    ServerDataAccessUsersService,
    ...users_queries
  ],
})
export class ServerDataAccessUsersModule {}
