import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetListUsersQuery } from "../impl/get-list-users.query";
import { Inject } from "@nestjs/common";
import { ServerDataAccessUsersInjectionTokenEnum } from "../../server-data-access-users.injection-token";
import { UsersQuery } from "../users.query";

@QueryHandler(GetListUsersQuery)
export class GetListUsersHandler implements IQueryHandler<GetListUsersQuery> {

    constructor( 
        @Inject(ServerDataAccessUsersInjectionTokenEnum.USERS_QUERY) private readonly query: UsersQuery
    ) {}

    execute(query: GetListUsersQuery): Promise<any> {
        return this.query.findAll()
    }

}