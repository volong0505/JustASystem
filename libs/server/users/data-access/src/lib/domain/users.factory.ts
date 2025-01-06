import { Inject } from "@nestjs/common";
import { EventPublisher } from "@nestjs/cqrs";
import { Users, UsersImplement, UsersProperties } from "./users";

type CreateUsersOptions = Readonly<{
    username: string;
    password: string;
}>

export class UsersFactory {
    @Inject(EventPublisher) private readonly eventPublisher!: EventPublisher;
    
    create(options: CreateUsersOptions): Users {
        return this.eventPublisher.mergeObjectContext(
            new UsersImplement({
                ...options,
                createAt: new Date(),
                updateAt: new Date(),
                refreshToken: null
            })
        )
    }

    reconstitute(properties: UsersProperties): Users {
        return new UsersImplement(properties)
    }
}