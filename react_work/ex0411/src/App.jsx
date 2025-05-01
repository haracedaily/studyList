import { Col, Image, Layout, Menu, Row } from 'antd'
import './App.css'
import Sider from 'antd/es/layout/Sider'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import { MailOutlined, ManOutlined, WomanOutlined } from '@ant-design/icons';

function App() {
  const items=[
    {label:'Menu1',icon:<MailOutlined/>,key:'menu1',link:'chk1'},
    {label:'Menu2',icon:<ManOutlined/>,key:'menu2',link:'chk2'},
    {label:'할일관리',icon:<WomanOutlined/>,key:'menu3',link:'chk3'},
    {label:'예약관리',icon:<WomanOutlined/>,key:'menu4',link:'chk4',
      children:[
        {type:'group', label:'item1',children:[
          {label:'예약등록'},
          {label:'예약조회'},
          {label:'예약삭제'}
        ]},
        {type:'group', label:'item2',children:[
          {label:'예약목록'},
          {label:'예약수정'},
        ]},
        
      ]
    }
  ];
  const handleMenu = (e)=>{
    console.log(e);
    console.log(e.item)
  };
  return (
    // w-full width:100% h-screen min-height:100vh
      <Layout className="w-full h-screen">
        <Sider className='text-white !bg-amber-500'>
          <div>
          
            <h1 className='text-3xl text-center py-3'>관리자</h1>
          <Menu onClick={handleMenu} items={items} mode="vertical"></Menu>
          </div>
        </Sider>
        <Layout>
          <Header className='!bg-blue-500 !p-0'>
          <Menu items={items} mode="horizontal"></Menu>
          </Header>

          
          <Content>
            <Row>
              <Col xs={12} lg={4}>
              <h1>제목</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </Col>
              <Col xs={6} lg={4}>
              <h1>제목</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </Col>
              <Col xs={6} lg={4}>
              <h1>제목</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </Col>
            </Row>
            Content
          <Image width={200} src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"/>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
  )
}

export default App
