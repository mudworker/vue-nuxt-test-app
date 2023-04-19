# vue-nuxt-test-app

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

你可以自己创建额外目录，下列有些目录拥有特殊作用。 仅 `pages` 目录是必须的; 如果你不想使用他们的话可以自行删除.

### `assets`

资源目录 assets 用于组织未编译的静态资源如 LESS、SASS 或 JavaScript。

More information about the usage of this directory
in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

组件目录 components 用于组织应用的 Vue.js 组件。Nuxt.js 不会扩展增强该目录下 Vue.js 组件，即这些组件不会像页面组件那样有 asyncData 方法的特性。

More information about the usage of this directory
in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

布局目录 layouts 用于组织应用的布局组件。 若无额外配置，该目录不能被重命名。

More information about the usage of this directory
in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `middleware`

middleware 目录用于存放应用的中间件。

### `pages`

页面目录 pages 用于组织应用的路由及视图。Nuxt.js 框架读取该目录下所有的 .vue 文件并自动生成对应的路由配置。 若无额外配置，该目录不能被重命名。

More information about the usage of this directory
in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

插件目录 plugins 用于组织那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件。 This is the place to add Vue plugins and to inject functions
or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins
in `nuxt.config.js`.

More information about the usage of this directory
in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

静态文件目录 static 用于存放应用的静态文件，此类文件不会被 Nuxt.js 调用 Webpack 进行构建编译处理。服务器启动的时候，该目录下的文件会映射至应用的根路径 / 下。 举个例子: /static/robots.txt
映射至 /robots.txt

若无额外配置，该目录不能被重命名。

More information about the usage of this directory
in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

store 目录用于组织应用的 Vuex 状态树 文件。 Nuxt.js 框架集成了 Vuex 状态树 的相关功能配置，在 store 目录下创建一个 index.js 文件可激活这些配置。 若无额外配置，该目录不能被重命名。

More information about the usage of this directory
in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

### `nuxt.config.js`

Nuxt.js 默认的配置涵盖了大部分使用情形，可通过 nuxt.config.js 来覆盖默认的配置。

--------------------------------------------
介绍：
https://www.bilibili.com/video/BV1GT4y1X7aC?p=6&vd_source=a08906bfa2cebb8fd97433c44713f26d
Nuxt.js 通用的vue.js框架 SSR

SSR:服务器端 vue渲染 html 返回浏览器

SPA：单页面 快速

SEO：搜索引擎优化 1、多页面 2、title、description、keywords 3、网站内容怎么来的？是否能被扒取到？ 常用于：新闻网站、官网、博客等 需要搜索引擎提供浏览jsp-java

解决方式一：预渲染

    a> 使用插件：prerender-spa-plugin
    1、安装：npm install prerender-spa-plugin -S
    2、vue.config.js 中配置
    b> 修改title描述关键词：vue-meta-info
    1、安装：npm install vue-meta-info -S
    2、到页面中配置

可以解决：

    1、打包多页面 
    2、每个页面单独生成title、des、keywords 
    3、接口数据在html生成之前句渲染在页面上，可以被抓取到

问题：

    1、无法配置动态路由
    2、如果title、des、keywords来自接口数据，配置到meta-info也是不行的

适合的项目：一个项目的一个页面或几个页面做seo

解决方式二：服务端渲染（SSR） 适合的项目：一个项目所有页面都要做seo

目录结构： pages：存放页面 类似于src/views components：存放组件 类似于src/components static：存放静态资源 类似于src/assets store：vuex状态树 类似于src/store
nuxt.config.js：全局配置文件 类似于vue.config.js

一、组件自动引入：用到的地方可以直接用，不需要import 二、路由的自动生成：根据pages文件夹下的层级自动生成 三、生命周期 c--s--服--s--c
**服务端生命周期**

    nuxtServerInit(store,context){}  参数一：vuex上下文  参数二：nuxt上下文
    （服务端的声明周期，是不分页面的，所以这个声明周期是存在vuex内，而不是具体页面内）

    middleware  类似vue的导航守卫
    a、全局：在nuxt.config.js内配置
    router: {
      middleware: '文件名'
    }
    创建middleware文件夹，新建 文件名.js 文件
    b、页面级别：在页面内加入middleware: '文件名'
    或者middleware(){}

    validate({params,query}){} 
    在单个页面内声明，多用于验证路由参数的合法性，验证不通过会自动跳转404

    asyncData()
    asyncData方法会在组件（限于页面组件）每次加载之前被调用。**专用于页面**，多用于page页面请求数据
    ***pages目录中的页面组件才能调用，components中的组件不能调用
    此生命周期中没有this，参数自带$axios，要用return方式返回一个对象，此对象会和vue的data合并

    fetch()
    组件和页面都能使用，asyncData类似，不同的是他不会设置组件的数据
    此生命周期中可以使用this，使用this.$axios

**服务端和客户端共有的声明周期**
beforeCreate created
**客户端声明周期**
beforeMount mounted beforeUpdate updated beforeDestroy destroyed

四.路由及路由守卫 1、router.js 需要在nuxt.config.js中引入插件，router.js文件有差别（路由不能用懒加载） 导航守卫：是同方式几乎和vue-cli中一样

2、nuxt.js 2.1中间件：middleware 全局 局部 2.2 插件：plugins 在nuxt.config.js中，配置plugins plugins: [
'@/plugins/router.js'
], 在plugins目录下新建router.js

补充：服务端不能使用localStorage和cookie 参考：https://www.npmjs.com/package/cookie-universal-nuxt
1、安装下载cookie-universal-nuxt npm i --save cookie-universal-nuxt

2、nuxt.config.js中配置 this.$cookies.set()
this.$cookies.get()
...

五、head配置 1、全局配置：nuxt.config.js中配置 head:{} 2、单页面配置：head(){return{}}


六、css全局配置 在nuxt.config.js中配置css
使用sacc需要安装：npm install --save-dev sass sass-loader
之后才能使用.scss 或 lang='scss'


七、plugins可配置全局的js文件，axios二次分装、第三方插件(antd,element等)的js文件等

八、module
方法1、安装axios 
  1.1 npm i @nuxtjs/axios -S
  1.2 nuxt.config.js中配置：
  modules:[
  '@nuxtjs/axios',
  ]
方法2、安装axios
2.1 npm i axios -S

区别，方法一可以直接用$axios，方法二需要在使用的地方做import axios from 'axios（一般会进行二次封装）

九、nuxt配置代理
npm i @nuxtjs/proxy -S
参考：https://www.cnblogs.com/JYuAn/p/12451915.html


