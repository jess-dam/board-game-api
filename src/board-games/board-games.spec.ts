import { Test, TestingModule } from '@nestjs/testing';
import { BoardGamesService } from './board-games.service';

describe('BoardGames', () => {
  let provider: BoardGamesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoardGamesService],
    }).compile();

    provider = module.get<BoardGamesService>(BoardGamesService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
