import { Test } from '@nestjs/testing';
import { ServerDataAccessAuthService } from './server-data-access-auth.service';

describe('ServerDataAccessAuthService', () => {
  let service: ServerDataAccessAuthService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerDataAccessAuthService],
    }).compile();

    service = module.get(ServerDataAccessAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
