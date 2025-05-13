import React, {useEffect, useState} from 'react';
import {fetchReviews} from "../../api/supadb.js";
import {UserOutlined} from "@ant-design/icons";
import {Button, Card, Form, Input, Rate} from "antd";

function Reviews({city:propsCity}) {
    const [form] = Form.useForm();
    // const [city, setCity] = useState(propsCity);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        // setCity(propsCity);
        if(!propsCity)return;
        fetchReviews(propsCity.id).then(data=>{
            console.log("reviews",data);
            setReviews(data);
        }).catch(e=>{console.log("error",e);});
    }, [propsCity]);
    console.log(propsCity);
    // console.log(city);
    const handleSubmit = (e) =>{
        console.log('submit');
    }

    if(propsCity ===null) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <div>
                    <h1>city {propsCity?.name}</h1>
                {reviews.map((review)=>(
                    <div key={review.id}>
                        <p>{review.comment}</p>
                        <p><UserOutlined /> 작성자 : {review.user_name}</p>
                        <p>작성일 : {new Date(review.created_at).toLocaleDateString()}</p>
                    </div>
                    )
                )}
                <Card>
                    <Form form={form} onFinish={handleSubmit} layout="vertical">
                        <Form.Item label="이름" name={"userName"} rules={[{required:true,message:"이름을 입력해주세요"}]}>
                            <Input prefix={<UserOutlined/> }
                                placeholder={"이름을 입력해주세요."}></Input>
                        </Form.Item>
                        <Form.Item
                            name="rating"
                            label="평점"
                            rules={[{required:true,message:"평점을 선택해주세요"}]}
                        >
                            <Rate></Rate>
                        </Form.Item>
                        <Form.Item
                            name="comment"
                            label="리뷰 내용"
                            rules={[{required:true,message:"리뷰내용을 입력해주세요"}]}
                            >
                            <Input.TextArea rows={4} placeholder={"리뷰내용을 입력해주세요"}>

                            </Input.TextArea>
                        </Form.Item>
                        <Form.Item>
                            <Button type={"primary"}  htmlType="submit" block>리뷰작성</Button>
                        </Form.Item>
                    </Form>

                </Card>
            </div>
        </>
    );
}
export default Reviews;