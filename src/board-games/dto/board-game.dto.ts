import { MinLength } from 'class-validator';

export type PlayerAmount =
  | 'solo'
  | '2 players'
  | '1-4 players'
  | '2-4 players'
  | '4+ players';
export type PlayingTime =
  | 'under 30 mins'
  | '30 - 45 mins'
  | '45 mins - 1 hour'
  | '1 hour +';
export type CompetivityLevel =
  | 'non-competitive'
  | 'slightly competitive'
  | 'very competitive'
  | 'home wrecker';
export type Difficulty =
  | 'super easy'
  | 'easy'
  | 'medium'
  | 'slighly difficult'
  | 'difficult'
  | 'incredibly dfficult';

export class BoardGameDto {
  @MinLength(2)
  title: string;
  players: PlayerAmount;
  playingTime: PlayingTime;
  competivityLevel: CompetivityLevel;
  difficulty: Difficulty;
}
