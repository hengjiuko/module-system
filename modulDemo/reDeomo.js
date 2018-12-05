//引入exDemo模块，在根目录下用"./"形式
//根目录是当前文件所在的目录算起
var _ex = require( "./exDemo" );

console.log( _ex );

_ex.xxfn( "通过xxfn做入口，访问模块" );
