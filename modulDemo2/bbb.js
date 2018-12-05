//引入aaa.js模块
var _fn = require( "./aaa.js" );

//此时，_fn是一个函数
console.log( _fn );

//new一个实例化对象
var _fn1 = new _fn;
//此时，变为了对象
console.log( _fn1 );

_fn1.say( "今天星期四" );

console.log( _fn1.done( 3,4 ) );