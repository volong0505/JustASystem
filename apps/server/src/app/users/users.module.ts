import { Module } from "@nestjs/common";
import { UsersSerivce } from "./users.service";

@Module({
    imports: [],
    controllers: [],
    providers: [
        UsersSerivce
    ]
})
export class UsersModule {}