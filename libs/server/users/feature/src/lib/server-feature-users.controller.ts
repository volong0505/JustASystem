import { ServerDataAccessUsersService } from '@just-a-system/server-data-access-users';
import { Controller, Get } from '@nestjs/common';

@Controller('server-feature-users')
export class ServerFeatureUsersController {

    constructor(
        private readonly service: ServerDataAccessUsersService
    ) {}

    @Get('demo')
    demo() {
        return this.service.findAll()
    }
}
