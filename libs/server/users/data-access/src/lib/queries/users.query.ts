import { User } from '@just-a-system/mongo';

export class UsersQuery {
    findOne!: (username: string) => Promise<User>;

    findAll!: () => Promise<User[]>
}