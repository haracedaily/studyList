import React, {useEffect, useState} from 'react'
import {Button, Card, Form, Input, Layout, message, Modal, notification, Popconfirm, Table} from "antd";
import {deleteUserByIds, getUsers, updateUserById} from "../../database/supabaseUserLManager.js";

const {Content} = Layout;
function UserListPage() {
  /*let dataSource = [
    {name:'홍길동',email:'qwer@qwe.qw',phone:'010-1234-5678',age:25},
  ];*/

  async function loadData(){
    setDataSource(await getUsers());
  }
  let [dataSource, setDataSource] = useState([]);
  let [selectedRowKeys, setSelectedRowKeys] = useState([]);
  let [showModal, setShowModal] = useState(false);
  let [form] = Form.useForm();
    useEffect(  ()=>{
  loadData();
    },[])

    //onSelectedRowChange는 선택된 행의 키를 업데이트하는 함수입니다.
    //
    /*const onSelectedRowChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);

    };*/

    //selectedRowKeys를 이용하여 선택된 행의 데이터를 가져올 수 있습니다.
    //onChange 이벤트 핸들러를 사용하여 선택된 행의 키를 업데이트합니다.
    const rowSelection = {
        selectedRowKeys,
        onChange: (newSelectedRowKeys) => setSelectedRowKeys(newSelectedRowKeys),
    };
  const columns = [
      {title:'Name',width:'100px', dataIndex:'name'},
        {title:'Email', width:'200px', dataIndex:'email'},
        {title:'Phone', dataIndex:'phone',width:'200px'},
        {title:'Age', dataIndex:'age', width:'100px', align:'right'},

  ];
  async function handleEdit(){
      message.info("누름");
        form.setFieldsValue(dataSource.find(el=> el.id === selectedRowKeys[0]));
      setShowModal(true);
  }

async function handleDelete(){
message.info(selectedRowKeys);
    if(selectedRowKeys.length > 0){
        await deleteUserByIds(selectedRowKeys).then((res)=>{
            if(res) {
                setSelectedRowKeys([]);
                message.success('삭제되었습니다');
                notification.success(
                    {
                        message: '삭제 완료',
                        description: '성공적으로 삭제되었습니다.',
                    }
                )
                loadData();
            }else{
                message.error('삭제 실패하였습니다 : '+res.error);
            }
        });
    }else{
        alert("삭제할 사용자를 선택하세요");
    }
}

    function handleModalOk() {
      updateUserById(selectedRowKeys[0],form.getFieldsValue()).then((res)=>{
            if(!res.error) {
                setSelectedRowKeys([]);
                message.success('수정되었습니다');
                notification.success(
                    {
                        message: '수정 완료',
                        description: '성공적으로 수정되었습니다.',
                    }
                )
                loadData();
            }else{
                message.error('수정 실패하였습니다 : '+res.error.message);
            }
      })
        setShowModal(false);
    }

    return (
      <Content>
        <Card hoverable={true} style={{ margin:'1rem' }}>
          <h1>안녕하세요</h1>
            <div style={{margin:'1rem 0'}}>
                <Popconfirm title={"삭제하시겠습니까?"} onConfirm={handleDelete} okText="삭제" cancelText="취소">
                <Button danger disabled={selectedRowKeys.length===0}>삭제</Button>
                </Popconfirm>
                <Button color="cyan" disabled={selectedRowKeys.length!==1} variant="solid" onClick={handleEdit} style={{marginLeft:"1rem"}}>수정</Button>
            </div>
            <Modal open={showModal} onCancel={()=>setShowModal(false)} onOk={handleModalOk}>
                <Form form={form} layout="vertical">
                    <Form.Item label="이름" name="name" rules={[{ required: true }]}>
                        <Input></Input>
                    </Form.Item>
                    <Form.Item label="email" name="email" rules={[{ required: true }]}>
                        <Input></Input>
                    </Form.Item>
                    <Form.Item label="age" name="age" rules={[{ required: true }]}>
                        <Input></Input>
                    </Form.Item>
                    <Form.Item label="phone" name="phone" rules={[{ required: true }]}>
                        <Input></Input>
                    </Form.Item>

                </Form>
            </Modal>
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