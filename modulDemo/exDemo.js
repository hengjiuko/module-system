/*exports是一个对象，xxfn是exports的一个方法
    通过 xxfn， 把它当做此模块的访问入口，
    reDemo模块，引入exDemo模块，通过xxfn入口，访问此模块。*/
exports.xxfn = function( _n ){
    console.log( "这是一个对外公开的模块" );
    
    console.log( _n );
}