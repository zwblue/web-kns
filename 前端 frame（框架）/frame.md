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