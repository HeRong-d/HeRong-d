/**
 * 自定义 提示框( Toast )组件
 */
 var Toast = {};

 Toast.install = function (Vue, options) {
   Vue.prototype.ggf_isBlank = function (data) {
    if(data == '' || data == null || data == undefined || data== "null"){
        return true;
    }else{
        return false;
    }
    
   };
 }
  
 // 向外暴露接口
 module.exports = Toast;