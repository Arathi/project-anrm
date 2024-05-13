import { Table, TableProps } from 'antd';
import { CSSProperties } from 'react';
import Note, { NoteType } from '@/domains/note';

type Props = {
  style?: CSSProperties;
};

const NoteTable: React.FC<Props> = ({ style }) => {
  const notes: Note[] = [
    {
      time: 0,
      key: 0,
      type: NoteType.Point,
      param: 0,
      index: 0,
    },
  ];
  const columns: TableProps<Note>['columns'] = [
    {
      key: 'index',
      title: '序号',
      dataIndex: 'index',
      width: 80,
    },
    {
      key: 'time',
      title: '时间点',
      dataIndex: 'time',
      width: 100,
    },
    {
      key: 'type',
      title: '类型',
      dataIndex: 'type',
      width: 100,
      render: type => {
        switch (type) {
          case NoteType.Point:
            return '点';
          case NoteType.Line:
            return '线';
          case NoteType.Hook:
            return '钩';
          default:
            return '其他';
        }
      },
    },
    {
      key: 'key',
      title: '键位',
      dataIndex: 'key',
      width: 100,
    },
    {
      key: 'param',
      title: '参数',
      dataIndex: 'param',
    },
  ];

  return (
    <Table
      dataSource={notes}
      columns={columns}
      pagination={false}
      size={'small'}
      style={style}
    />
  );
};

export default NoteTable;
