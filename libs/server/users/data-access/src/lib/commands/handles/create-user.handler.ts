import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateUserCommand } from "../impl/create-user.command";
import { BadRequestException, Inject } from "@nestjs/common";
import { ServerDataAccessUsersInjectionTokenEnum } from "../../server-data-access-users.injection-token";
import { UsersRepository } from "../../domain/users.repository";
import { UsersFactory } from "../../domain/users.factory";

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
    constructor (
        @Inject(ServerDataAccessUsersInjectionTokenEnum.USERS_REPOSITORY) private readonly repository: UsersRepository,
        @Inject() private readonly usersFactory: UsersFactory
    ) {}

        async execute(command: CreateUserCommand): Promise<any> {
            try {
                const { dto } = command;
                const user = this.usersFactory.create(dto);

                await this.repository.saveOne(user)
            } catch(error) {
                throw new BadRequestException(error)
            } 
        }
}