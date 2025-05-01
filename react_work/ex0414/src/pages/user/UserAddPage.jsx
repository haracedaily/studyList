import { Layout,Card,Row,Col, Form, Input, Button, message, Modal,notification} from 'antd'
import React, { useState } from 'react'
import {supabase} from '../../database/supabaseClient';
import bcrypt from 'bcryptjs';
import {useNavigate} from "react-router-dom";
console.log(supabase);
console.log(bcrypt);

const {Content} = Layout;
function UserAddPage() {
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  let navigate = useNavigate();

  const onFinish = async (values) => {
    alert("test");
    console.log(values);
    const { name, email, age, phone, password } = values;
    setLoading(true);
    
    try{
      let hashPw = await bcrypt.hash(password,10);
      console.log(hashPw);
      console.log(await bcrypt.compare(password,hashPw));
      let res = await supabase.from("members").insert([{name,email,age,phone,password:hashPw}]);
      console.log(res);
      if(res.error)message.error('사용자 추가 실패하였습니다.'+res.error);
      else {
        Modal.success({
          title:'회원추가',
              content:'사용자가 성공적으로 추가되었습니다',
        });
      message.success('사용자가 성공적으로 추가 되었습니다.22');
      messageApi.open({
        type:'success',
        content:'사용자가 성공적으로 추가 되었습니다.11'
      });
      messageApi.open({
        type:'success',
        content:'사용자가 성공적으로 추가 되었습니다.33'
      });
        notification.success({
          message: '회원 등록 완료',
          description: '성공적으로 등록되었습니다.',
        });
        navigate("/user/list");
    }
    }catch(err){
      message.error(err);
      console.log(err);
    }
    
   
    setLoading(false);
  };

  return (
    <>
    {contextHolder}
    
    <Content>
      <Row>
        <Col span={24}>
          <Card style={{margin:'1rem',padding:'1rem'}}>
            <h1>UserAdd</h1>
            <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="이름" name="name" rules={[{ required: true, message: '이름을 입력해주세요' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="이메일" name="email" rules={[{ required: true, type: 'email', message: '올바른 이메일을 입력해주세요' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="나이" name="age" rules={[{ required: true, message: '나이를 입력해주세요' }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item label="전화번호" name="phone" rules={[{ required: true, message: '전화번호를 입력해주세요' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="비밀번호" name="password" rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            등록
          </Button>
        </Form.Item>
      </Form>
          </Card>
          
        </Col>
      </Row>
    </Content>
    </>
  )
}

export default UserAddPage