# service worker
## 作用
- 缓存
- 可实现离线
- web push
- 解决后台长计算等问题
- 精确控制缓存
- pwa

## 如何配置
- WorkboxWebpackPlugin
- ManifestPlugin:
  - 生成mainifest文件：决定哪些资源进行缓存
  - 提议将所有静态资源进行缓存
  - 过大的图片和视频不要进行缓存
- 注册
```
serviceWorker.register()
```

## 注意点
- 会延长首屏加载时间，但是页面总体加载时间减少
- 兼容性
- 只在localhost和https下使用

## 传统HTTP缓存技术
- 浏览器缓存
- 代理服务器缓存（cdn）
- 服务器缓存
- 数据库缓存

# SSR
## 优点
- 加快首屏幕加载时间
- 优化SEO

## Next
- SSR（与用户相关的页面，难以静态化）, SSG(getStaticProps,与用户无关的页面)
- SSR: 无法获得客户端信息，比如window
- 基于React
- 默认情况下，每个组件都是服务器渲染的
- 自动代码拆分，加快页面加载速度
- 不加载不必要的代码
- 简单的客户端路由（基于页面）
- 基于Webpack的开发环境，支持模块热更新（HMR）
- 获取数据非常简单
- 支持任何Node HTTP服务器实现，如Express
- 支持Babel和Webpack自定义
- 能够部署在任何能运行node的平台
- 内置页面搜索引擎优化（SEO）处理

## 其他框架
- nuxt：vue
  - 快速入门工具：creat-nuxt-app
- nest：TypeScript

## 是否需要用SSR
- 架构大型，动态页面（单独的api请求很多），面向公共用户
- SEO优化（有另外的方法：部分页面使用静态页面）






