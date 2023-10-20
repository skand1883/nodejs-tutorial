// Modules
/*const john="john";
const peter="peter";
let tipu="Tipu";
const secret ="super secret";

const sayHi = (name)=>{
    console.log('Hello there '+name)
}*/
const names = require('./name');
const sayHi= require('./utils')

require('./mind_grenade')

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
sayHi(names.tipu);