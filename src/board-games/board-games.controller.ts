import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BoardGamesService } from './board-games.service';
import { BoardGameDto } from './dto/boardGame.dto';
import { CreateBoardGameDto } from './dto/createBoardGame.dto';

@Controller('board-games')
export class BoardGamesController {
  constructor(private readonly boardGamesService: BoardGamesService) {}

  @Get()
  getAllBoardGames(): BoardGameDto[] {
    return this.boardGamesService.fetchAllBoardGames();
  }

  @Get(':title')
  getBoardGameByTitle(@Param('title') title: string): BoardGameDto {
    return this.boardGamesService.fetchBoardGameByTitle(title.toLowerCase());
  }

  @Post()
  addBoardGameToCollection(@Body() newGame: CreateBoardGameDto) {
    this.boardGamesService.createNewBoardGame(newGame);
  }
}
