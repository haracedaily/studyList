import React from 'react';
import {Card, Layout, Table} from "antd";

const {Content} = Layout;
function UserListPage(props) {
    const columns = [
        {title:'Name', dataIndex:'name'},
        {title:'Email', dataIndex:'email'},
        {title:'Phone', dataIndex:'phone'},
        {title:'Age', dataIndex:'age'},
    ];
    const dataSource = [
        {key:1,name:'홍',email:'email@email.com',phone:'010-1234-5678',age:25},
    ];
    return (
        <Content>
            <Card hoverable style={{ margin:'1rem' }}>
                <Table columns={columns}
                       dataSource={dataSource}
                    pagination={{
                        pageSize: 10,
                    }}
                    rowKey={(record) => record.id}
                    bordered
                    scroll={{ x: 1300 }}
                    size="middle"
                    loading={false}
                    onRow={(record) => {
                        return {
                            onClick: (e) => {
                                console.log(record);
                            },
                        };
                    }}
                    onHeaderRow={(columns, index) => {
                        return {
                            onClick: (e) => {
                                console.log(columns);
                            },
                        };
                    }}
                       >

                </Table>
            </Card>
        </Content>
    );
}

export default UserListPage;