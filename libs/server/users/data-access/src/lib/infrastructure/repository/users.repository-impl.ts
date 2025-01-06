import { InjectModel } from "@nestjs/mongoose";
import { UsersRepository } from "../../domain/users.repository";
import { User } from "@just-a-system/mongo";
import { Model, Types } from "mongoose";
import { Users, UsersProperties } from "../../domain/users";
import { UsersFactory } from "../../domain/users.factory";

export class UsersRepositoryImpl implements UsersRepository {

    constructor(
        @InjectModel(User.name) private readonly model: Model<User>,
        private readonly factory: UsersFactory
    ) { }


    async findOne(username: string): Promise<Users> {
        const entity = await this.model.findById({ username: username });

        return entity ? this.entityToModel(entity) : {} as Users;
    }

    async saveOne(user: Users): Promise<any> {
        const entity = this.modelToEntity(user);
        await this.model.findOneAndUpdate(
            { username: entity.username },
            entity,
            { upsert: true }
        )
        console.log('create user successfully')
    }

    private entityToModel(entity: User): Users {
        return this.factory.reconstitute({
            ...entity,
        })
    }

    private modelToEntity(model: Users): User {
        const properties = JSON.parse(
            JSON.stringify(model)
        ) as UsersProperties;

        return {
            ...properties
        }
    }
}