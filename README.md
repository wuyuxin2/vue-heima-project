# 这是一个Vue的项目
### 在线预览：https://wuyuxin2.github.io/vue-shop-heima-project/dist
### clone到本地，npm install,npm i vue-router,npm run dev 

## 用心感受每一行代码中的诗情雅意。
### vscode快速git

## 制作首页App组件
1. 完成 Header 区域，使用的是 Mint-UI 中的Header组件
2. 制作底部的 Tabbar 区域，使用的是 MUI 的 Tabbar.html
  + 在制作 购物车 小图标的时候，操作会相对多一些
  + 先把 扩展图标的 css 样式，拷贝到 项目中
  + 拷贝 购物车 小图标，添加 如下样式 ‘mui-icon mui-icon-extra mui-icon-extra-cart’
3. 在中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造 tabbar 为 router-link

## 设置路由高亮

## 点击 tabbar 中的路由链接，展示对应的路由组件

## 制作首页轮播图布局

## 获取首页轮播图数据
1. 获取数据，如何获取呢？使用 vue-resource
2. 使用 vue-resource 的 this.$http.get 获取数据
3. 获取到的数据，要保存到 data 身上
4. 使用 v-for 循环渲染 每个 item 项

## 改造 九宫格 区域的样式

## 改造 新闻资讯 路由链接

## 新闻资讯 页面制作
1. 先绘制界面，使用 MUI 中的 media-list.html
2. 使用 vue-resource 获取数据
3. 渲染真实数据

## 实现 新闻资讯列表 点击跳转到新闻详情
1. 把列表中的每一项改造为 router-link，同时，在跳转的时候，应该提供唯一的id标识符
2. 创建新闻详情的组件页面 NewInfo.vue
3. 在 路由模块中，将 新闻详情的 路由地址 和 组件页面对应起来

## 实现新闻详情的页面布局和渲染

## 单独封装一个 comment.vue 评论子组件
1. 先创建一个 单独的 comment.vue 组件模版
2. 在需要使用 comment 组件的 页面中，先手动 导入 comment 组件
  + `import comment from './comment.vue'`
3. 在父组件中，使用`component`属性，将刚才导入 comment 组件，注册为自己的 子组件
4. 将注册子组件时候的，注册名称，以 标签形式，在页面中 引用即可

## 获取所有的评论数据显示到页面中

## 实现点击加载更多评论的功能
1. 为加载更多按钮，绑定点击事件，在事件中，请求 下一页数据
2. 点击加载更多，pageindex++，然后重新调用this.getComments() 方法，重新获取最新一页的数据
3. 为了放置 新数据 覆盖老数据的情况，我们在 点击加载更多的时候，每当获取新数据，应该让老数据调用 数组的 concat 方法，拼接上新数组

## 发表评论
1. 把文本框做双向数据绑定
2. 为发表按钮绑定一个事件
3. 校验评论内容是否为空，如果为空，则Toast提示用户 评论内容不能为空
4. 通过 vue-resource 发送一个请求，把评论内容提交给 服务器
5. 当发表评论ok后，重新刷新列表，以查看最新的评论
 + 如果调用 getComments 方法重新刷新评论列表的话，可能只能得到 最后一页的评论，前几页的评论获取不到
 + 换一种思路：当评论成功后，在客户端，手动拼接处一个最新的评论对象，然后 调用 数组的 unshift 方法，把最新的评论，追加到 data 中 comments 的开头；这样，就能 完美实现刷新评论列表的需求

 ## 改造图片分析 按钮为 路由的链接并显示对应的组件页面


## 绘制 图片列表 组件页面结构并美化样式
1. 制作顶部的滑动条
2. 制作 底部图片列表
## 制作顶部滑动条的坑们：
1. 借助 MUI 中的 tab-top-webview-main.html 
2. 需要把 slider 区域的 mui-fullscreen 类去掉
3. 滑动条无法正常触发滑动，通过检查官方文档，发现这是JS组件，需要被初始化一下
  + 1. 导入 mui.js
  + 2. 调用官方提供的 方式 去初始化
  ```
  mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  });
  ```
4. 我们在初始化 滑动条 的时候，导入的 mui.js，但是，控制台报错：TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
 + 可能是mui.js中用到了以上，但是webpack 打包好的 bundle.js 中，默认是启用严格模式
 + 解决方案： 1. 把mui.js中的非严格模式的代码改掉，但，不现实；2. 把webpack打包时候的严格方式取消 `babel-plugin-transform-remove-strict-mode`
5. 刚进入图片分享页面的时候，滑动条无法正常工作，经过我们认真的分析，如果要初始化滑动条，必须要等 DOM 元素加载完毕，所以我们把初始化滑动条的代码，搬到了 mounted 生命周期函数中
6. 获取所有分类，并渲染 分类列表

### 制作图片列表区域
1. 图片列表需要使用懒加载技术，使用Mint-UI提供的现成组件 `lazy-load`
2. 根据 `lazy-load`的使用文档，尝试使用
3. 渲染图片列表数据

## <router-link :to="'/home/photoinfo/' + item.id" v-for="item in list" :key="item.id" tag="li"> 
 + 因为使用表达式，所以属性 to 需要进行数据绑定 :to

## 在methods写完api方法，要记得在created中调用

##实现了 图片列表的 懒加载改造和样式美化
+ info在img上方，img{position:relative},info{position:absolute;bottom:0}

## 实现了 点击图片 跳转到 图片详情页面
1. 在改造 li 成 router-link 的时候，需要使用 tag 属性指定要渲染为 哪种元素

## 实现 详情页面的布局和美化，同时获取数据渲染页面

## 实现 图片详情中 需哦略图的功能
1. 使用插件 vue-preview 这个缩略图插件
2. 获取到所有的图片列表
3. 注意：每个图片里面必须有 w 和 h 属性

## 绘制 商品列表 页面基本结构并美化

## 尝试在手机上 去进行项目的预览和测试
1. 保证手机的正常运行
2. 保证手机和电脑处于同一个局域网中，就是说手机可以访问 电脑的api
3. 打开自己的 项目中 package.json 文件，在 dev 脚本中，添加一个 --host 指令，把当前电脑的ip地址，设置为 --host 的指令值
+ 如何查看电脑的ip ifconfig | grep "inet " | grep -v 127.0.0.1

## 
