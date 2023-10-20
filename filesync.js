const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./first.txt','utf-8');
const second = readFileSync('./second.txt','utf-8');

writeFileSync('new.txt','here is the result'+ first+' '+second,{flag:'a'});

console.log('done with this task');
console.log('starting the next one');
