import React, {useState} from 'react';
import {Button, Drawer} from "antd";
import {Link, useNavigate} from "react-router-dom";

function Menu(props) {
    const [open, setOpen] = useState(false);
    const [placement,setPlacement] = useState("left");
    const navigator = useNavigate();

    const onClose=()=>{
        setOpen(false);
    }
    const showDrawer = () =>{
        setOpen(true);
    }
    return (
        <div>
            <Button style={{position:'absolute', top:'1rem',left:'1rem',zIndex:'999'}} onClick={showDrawer}>Open</Button>
            <Drawer
                title={"Basice Drawer"}
                placement={placement}
                closable={false}
                onClose={onClose}
                open={open}
                key={placement}
            >
                <ul>
                    <li>
                        <Button onClick={()=>{
                            onClose();
                            navigator("/");
                        }}>root</Button>
                    </li>
                    <li>
                        <Link to={"/user"} onClick={onClose}>user</Link>
                    </li>
                </ul>
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Drawer>
        </div>
    );
}

export default Menu;