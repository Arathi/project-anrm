import { model } from '@modern-js/runtime/model';
import Note, { NoteType } from '@/domains/note';
import Settings from '@/domains/settings';

type State = {
  notes: Note[];
  settings: Settings;
};

const editorModel = model<State>('editor').define({
  state: {
    notes: [],
    settings: {
      path: 'new',
      keys: 4,
      difficulty: 'ez',
      length: 60000,
      bpm: 120,
      drawMode: NoteType.Point,
    },
  },
});

export default editorModel;
