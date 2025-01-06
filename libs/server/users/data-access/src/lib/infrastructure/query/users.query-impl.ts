import { User } from "@just-a-system/mongo";
import { UsersQuery } from "../../queries/users.query";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Users } from "../../domain/users";

export class UsersQueryImpl implements UsersQuery {
    
     constructor(
            @InjectModel(User.name) private readonly model: Model<User>,
        ) {}

    async findOne(username: string): Promise<User> {
        const user = await this.model.findOne({username: username});

        console.log(user)

        return user as User

    }

    async findAll(): Promise<User[]> {
        const users = await this.model.find();

        const  data: User[] = users.map((e: User) => ({
            username: e.username,
            refreshToken: e.refreshToken,
            password: e.password,
            createAt: e.createAt,
            updateAt: e.updateAt
        }))

        return data
    }

}