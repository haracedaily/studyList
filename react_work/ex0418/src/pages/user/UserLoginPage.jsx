import React, {useRef, useState} from 'react';
import {Button, Flex, Form, Input, Layout, message} from "antd";
import bcrypt from "bcryptjs";
import {supabase} from "../../database/supabaseClient.js";
import {loginUser} from "../../database/supabaseUserLManager.js";
import {useNavigate} from "react-router-dom";


function UserLoginPage(props) {
    //useState useEffect useRef
    const [loading, setLoading] = useState(false);
    /*수동 폼 reg chk 필요요소*/
    const inputRef = useRef(null);
    const [emailValidation, setEmailValidation] = useState(true);
let navigator = useNavigate();
    /*수동 폼 로그인 reg chk*/
    const login = () =>{
        console.log("로그인" + inputRef.current.value);
        if(/\w{1}[\w\W]+@\w+\.\w{2,3}/.test(inputRef.current.value)) {
            setEmailValidation(false);
        }else{
            setEmailValidation(true);
        }
        // 로그인 처리
    }
    
    /*Form태그 처리*/
    const onFinish = async (values) => {
        console.log(values);
        console.log('form submit되면 여기로 온당');
        let {email, password} = values;
        setLoading(true);
        let log = await loginUser(email, password, props);
            navigator("/");

        setLoading(false);
    };
    return (
        <Layout.Content>
            <Flex vertical style={{justifyContent:'center',alignItems:'center',height:'100%', flexDirection:'column'}} children={
                <>
                <form style={{margin:"10px 0"}}>
                    <input style={{display:"block",border:`1px solid ${emailValidation?"red":"black"}`,margin:"3px 0",padding:"5px",borderRadius:"5px",fontSize:"1rem"}} type="email" name={'email'} placeholder={'email'} ref={inputRef} />
                    {
                        emailValidation && <div style={{color:'#F54C4C',margin:"5px 0"}}>올바른 이메일을 입력하세요</div>
                    }
                    <button type={'button'} onClick={login}>로그인</button>
                </form>
                <Form layout="vertical" onFinish={onFinish}
                initialValues={{email:'aaa@naver.com',password:'12345'}}>
                    <Form.Item label="이메일" name="email" rules={[{ required: true, type: 'email', message: '이메일을 입력해주세요' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="비밀번호" name="password" rules={[{ required: true, pattern:/[\w\W]{5,}/, message: '비밀번호는 5자리 이상입니다' }]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading} block>
                            로그인
                        </Button>
                    </Form.Item>
                </Form>
                </>
            }/>

        </Layout.Content>
    );
}

export default UserLoginPage;