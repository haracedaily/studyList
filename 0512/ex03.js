import dns from 'dns/promises';

const ip = await dns.lookup('github.co.kr',{all:true});
console.log(ip);