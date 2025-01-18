import { UpdateRefreshTokenDto } from "../../dtos/update-refresh-token.dto";

export class UpdateRefreshTokenCommand {
    constructor(
        public readonly dto: UpdateRefreshTokenDto
    ) {}
}