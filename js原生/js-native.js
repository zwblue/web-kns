// 1、添加多个事件
var btn = document.getElementById('btn1');
btn.addEventListener('click',fun1)
btn.addEventListener('click',fun2)
function fun1 () {
  console.log('fun1函数执行了')
}
function fun2 () {
  console.log('fun2函数执行了')
}