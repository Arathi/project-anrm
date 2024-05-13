import { PlusOutlined } from '@ant-design/icons';
import { Button, Tabs, TabsProps, Upload } from 'antd';
import React, { CSSProperties, useState } from 'react';
import Editor from '../editor';

type Props = {
  style?: CSSProperties;
};

type OnEditEvent = React.MouseEvent | React.KeyboardEvent | string;

const FileTabs: React.FC<Props> = ({ style }) => {
  const [activeKey, setActiveKey] = useState<string>();

  const items: TabsProps['items'] = [
    {
      key: 'new',
      label: '新谱面',
      children: <Editor />,
    },
  ];

  function onChange(activeKey: string) {
    setActiveKey(activeKey);
  }

  function onEdit(event: OnEditEvent, action: 'add' | 'remove') {
    if (action === 'add') {
      onOpen();
    } else {
      onClose(event);
    }
  }

  function onOpen() {
    const tabKey = '';
    console.info('打开标签：', tabKey);
  }

  function onClose(event: OnEditEvent) {
    console.info('关闭标签：', event);
  }

  return (
    <Tabs
      type="editable-card"
      addIcon={
        <Upload>
          <Button type="link" icon={<PlusOutlined />} />
        </Upload>
      }
      items={items}
      onChange={onChange}
      activeKey={activeKey}
      onEdit={(event, action) => onEdit(event, action)}
      style={style}
    />
  );
};

export default FileTabs;
