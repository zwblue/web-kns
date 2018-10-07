1、react与vue框架相同点与区别
  相同点：
  （1） 提供了响应式与组件化的视图组件
  （2） 都使用了虚拟DOM
  （3） 都将注意力保持在核心库，而将其他功能如路由，全局状态交给相关的库
  （4） 都有支持的原生的方案 
  不同点：
  （1） react是采用的是mvc模式，而vue采用的是mvvm模式
  （2） 虚拟DOM也不一样，vue会自动跟踪每个组件的依赖关系，不需要重新渲染整个组件树，而react全部组件都会重新渲染，需要配合shouldComponentUpdate来进行控制
  （3） 组件写法不一样，react是jsx + inline style 把所有的html与css写进js中
        而vue推荐的是webpack+vue-loader的单位文件组件格式。
  （4）数据绑定 ，vue实现了双向绑定 ，react的数据流动是单向的
  （5） 他们支持native的方式不同，vue === weex   react ==== react-native

2、mvc与mvvm的区别
  MVC:
  MVC是比较直观的架构模式，用户操作->View（负责接收用户的输入操作）->Controller（业务逻辑处理）->Model（数据持久化）->View（将结果反馈给View）。
  MVVM:
  mvvm将'数据模型数据双向绑定'的思想作为核心，因此在view与model之间没联系，通过viewModel进行交互，而且Model与ViewModel之间的交互是双向的，因此视图数据的变化会同时修改数据源，而数据源数据的变化也会立即反应到视力上

3、vue的响应式原理是什么
  1.vue.js是采用数据劫持，并结合发布者——订阅者的模式：通过Object.defineProperty()来劫持vue中各个属性的setter、getter，在数据变动的时候，再发布消息给订阅者
4、详情的原理： 
  1.observe： 
    在Vue中的data:function(){}，里面的每一个属性，也就是需要observe的数据对象，会进行进行递归遍历，包括子属性对象的属性，都加上 setter和getter； 这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化
  2.模板解析： 
    接下来，complie会去解析模板指令，将模板中的变量替换成数据，然后再更新视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据变动了，就会接到通知更新视图
  3.watcher： 
    还有一位关键的角色-watcher:订阅者； 
    他是数据监听与模板解析之间通讯的桥梁， 
    1、在自身实例化时往属性订阅器(dep)里面添加自己 
    2、自身必须有一个update()方法 
    3、待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。
  4.mvvm
  MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果。