import React from 'react'
import { Divider, List, Typography, Avatar } from 'antd';

const data = [
  {
      title:'Racing car sprays burning fuel into crowd.',
      description: 'burning fuel into',
  },
  {
      title:'Japanese princess to wed commoner',
      description: ' to wed commoner',
  },
  {
      title:'Australian walks 100km after outback crash.',
      description: 'ks 100km after o',
  },
  {
      title:'Man charged over missing wedding girl.',
      description: 'over missing wedding',
  },
  {
      title:'Los Angeles battles huge wildfires.',
      description: 'les battles huge wildfi.',
  },
];

function Mylist() {
  return (
    <>
    <div className='p-5'>

    <h1 className='text-4xl underline p-3 text-white bg-gray-500 font-bolder'>Mylist</h1>
    <div className='p-5'>
    <Divider orientation="left">test</Divider>
    <List
      size="large"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item,index) => {
      return <List.Item>
        <List.Item.Meta 
        avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
        title={item.title}
        description={item.description}
        />
        </List.Item>}}
    />
    <List header={<><h1 className='text-3xl p-3'>Review</h1></>}
    footer={<><h1 className='text-2xl p-3 text-right underline'>EndList</h1></>}
    bordered
    />
    </div>
    </div>
     <Divider orientation="left">Default Size</Divider>
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => (
        <>
        <List.Item className='text-lg font-bold'>
          <Typography.Text mark>[ITEM]</Typography.Text> {item.title}
        </List.Item>
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item.title}
        </List.Item>
        </>
      )}
    />
    <Divider orientation="left">Small Size</Divider>
    <List
      size="small"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item.title}</List.Item>}
    />
    <Divider orientation="left">Large Size</Divider>
    <List
      size="large"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => {
        console.log(item);
      return <List.Item>{item.title}</List.Item>}}
    />
    </>
  )
}

export default Mylist