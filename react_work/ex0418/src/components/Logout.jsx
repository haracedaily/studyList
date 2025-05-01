import React from 'react';
import {Modal} from "antd";
import {useNavigate} from "react-router-dom";

function Logout(props) {
    const [openModal, setOpenModal] = React.useState(false);
    const navigate = useNavigate();
    const showModal = (e) => {
        setOpenModal(true);
    }
    const okModal = () => {
        sessionStorage.clear();
        navigate('/user/login');
        navigate("/");
        navigate("/user/login");
        console.log("?");
        setOpenModal(false);
    }
    const cancelModal = () => {
        setOpenModal(false);
    }
    return (
        <>
            <h1 onClick={showModal}>로그아웃</h1>
            <Modal title={"로그아웃"} open={openModal} onOk={okModal} onCancel={cancelModal}>
                <h1>로그아웃 하시겠습니까?</h1>
            </Modal>
        </>
    );
}

export default Logout;