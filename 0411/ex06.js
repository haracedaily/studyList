function parseUrl(url = ""){
    console.log(`url = ${url}`);
    const aa = 10;
    const ma = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
    const [,protocol,host,path]=ma;
    return {protocol,host,path};
}

const result = parseUrl("http://www.naver.com/aa");
console.log(result);