import { Test } from '@nestjs/testing';
import { ServerDataAccessUsersService } from './server-data-access-users.service';

describe('ServerDataAccessUsersService', () => {
  let service: ServerDataAccessUsersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerDataAccessUsersService],
    }).compile();

    service = module.get(ServerDataAccessUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
