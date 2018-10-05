1、http与https的区别
  http是http协议运行在tcp之上，传输内容是明文，客户端与服务端无法验证对方身份
  https是http运行在SSL/TLS，SSL/TLS运行在TCP之上，传输内容都经过加密，客户端可以验证服务端身份
2、常见的http状态码
  1、200 表示请求已经成功
  2、403 服务器拒绝请求。
  3、404 服务器找不到请求的网页。
  4、400 服务器不理解请求的语法。 
  5、401 请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应。 
  6、500 服务器遇到错误，无法完成请求。
  概要介绍：
    2开头 （请求成功）表示成功处理了请求的状态代码。
    3开头 （请求被重定向）表示要完成请求，需要进一步操作。 通常，这些状态代码用来重定向。
    4开头 （请求错误）这些状态代码表示请求可能出错，妨碍了服务器的处理。
    5开头（服务器错误）这些状态代码表示服务器在尝试处理请求时发生内部错误。 这些错误可能是服务器本身的错误，而不是请求出错。
 