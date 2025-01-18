import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetUserQuery } from "../impl/get-user.query";
import { ServerDataAccessUsersInjectionTokenEnum } from "../../server-data-access-users.injection-token";
import { UsersQuery } from "../users.query";
import { Inject } from "@nestjs/common";

@QueryHandler(GetUserQuery)
export class GetUserHanler implements IQueryHandler<GetUserQuery> {

    constructor(
        @Inject(ServerDataAccessUsersInjectionTokenEnum.USERS_QUERY) 
        private readonly query: UsersQuery
    ) {}

    execute(query: GetUserQuery): Promise<any> {
        const { dto } = query;
        return this.query.findOne(dto.username)
    }
}