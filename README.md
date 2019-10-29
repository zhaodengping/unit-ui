### unit-ui
从0到1造轮子

1. 配置webpack
请移步到我的另一个仓库[vue-cli搭建](https://github.com/zhaodengping/vue-cli)

2. 页面布局
    `assets`是所有公共的资源，包括`css`,`js`,`imgs`

    `routers`是放所有的路由

    `uses`是展示所有组件是如何使用，以及页面的展示

    `views`是所有的重写组件

3. 目前完成的组件有

    * `u-grid`分栏
    * `u-row u-col`分栏
    * `u-button`按钮
    * `u-radio`单选框

4. 如何运行

    ```
    npm run dev/start //可以在浏览器中展示我所写的一些实例
    ```
5. 问题
    对于目前，我只想先把页面画好，对于交互类的，比如`@change`之类的,最后统一处理，先把页面效果出来

    打包。目前还没打包成功