import React from 'react';
import {Col, Layout, Row} from "antd";
import styles from './Review.module.css'
const {Content} = Layout;

function Review(props) {
    return (
        <>
            <Content className={styles.content}>
                <Row gutter={[16, 16]}>
                    <Col className={styles.col} xs={24} sm={12} md={8}>
                        <h1>Root</h1>
                    </Col>
                    <Col className={styles.col} xs={24} sm={12} md={8}>
                        <h1>Root</h1>
                    </Col>
                    <Col className={styles.col} xs={24} sm={12} md={8}>
                        <h1>Root</h1>
                    </Col>
                </Row>
            </Content>
        </>
    );
}

export default Review;