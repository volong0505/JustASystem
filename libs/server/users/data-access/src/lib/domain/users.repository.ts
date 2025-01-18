import { Users } from "./users";

export interface UsersRepository {
    findOne: (username: string) => Promise<Users>;

    saveOne: (user: Users) => Promise<void>
}