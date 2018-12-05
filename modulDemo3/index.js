//引入三个模块 common、config、tempData

//这相当于是首页

var _common = require( "./common" );

var _config = require( "./config" );

var _tempData = require( "./tempData" );

function indexModule(){
   
    _common();

    
    _config();

   
    _tempData();
}  

//这是对外公开的接口
module.exports = indexModule;