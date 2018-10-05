//1、 对象创建方法1 new Object()
var box = new Object()
box.name = 'zw'
box.age = 24
box.run = function () {
  return this.name + this.age +'运行中、、、、'
}
console.log('box',box)
console.log('run',box.run())


// 2、构造函数创建对象
function Person (name, age) {
  this.name = name; 
  this.age = age;
  this.getName = function () {
    return '得到名字是：' + this.name;
  }
  this.setName = function (name) {
    this.name = name
  }
  this.getAge = function () {
    return '得到年龄是：' + this.age;
  }
}
Person.prototype.className = '动物'

var zw = new Person('左旺', 24);
console.log('zw这个对象中属性：' , zw)
console.log(zw.getName());
zw.setName('zuowang')
console.log(zw.getName())
zw.name = 'zw'
zw.age = 23
console.log(zw.getName())
// 遍历zw中所有可以看到的属性，包括原型对象上的。
for (var val in zw){
  console.log(val)
}


// 3、es5中的'{}'创建对象
var Animate = {
  color : 'red',
  age : 23,
  show: function () {
    console.log(this.color + '--------' + this.age)
  }
}
Animate.show()
Animate.time= '2018-08-08'
console.log(Animate)