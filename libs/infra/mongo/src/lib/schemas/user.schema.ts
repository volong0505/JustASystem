import { ModelDefinition, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema({collection: 'users'})
export class User {

    @Prop()
    username!: string;

    @Prop()
    password!: string;

    @Prop()
    refreshToken!: string | null;

    @Prop()
    createAt!: Date;

    @Prop()
    updateAt!: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

export const UserSchemaFeature: ModelDefinition = {
    name: User.name,
    schema: UserSchema
    
}