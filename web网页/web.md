1、如何进行网站性能优化
  1. JavaScript 压缩和模块打包
  2. 按需加载资源
  3. 在使用 DOM 操作库时用上 array-ids
  4. 缓存
  5. 启用 HTTP/2
  6. 应用性能分析
  7. 使用负载均衡方案
  8. 为了更快的启动时间考虑一下同构
  9. 使用索引加速数据库查询
  10. 使用更快的转译方案
  11. 避免或最小化 JavaScript 和 CSS 的使用而阻塞渲染
  12. 用于未来的一个建议：使用 service workers + 流
  13. 图片编码优化
2、优雅降级和渐进增强
  1.优雅降级：一开始就构建站点的完整功能，然后针对浏览器进行兼容性测试与修复
  2.渐进增强：一开始就针对低版本的浏览器进行构建页面，完成基本的功能，然后再针对高级浏览器进行追加更好的效果与用户体验，
3、JS哪些操作会造成内存泄露
  1.意外的全局变量引起的内存泄露
  2.闭包引起的内存泄露
  3.被遗忘的定时器或者回调
  4.没有清理的DOM元素引用
  5.子元素存在引起的内存泄露