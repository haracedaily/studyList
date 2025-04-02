const test = [{
    "id": "fe439b74-39f9-49f7-8a7c-1f3e70227a4c",
    "name": "Alice",
    "email": "alice@example.com",
    "created_at": "2025-03-05T06:01:54.227622",
    "active": true
}, {
    "id": "85a17fdd-30a7-45e3-8121-18c2142e0007",
    "name": "Aliice",
    "email": "alice2@example.com",
    "created_at": "2025-03-05T06:07:05.377249",
    "active": true
}, {
    "id": "4c75b9db-5dd9-436a-8994-1c1dcd061d1b",
    "name": "Bob",
    "email": "Bob@naver.com",
    "created_at": "2025-03-05T06:07:05.377249",
    "active": true
}, {
    "id": "1ca56262-e1bd-40a5-921a-030ff76be8bf",
    "name": "Ali",
    "email": "ali@example.com",
    "created_at": "2025-03-05T06:10:12.210406",
    "active": true
}, {
    "id": "54625dbe-3494-46cd-b89a-d32b9214a106",
    "name": "홍길동",
    "email": "hong@example.com",
    "created_at": "2025-03-06T05:34:25.970001",
    "active": true
}, {
    "id": "38256648-85e3-4b93-809f-37ae8370b0e9",
    "name": "김철수",
    "email": "kim@example.com",
    "created_at": "2025-03-06T05:34:25.970001",
    "active": true
}, {
    "id": "f6f637de-d35a-4f9b-ad0f-0c01f999363d",
    "name": "이영희",
    "email": "lee@example.com",
    "created_at": "2025-03-06T05:34:25.970001",
    "active": true
}, {
    "id": "9c5acac3-9ff7-4c91-8c08-fecb9eeca4b8",
    "name": "qqq",
    "email": "qqq@naver.com",
    "created_at": "2025-03-06T06:33:47.092073",
    "active": true
}];
let rows = '';
for (let i = 0; i < test.length; i++) {
    rows+=`
<tr>
<td>${test[i].id}</td>
<td>${test[i].name}</td>
<td>${test[i].email}</td>
<td>${test[i].created_at}</td>
<td>${test[i].active}</td>
</tr>`;
}
console.log(rows);
let users=`
    <div>
    <table>
    <tr>
    <th>id</th>
    <th>name</th>
    <th>email</th>
    <th>created_at</th>
    <th>active</th>
    </tr>
    <tbody>
    ${rows}
    </tbody>
    </table>
`