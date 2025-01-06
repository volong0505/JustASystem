import { Test } from '@nestjs/testing';
import { ServerFeatureUsersController } from './server-feature-users.controller';
import { ServerFeatureUsersService } from './server-feature-users.service';

describe('ServerFeatureUsersController', () => {
  let controller: ServerFeatureUsersController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerFeatureUsersService],
      controllers: [ServerFeatureUsersController],
    }).compile();

    controller = module.get(ServerFeatureUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
