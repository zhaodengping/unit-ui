### `u-button`

为什么`elementUI`在安装完，需要在`main.js`引入`Vue.use()`

将每个组件使用`install`，在全局安装，这是`vue`的一个插件特性，这样的话，可以在使用的地方引入`index.js`，并且使用`Vue.use()`可以直接使用，可以不需要使用`components`的方式引入

详情参考[vue官方文档](https://cn.vuejs.org/v2/guide/plugins.html#%E5%BC%80%E5%8F%91%E6%8F%92%E4%BB%B6)