export const PLAYER_AMOUNT = [
  'solo',
  '2 players',
  '1-4 players',
  '2-4 players',
  '4+ players',
];
export const PLAYING_TIME = [
  'under 30 mins',
  '30 - 45 mins',
  '45 mins - 1 hour',
  '1 hour +',
];
export const COMPETIVITY_LEVEL = [
  'non-competitive',
  'slightly competitive',
  'very competitive',
  'home wrecker',
];
export const DIFFICULTY = [
  'super easy',
  'easy',
  'medium',
  'slighly difficult',
  'difficult',
  'incredibly dfficult',
];

export type PlayerAmount = (typeof PLAYER_AMOUNT)[number];
export type PlayingTime = (typeof PLAYING_TIME)[number];
export type CompetivityLevel = (typeof COMPETIVITY_LEVEL)[number];
export type Difficulty = (typeof DIFFICULTY)[number];
