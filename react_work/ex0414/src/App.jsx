import React, { useState } from 'react';
import { Layout, Menu, Button, Grid, Row, Col, Card } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  DashboardOutlined,
  SettingOutlined,
    FundViewOutlined,
} from '@ant-design/icons';
import {Link, Route, Routes} from "react-router-dom";
import Root from "./pages/Root.jsx";
import Todo from "./pages/Todo.jsx";
import Review from "./pages/Review.jsx";
import UserListPage from './pages/user/UserListPage.jsx';
import UserAddPage from './pages/user/UserAddPage.jsx';
import UserLoginPage from "./pages/user/UserLoginPage.jsx";

const { Header, Sider, Content, Footer } = Layout;
const { useBreakpoint } = Grid;
// 메뉴 항목 구성
const items = [
  {
    key: 'dashboard',
    icon: <DashboardOutlined />,
    label: (<Link to="/">대시보드</Link>),
  },
    {
    key: 'menu1',
    icon: <DashboardOutlined />,
    label:  (<Link to="/todo">할일</Link>),
  },
    {
    key: 'review',
    icon: <FundViewOutlined />,
    label: (<Link to="/review">리뷰</Link>),
  },
  {
    key: 'users',
    icon: <UserOutlined />,
    label: '사용자 관리',
    children: [
      { key: 'users-list', label: (<Link to={"/user/list"}>사용자목록</Link>) },
      { key: 'users-add', label: <Link to={"/user/add"}>사용자추가</Link> },
      { key: 'users-delete', label: '사용자 삭제' },
    ],
  },
  {
    key: 'settings',
    icon: <SettingOutlined />,
    label: '설정',
  },
];

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const screens = useBreakpoint();

  return (
      <Layout style={{ minHeight: '100vh' }}>
        {/* Sider (사이드 메뉴) */}
        <Sider
            trigger={null}
            collapsed={collapsed}
            breakpoint="md" // 767px
            collapsedWidth="0"
            onBreakpoint={(broken) => setCollapsed(broken)}
        >
          <div style={{ height: 32, margin: 16, background: 'rgba(255,255,255,0.2)',textAlign: 'center',fontSize:'1.5rem',color:'white',lineHeight:'2.4rem' }}
          onClick={() => {
              if(!screens.md)
              setCollapsed(!collapsed);
          }}>
              <h1>관리자</h1>
          </div>
          <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['dashboard']}
              items={items}
              // selectedKeys={[selectedKey]}  // 현재 경로 기반으로 선택된 메뉴
              onClick={({ key }) => {
                  console.log('메뉴 클릭된 key:', key);
                  //screens.md는 화면사이즈가 md(768px) 이상일 때 true
                    // screens.md는 화면사이즈가 sx(0px) 이상일 때 false

                  if (!screens.md) {
                      // 모바일 화면에서 메뉴 클릭 시 사이드바 닫기
                      setCollapsed(true);
                  }
              }}
          />
        </Sider>

        <Layout>
          {/* 상단 헤더 */}
          <Header
              style={{
                background: '#fff',
                padding: '0 16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
          >
            {!screens.md && (
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{ fontSize: 20 }}
                />
            )}
            <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
              로고 또는 상단 헤더
            </div>
              <div style={{fontSize: '1.1rem', fontWeight: 'bold'}}>
                  <Link to={`/user/login`}>로그인</Link>
              </div>
          </Header>

          {/* 본문 콘텐츠 */}
            <Routes>
                <Route path="/" element={<Root/>} />
                <Route path="/Todo" element={<Todo/>} />
                <Route path="/Review" element={<Review/>} />
                <Route path="/user/add" element={<UserAddPage/>} />
                <Route path="/user/list" element={<UserListPage/>} />
                <Route path="/user/login" element={<UserLoginPage/>} />
            </Routes>
           {/* <Content style={{ margin: '16px' }}>
                <div
                    style={{
                        padding: 24,
                        background: '#fff',
                        minHeight: 360,
                        borderRadius: 8,
                    }}
                >
                     Row/Col 그리드 시작
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={8}>
                            <Card title="통계 카드 1" bordered>
                                내용 1
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <Card title="통계 카드 2" bordered>
                                내용 2
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <Card title="통계 카드 3" bordered>
                                내용 3
                            </Card>
                        </Col>
                    </Row>
                     Row/Col 그리드 끝
                </div>
            </Content>*/}
          {/* 하단 푸터 */}
          <Footer style={{ textAlign: 'center' }}>
            2025.04.14 made by cjh
          </Footer>
        </Layout>
      </Layout>
  );
};

export default AppLayout;
