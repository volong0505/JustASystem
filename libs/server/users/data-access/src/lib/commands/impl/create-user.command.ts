import { CreateUserRequestDto } from "../../dtos/create-user-request.dto";

export class CreateUserCommand {
    constructor(public readonly dto: CreateUserRequestDto) {}
}