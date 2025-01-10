import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { BoardGameDto } from './dto/boardGame.dto';
import { CreateBoardGameDto } from './dto/createBoardGame.dto';

const boardGames: BoardGameDto[] = [
  {
    title: 'wingspan',
    players: '1-4 players',
    playingTime: '30 - 45 mins',
    difficulty: 'medium',
    competivityLevel: 'slightly competitive',
  },
  {
    title: 'ark nova',
    players: 'solo',
    playingTime: '30 - 45 mins',
    difficulty: 'easy',
    competivityLevel: 'non-competitive',
  },
];

@Injectable()
export class BoardGamesService {
  fetchAllBoardGames() {
    return boardGames;
  }

  fetchBoardGameByTitle(title: string) {
    const bgMatch: BoardGameDto = boardGames.find(
      (game) => game.title == title,
    );

    if (!bgMatch) {
      throw new NotFoundException(
        `No board game for the title ${title} was found`,
      );
    }

    return bgMatch;
  }

  createNewBoardGame(newGame: CreateBoardGameDto) {
    //check if board game DTO is present
    if (newGame == undefined) {
      throw new BadRequestException('No game provided in request body.');
    }

    // check if a game by the same title already exists
    const boardGameAlreadyExists: boolean =
      boardGames.find((game) => game.title == newGame.title) != undefined;
    if (boardGameAlreadyExists) {
      throw new ConflictException(
        `A game with the title ${newGame.title} already exists.`,
      );
    }

    // add game to array
    newGame.title.toLowerCase();
    boardGames.push(newGame);
  }
}
