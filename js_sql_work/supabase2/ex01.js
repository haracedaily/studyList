import {ordersMInsert, usersMInsert, usersSelectByEmail} from "./db.js";

//await usersMInsert();
const userId = await usersSelectByEmail('qqq@naver.com');
ordersMInsert(userId);