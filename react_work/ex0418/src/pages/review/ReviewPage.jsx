import React from 'react';
import {Outlet} from "react-router-dom";
import {Layout,Card} from "antd";
const {Content} = Layout;
function ReviewPage(props) {
    return (
        <Content>
            <Card>

        <div>Review</div>
        <Outlet/>
            </Card>
        </Content>
    );
}

export default ReviewPage;