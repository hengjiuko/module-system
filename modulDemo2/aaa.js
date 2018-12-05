//对于公开某个函数

//这种情况下，fndd是一个私有方法，
//因为它对于aaa.js模块之外是不可见的、不可访问、不可操作
//js的安全性就提高了很多
function fndd( m,n ){
    return m + n;
}

function fnxx(){
    this.say = function( _n ){
        console.log( _n );
    }

    this.done = function( a,b ){
        return fndd( a,b );
    }
}

//在这里不能加括号，否则就变成执行函数了
module.exports = fnxx;