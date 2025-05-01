import React, {useEffect, useState} from 'react';
import {Button, Card, Form, Input, Layout, message, notification, Select} from "antd";
import {useNavigate, useParams} from "react-router-dom";

function TodoModifyPage(props) {
    const [loading,setLoading] = useState(false);
    const {id}=useParams();
    const [form] = Form.useForm();
    const navigate = useNavigate();
    console.log(id);
    useEffect(() => {
        fetch(`https://6809e14d1f1a52874cde306a.mockapi.io/todo/${id}`).then(res => res.json()).then(result=>{
            form.setFieldsValue(result);
        });
    },[]);
    function onFinish(value){
        console.log(value);
        setLoading(true);
        fetch(`https://6809e14d1f1a52874cde306a.mockapi.io/todo/${id}`,{
            method: "PUT",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(value)
        })
            .then(res=>res.json())
            .then(res=>{console.log(res);
                message.success("수정 완료");
                notification.success({
                    message:"성공적으로 수정하였습니다."
                });
                navigate("/todo/list");
            })
        setLoading(false);
    }
    return (
        <>
            <Layout.Content>
                <h1>Modify page</h1>
                <Card hoverable>
                    <Form form={form} layout="vertical" onFinish={onFinish} >

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

export default TodoModifyPage;