// rest api
fetch('https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=861')
.then(text =>{ 
    console.log(text);
    return text.json()
})
.then(json => {
    console.log(json);
    return json;
})


fetch('https://cjo3o.github.io/p2-jim/')
.then((text)=>text.text())
.then((html)=>{
    console.log(html);
})
