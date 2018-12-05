//模块一
/*
    在 common.js 里面，再写其它各种各样的方法，这些方法，
    对于comon.js 之外，都是不可访问，不可操作的，
    这样的话，安全性会好一些。
*/

function common(){
    console.log( "common xxx" );
}

//对外接口
module.exports = common;