import React, {useEffect, useState} from 'react'
import {Card, Layout, Table} from "antd";
import {getUsers} from "../../database/supabaseUserLManager.js";

const {Content} = Layout;
function UserListPage() {
  /*let dataSource = [
    {name:'홍길동',email:'qwer@qwe.qw',phone:'010-1234-5678',age:25},
  ];*/
  let [dataSource, setDataSource] = useState([]);
  let [selectedRowKeys, setSelectedRowKeys] = useState([]);
    useEffect(  ()=>{
  async function loadData(){
    setDataSource(await getUsers());
  }
  loadData();
    },[])


    //onSelectedRowChange는 선택된 행의 키를 업데이트하는 함수입니다.
    //
    const onSelectedRowChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);

    };

    //selectedRowKeys를 이용하여 선택된 행의 데이터를 가져올 수 있습니다.
    //onChange 이벤트 핸들러를 사용하여 선택된 행의 키를 업데이트합니다.
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectedRowChange,
    };
  const columns = [
      {title:'Name',width:'100px', dataIndex:'name'},
        {title:'Email', width:'200px', dataIndex:'email'},
        {title:'Phone', dataIndex:'phone',width:'200px'},
        {title:'Age', dataIndex:'age', width:'100px', align:'right'},

  ];


  return (
      <Content>
        <Card hoverable={true} style={{ margin:'1rem' }}>
          <h1>안녕하세요</h1>
          <Table columns={columns}
                    dataSource={dataSource}
                    pagination={{
                    pageSize: 10,
                    }}
                    rowKey={(record) => record.id}
                    bordered
                    scroll={{ x: 'max-content' }}
                 style={{width:'100%'}}
                    size="large"
                    rowSelection={rowSelection}

                    loading={false}
                  >
            <Table.Column title="ID" dataIndex="id" key="id" />
            <Table.Column title="이름" dataIndex="name" key="name" />
            <Table.Column title="이메일" dataIndex="email" key="email" />
            <Table.Column title="전화번호" dataIndex="phone" key="phone" />
            <Table.Column title="나이" dataIndex="age" key="age" />
            <Table.Column title="가입일" dataIndex="created_at" key="created_at" />
          </Table>
        </Card>
      </Content>
  )
}

export default UserListPage