import {supabase} from "./supabaseClient.js";
import bcrypt from "bcryptjs";
import {message} from "antd";

export const getUsers = async () => {
    const { data, error } = await supabase
        .from('members')
        .select('*')
        .order('id', { ascending: false });
    console.log(data);
    if (error) {
        console.error('Error fetching users:', error);
        return [];
    }
    return data;
}

export const loginUser = async (email, password) => {
    await supabase.from('members').select('*').eq('email',email).limit(1).then((res)=>{
        if(res.data.length>0){
            bcrypt.compare(password, res.data[0].password).then((result)=>{
                if(result){
                    message.success('로그인 성공');
                    sessionStorage.setItem('name',res.data[0].name);
                    sessionStorage.setItem('email',res.data[0].email);
                    sessionStorage.setItem('age',res.data[0].age);
                    return true;
                }else{
                    message.error('비밀번호가 틀렸습니다');
                }
            });
        }else{
            message.error('가입되지 않은 이메일입니다');
        }
        return false;
    });
}

export const deleteUserByIds = async (id) => {
    console.log(id);
    const res = await supabase
        .from('members')
        .delete()
        .in('id', id);
    if (res.error) {
        console.error('Error deleting user:', res.error);
    }
    console.log(res.data);
    return res;
}

export const updateUserById = async (id, data) => {
    console.log(id);
    console.log(data);
    const res = await supabase
        .from('members')
        .update(data)
        .eq('id', id);
    if (res.error) {
        console.error('Error updating user:', res.error);
    }
    console.log(res.data);
    return res;
}