import { Test } from '@nestjs/testing';
import { ServerFeatureAuthController } from './server-feature-auth.controller';

describe('ServerFeatureAuthController', () => {
  let controller: ServerFeatureAuthController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [ServerFeatureAuthController],
    }).compile();

    controller = module.get(ServerFeatureAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
