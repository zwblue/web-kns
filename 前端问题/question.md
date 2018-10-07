1、如何根据打包环境判断后台接口路径
  1.手写一个正则，对前端的域名进行验证判断测试，正式接口路径
  2.vue-cli中自带process.env.NODE_ENV 但这默认只有开发环境与正式环境，但一般正规的项目在上线之前都有一个测试环境。所以测试环境需要在build文件中增加一个build-test文件，在pack.json中增加一个npm run test 运行这个build-test文件，build-test中内容是先增加一个全局环境process.env.type='"test"',再引入build.js,另外需要在prod.env.js中增加这个type环境并抛出 
  module.exports = {
    NODE_ENV: '"production"',
    type: process.env.type
  }
  即可在这个cli中任何位置拿到这个process.env.type的值了。
2、遇到iview局部引入在IE中报错的情况
  解决方案：
    在webpack.base.conf.js中module中rules增加 babel加载器
    {//解决iview局部引入在ie中报错的情况
        test: /iview.src.*?js$/,
        loader: 'babel-loader'
    }
3、如果解决数组，对象数据的地址引用造成的双向数据绑定的问题
  coppyArray(arr){
   return arr.map((e)=>{
        if(typeof e==='object'){
           return Object.assign({},e);
         }else{
           return e;
       }
     }) 
  },
4、如何更方便的配置页面独有的标题，背景，等一些常用属性
    放在路由中的meta中进行配置比较好
    meta: {
      title: '登录页面'
    },

