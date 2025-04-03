const url = "http://www.naver.com/index.html";

const re = /^https?\:\/\/www\.[A-Za-z]+\.[A-Za-z]+\/[A-Za-z]+\.html$/;
console.log(re.test(url));
console.log(re.exec(url));
console.log(url.match(re));

const target = ' hi!';
console.log(/^[\s\w]/g.test(target));