import { Injectable } from '@nestjs/common';
import { BoardGameDto } from './dto/board-game.dto';

const boardGames: BoardGameDto[] = [
  {
    title: 'Wingspan',
    players: '1-4 players',
    playingTime: '30 - 45 mins',
    difficulty: 'medium',
    competivityLevel: 'slightly competitive',
  },
  {
    title: 'Ark Nova',
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
    return boardGames.find((game) => {
      game.title == title;
    });
  }
}
