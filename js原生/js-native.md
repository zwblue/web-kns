1、ajax原生的步骤
  (1) 创建XMLHttpRequest()对象  var xmlhttp =new XMLHttpRequest（)
  (2) 使用XMLHttpRequest对象中的open()与send()方法发送资源请求给服务器。
  (3) 使用XMLHttpRequest对象的responseText与responseXML属性获取服务器的响应
  (4) 根据返回的状态实现一些交互

2、js数据类型
  基本类型：Number,String,Boolean,Null,Undefined
  复杂类型：Object

3、Undefined与Null的区别
  null: 代表空值，空对象指针，特殊的对象值 typeof(null) === 'object' 
  undefined：当一个变量未初始化时，得到的就是undefined值 typeof(undefined) === 'undefined'
  场景： 
    （1）没有返回值的函数
    （2）没有初始化的全局变量
    （3）没有初始化值的形参