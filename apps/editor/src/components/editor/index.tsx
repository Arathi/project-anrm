import { Flex } from 'antd';
import { CSSProperties } from 'react';
import Settings from './settings';
import NoteTable from './note-table';
import Preview from './preview';

type Props = {
  style?: CSSProperties;
};

const Editor: React.FC<Props> = ({ style }) => {
  return (
    <Flex style={style}>
      <Flex flex={2}>
        <NoteTable style={{ width: '100%' }} />
      </Flex>
      <Flex
        flex={1}
        style={{
          padding: 8,
          paddingTop: 0,
          width: '100%',
        }}
      >
        <Settings />
      </Flex>
      <Flex flex={2}>
        <Preview />
      </Flex>
    </Flex>
  );
};

export default Editor;
