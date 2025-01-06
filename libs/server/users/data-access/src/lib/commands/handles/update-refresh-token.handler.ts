import { ICommandHandler, QueryHandler } from "@nestjs/cqrs";
import { UpdateRefreshTokenCommand } from "../impl/update-refresh-token.command";
import { Inject, NotFoundException } from "@nestjs/common";
import { ServerDataAccessUsersInjectionTokenEnum } from "../../server-data-access-users.injection-token";
import { UsersRepository } from "../../domain/users.repository";

@QueryHandler(UpdateRefreshTokenCommand)
export class UpdateRefreshTokenHandler implements ICommandHandler<UpdateRefreshTokenCommand> {

    constructor( 
        @Inject(ServerDataAccessUsersInjectionTokenEnum.USERS_REPOSITORY) private readonly repository: UsersRepository

    ) {}

    async execute(command: UpdateRefreshTokenCommand): Promise<any> {
        const { username, refreshToken } = command.dto;

        const user = await this.repository.findOne(username);

        if (!username)
            throw new NotFoundException("user is not found")

        user.updateRefreshToken(refreshToken);

        await this.repository.saveOne(user);
    }

}