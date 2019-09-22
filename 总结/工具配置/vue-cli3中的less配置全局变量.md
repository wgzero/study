## I.vue-cli3中的less变量配置

1.安装资源模块

```

```

2.配置vue.config.js

```js
const path = require('path');
module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8585
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // 配置全局less变量访问
        path.resolve(__dirname, './src/assets/styles/css/variables.less')
      ],
    },
  }
}

```

3.在src/assets/styles/css/目录下创建variables.less文件

4.使用全局less

```css
background: @bgColor;
```

