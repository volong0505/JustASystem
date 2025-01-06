import { AggregateRoot } from "@nestjs/cqrs";

export type UsersEssentialProperties = Readonly<
    Required <{
        username: string;
        password: string;
       }>    
>;

export type UsersOptionalProperties = Readonly<
    Partial<{
        createAt: Date;
        updateAt: Date;
        refreshToken?: string | null;
    }>
>;

export type UsersProperties = UsersEssentialProperties & Required<UsersOptionalProperties>;

export interface Users {
    restore: () => void;
    commit: () => void;
    updateRefreshToken: (refreshToken: string) => void
};

export class UsersImplement extends AggregateRoot implements Users {
    private username!: string;
    private password!: string;
    private refreshToken?: string;
    private createAt!: Date;
    private updateAt!: Date;

    constructor(properties: UsersProperties) {
        super();
        Object.assign(this, properties)
    };

    restore!: () => void;

    updateRefreshToken(refreshToken: string): void {
        this.refreshToken = refreshToken;
    }

}