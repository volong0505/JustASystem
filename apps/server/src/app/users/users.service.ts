import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from '@just-a-system/mongo';
import { Model } from "mongoose";
@Injectable()
export class UsersSerivce {
    
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

    async create(newUser: User): Promise<User> {
        const createdUser = new this.userModel(newUser);
        return createdUser.save()
    } 
    
}