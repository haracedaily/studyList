import React from 'react';
import {Card, Col, Layout, Row} from "antd";
import styles from "./Todo.module.css";
import {Outlet} from "react-router-dom";
const {Content} = Layout;

function TodoPage(props) {
    return (
        <>
            <Content className={styles.content}>
                {/*<Row gutter={[16, 16]}>
                    <Col className={styles.col} xs={24} sm={12} md={8}>
                        <h1>Root</h1>
                    </Col>
                    <Col className={styles.col} xs={24} sm={12} md={8}>
                        <h1>Root</h1>
                    </Col>
                    <Col className={styles.col} xs={24} sm={12} md={8}>
                        <h1>Root</h1>
                    </Col>
                </Row>*/}
                <Card>
                    <h1>Hello Todo List</h1>
                    <Outlet/>
                </Card>
            </Content>
        </>
    );
}

export default TodoPage;