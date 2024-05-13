import { NoteType } from './note';

export default interface Settings {
  path: string;
  keys: Keys;
  difficulty: Difficulty;
  length: number;
  bpm: number;
  drawMode: NoteType;
}

type Keys = 4 | 5 | 6;

type Difficulty = 'ez' | 'nm' | 'hd';
