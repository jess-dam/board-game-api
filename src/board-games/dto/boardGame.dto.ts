import { IsIn, IsNotEmpty, IsNotEmptyObject, MinLength } from 'class-validator';
import {
  COMPETIVITY_LEVEL,
  CompetivityLevel,
  DIFFICULTY,
  Difficulty,
  PLAYER_AMOUNT,
  PLAYING_TIME,
  PlayerAmount,
  PlayingTime,
} from '../types/boardGame.types';

export class BoardGameDto {
  @IsNotEmpty()
  @MinLength(2)
  title: string;

  @IsIn(PLAYER_AMOUNT)
  players: PlayerAmount;

  @IsIn(PLAYING_TIME)
  playingTime: PlayingTime;

  @IsIn(COMPETIVITY_LEVEL)
  competivityLevel: CompetivityLevel;

  @IsIn(DIFFICULTY)
  difficulty: Difficulty;
}
