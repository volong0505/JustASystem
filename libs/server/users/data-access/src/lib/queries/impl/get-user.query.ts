import { GetUserRequestDto } from "../../dtos/get-user.request.dto";

export class GetUserQuery {
    constructor(
        readonly dto: GetUserRequestDto
    ) {}
}