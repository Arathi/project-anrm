import {
  Form,
  Input,
  InputNumber,
  Segmented,
  Select,
  SelectProps,
  SegmentedProps,
} from 'antd';
import { useLocalModel } from '@modern-js/runtime/model';
import { NoteType } from '@/domains/note';
import editorModel from '@/stores/editor-model';
import Domain from '@/domains/settings';

const keyOptions: SelectProps['options'] = [
  {
    value: 4,
    label: '4k',
  },
  {
    value: 5,
    label: '5k',
  },
  {
    value: 6,
    label: '6k',
  },
];

const difficultyOptions: SelectProps['options'] = [
  {
    value: 'ez',
    label: '简单(ez)',
  },
  {
    value: 'nm',
    label: '普通(nm)',
  },
  {
    value: 'hd',
    label: '困难(hd)',
  },
];

const drawModeOptions: SegmentedProps<NoteType>['options'] = [
  {
    value: NoteType.Point,
    label: '点',
  },
  {
    value: NoteType.Line,
    label: '线',
  },
  {
    value: NoteType.Hook,
    label: '钩',
  },
];

const Settings = () => {
  const [{ notes, settings }, actions] = useLocalModel(editorModel);

  function update(patch: Partial<Domain>) {
    actions.setSettings({
      ...settings,
      ...patch,
    });
  }

  return (
    <Form
      labelAlign="right"
      labelCol={{ span: 6 }}
      style={{ width: '100%' }}
      size={'middle'}
    >
      <Form.Item label="Path">
        <Input
          value={settings.path}
          placeholder="路径"
          onChange={e =>
            update({
              path: e.currentTarget.value,
            })
          }
        />
      </Form.Item>
      <Form.Item label="Keys">
        <Select
          value={settings.keys}
          options={keyOptions}
          onChange={value =>
            update({
              keys: value,
            })
          }
        />
      </Form.Item>
      <Form.Item label="难度">
        <Select
          value={settings.difficulty}
          options={difficultyOptions}
          onChange={value => {
            update({
              difficulty: value,
            });
          }}
        />
      </Form.Item>
      <Form.Item label="时长">
        <InputNumber
          value={settings.length}
          placeholder="时长（ms）"
          style={{ width: '100%' }}
          onChange={value => {
            if (value !== null) {
              update({
                length: value,
              });
            }
          }}
        />
      </Form.Item>
      <Form.Item label="BPM">
        <InputNumber
          value={settings.bpm}
          placeholder="每分钟节拍数"
          style={{ width: '100%' }}
          onChange={value => {
            if (value !== null) {
              update({
                bpm: value,
              });
            }
          }}
        />
      </Form.Item>
      <Form.Item label="总键数">
        <InputNumber
          value={notes.length}
          placeholder="自动计算"
          disabled
          style={{ width: '100%' }}
        />
      </Form.Item>
      <Form.Item label="绘制模式">
        <Segmented
          value={settings.drawMode}
          options={drawModeOptions}
          onChange={value =>
            update({
              drawMode: value,
            })
          }
        />
      </Form.Item>
    </Form>
  );
};

export default Settings;
