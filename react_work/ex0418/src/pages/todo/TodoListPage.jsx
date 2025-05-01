import React, {useEffect, useState} from 'react';
import {Button, Table, Tag, message} from "antd";
import {useNavigate} from "react-router-dom";
import {todoReq} from "../../database/mockApi.js";

function TodoListPage(props) {
    const [todos, setTodos] = React.useState([]);
    useEffect(() => {

    }, []);
    const navigate = useNavigate();
    const [selectedRowkeys, setSeletedRowKeys] = useState([]);

    const rowSelection = {
        selectedRowKeys:selectedRowkeys,
        onChange : (newSelectedRowKeys)=>{
            setSeletedRowKeys(newSelectedRowKeys);
        }
    }

    const loadData = () => {
        fetch('https://6809e14d1f1a52874cde306a.mockapi.io/todo?sortBy=id&order=desc').then(res=> res.json()).then(data => {
            setTodos(data);
        })
    }
    function checkRow(el){
        console.time('checkRow')
        el.completed = !el.completed;
        fetch(`https://6809e14d1f1a52874cde306a.mockapi.io/todo/${el.id}`,{
            method:"PUT",body:JSON.stringify(el),
            headers:{"Content-Type":"application/json"}
        }).then(res=> res.json()).then(data => {

            setTodos(todos.map(el=>{
                return el.id===data.id?data:el;
            }))


            // loadData();
        })
        console.timeEnd('checkRow');
    }
    const handleDelete = () => {
    //[41,42]
        let result = [];
        selectedRowkeys.forEach(id=>{
            console.log(id);
        todoReq.delete(id).then(res=> {
            result.push(res);
            console.log(result);
            if(result.includes('200')){
                message.success('삭제되었습니다.');
                loadData();
            }
        });
    })
    }
    return (
        <>
        <h1>List page</h1>
            <div style={{display:"flex", gap:"1rem", marginTop:"1rem"}}>
            <Button type={"primary"} variant={"filled"} color={"geekblue"} onClick={loadData}>조회</Button>
            <Button type={"primary"} onClick={()=>{
                console.log(selectedRowkeys);
                if(selectedRowkeys.length!==1) message.warning("하나만 선택");
                else navigate("/todo/modify/"+selectedRowkeys[0]);
            }}>수정</Button>
            <Button danger variant={"filled"} color={"magenta"} onClick={handleDelete}>삭제</Button>
            </div>
          {/*  {
                todos.map(el=>{return (<h1>{el.todo}</h1>)})
            }*/}
            <Table rowSelection={rowSelection} dataSource={todos} size={"small"} rowKey={"id"}>
                <Table.Column title="번호" dataIndex="id" key="id"/>
                <Table.Column title="Todo" dataIndex="todo" key="todo"/>
                <Table.Column title="달성" dataIndex="completed" key="completed" onCell={(record,rowIndex)=>{return {onClick:()=>{checkRow(record,rowIndex)}}}} render={(value)=>
                    (
                    <Tag color={value?"green":"volcano"} style={{cursor:"pointer"}}>{value?"완료":"미완"}</Tag>
                        /*<select>
                            {value?<option value="true">완료</option>:<option value="false">미완</option>}
                        </select>*/
                )
                }/>
                <Table.Column title="ID" dataIndex="userId" key="userId"/>
            </Table>
        </>
    );
}

export default TodoListPage;