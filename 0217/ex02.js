const setting = {
    theme:null,
    language:'ko',
    person : {
        name : '홍길동'
    }
}

const userTheme = setting.theme || 'light';
console.log(userTheme);

const userLanguage = setting?.language;
console.log(userLanguage);

const userName = setting.person.name;
console.log(userName);

const userAge = setting.a?.age||'미기입';
console.log(userAge);