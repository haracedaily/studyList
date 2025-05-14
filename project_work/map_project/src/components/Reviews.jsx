import React, {useEffect, useState} from 'react';
import {fetchReviews, postReview} from "../../api/supadb.js";
import {UserOutlined} from "@ant-design/icons";
import {Button, Card, Form, Input, message, Rate, Typography} from "antd";

function Reviews({city:propsCity,aqi}) {
    const [form] = Form.useForm();
    // const [city, setCity] = useState(propsCity);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        // setCity(propsCity);
        if(!propsCity)return;
        fetchReviews(propsCity.id).then(data=>{
            setReviews(data);
        }).catch(e=>{console.log("error",e);});
    }, [propsCity]);
    const handleSubmit = async (values) =>{
        console.log(propsCity);
        values.city_id=propsCity.id;
        values.air_quality_index = aqi;
        let res = await postReview(values);
        if(res==='success'){
            message.success('Review created successfully');
        }else{
            message.error('Review created error');
        }
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
                    <Typography.Title level={3}>리뷰작성</Typography.Title>
                    <Form form={form} onFinish={handleSubmit} layout="vertical">
                        <Form.Item
                            label="이름"
                            name={"user_name"}
                            rules={[{required:true,message:"이름을 입력해주세요"}]}>
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