import { Module } from '@nestjs/common';
import { BoardGamesController } from './board-games.controller';
import { BoardGamesService } from './board-games.service';

@Module({
  controllers: [BoardGamesController],
  providers: [BoardGamesService],
})
export class BoardGamesModule {}
