import { Controller, Get, Param } from '@nestjs/common';
import { BoardGamesService } from './board-games.service';

@Controller('board-games')
export class BoardGamesController {
  constructor(private readonly boardGamesService: BoardGamesService) {}

  @Get()
  getAllBoardGames() {
    return this.boardGamesService.fetchAllBoardGames();
  }

  @Get(':title')
  getBoardGameByTitle(@Param('title') title: string) {
    this.boardGamesService.fetchBoardGameByTitle(title);
  }
}
