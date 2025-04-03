class DBInfo{
    static URL = 'supabe';
    static URLPASS = 'password';
    a = 10;
}

const dbInfo = new DBInfo();
console.log(dbInfo.a);
console.log(dbInfo.URL);
console.log(dbInfo.URLPASS);
console.log(DBInfo.a);
console.log(DBInfo.URL);
console.log(DBInfo.URLPASS);