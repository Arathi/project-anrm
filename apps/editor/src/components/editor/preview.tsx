import { Flex } from 'antd';

const Preview = () => {
  const frames: React.ReactNode[] = [];

  return (
    <Flex flex={1}>
      <div>预览：</div>
      {frames}
    </Flex>
  );
};

export default Preview;
