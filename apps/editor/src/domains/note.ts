export default interface Note {
  time: number;
  key: number; // 0-5
  type: NoteType;
  param: NoteParam;
  index?: number;
}

export enum NoteType {
  Point,
  Line,
  Hook,
}

export type NoteParam = any;
