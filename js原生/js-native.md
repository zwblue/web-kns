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
4、qs.stringify() 和JSON.stringify()的区别
  var a = {name:'hehe',age:10};

  qs.stringify序列化结果如下
  name=hehe&age=10

  而JSON.stringify序列化结果如下：
  "{"a":"hehe","age":10}"

5、apply 与 call 的用法与区别
  将某个函数或者方法中的this绑定到指定的对象中
    function fun (first, last) {
      return first + this.name + last
    }
    var obj = {
      name: 'zuowang'
    }
    fun.apply(obj,['a---','---b']) //"a---zuowang---b"
    fun.call(obj,'a---','---b') // "a---zuowang---b"

    求出某个数组中的最大值
    因为apply接收的参数是数组，所以可以直接用
    numbers = [11,2,3,4,5,34,3,43,12,41,43]
    Math.max.apply(Math,numbers)

6、bind的用法
  this.num = 9; 
  var mymodule = {
    num: 81,
    getNum: function() { 
      console.log(this.num);
    }
  };

  mymodule.getNum(); // 81

  var getNum = mymodule.getNum;
  getNum(); // 9, 因为在这个例子中，"this"指向全局对象

  var boundGetNum = getNum.bind(mymodule); //bind(后面的是this的实例是哪)
  boundGetNum(); // 81

  var foo = {
    bar : 1,
    eventBind: function(){
        var _this = this;
        $('.someClass').on('click',function(event) {
            /* Act on the event */
            console.log(_this.bar);     //1
        });
    }
  }
  《=====》
  var foo = {
    bar : 1,
    eventBind: function(){
        $('.someClass').on('click',function(event) {
            /* Act on the event */
            console.log(this.bar);      //1
        }.bind(this));
    }
}