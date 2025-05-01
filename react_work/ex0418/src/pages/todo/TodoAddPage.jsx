import React, {useState} from 'react';
import {Button, Card, Form, Input, Layout, message, notification, Select} from "antd";
import {useNavigate} from "react-router-dom";

function TodoAddPage(props) {
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    function onFinish(value){
        console.log(value);
        setLoading(true);
        fetch("https://6809e14d1f1a52874cde306a.mockapi.io/todo",{
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(value)
        })
            .then(res=>res.json())
            .then(res=>{console.log(res);
                message.success("저장 완료");
                notification.success({
                    message:"성공적으로 저장하였습니다."
                });
                navigate("/todo/list");
            })
        setLoading(false);
    }
    return (
        <>
            <Layout.Content>
                <h1>Add page</h1>
                <Card hoverable>
                    <Form layout="vertical" onFinish={onFinish} initialValues={
                        {
                            createdAt: "2025-04-24T09:10:09.632Z",
                            todo: "추가하기",
                            completed: 0,
                            userId: "123",
                        }
                    }>

                        <Form.Item label={"계정"} name="userId">
                            <Input/>
                        </Form.Item>
                        <Form.Item label={"Todo"} name="todo" rules={[{required:true,message:"할일을 입력하세요."}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item label={"완료여부"} name="completed">
                            <Select>
                                <Select.Option value={0}>
                                    미완료
                                </Select.Option>
                                <Select.Option value={1}>
                                    완료
                                </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label={"작성일시"} name="createdAt">
                            <Input/>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" loading={loading} block>저장</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Layout.Content>
        </>
    );
}

export default TodoAddPage;