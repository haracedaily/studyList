import axios from "axios";

export const todoReq = {
    async delete(id){
        const res = await axios.delete(`https://6809e14d1f1a52874cde306a.mockapi.io/todo/${id}`);
        return res.status;
    }
}