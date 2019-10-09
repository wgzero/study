# 构建自己的node包

### A.步骤：

1.先注册账号：(https://www.npmjs.com/)

2.在命令板上登录： npm login

3.提交项目： npm publish

### B.创建自己的node包

1.先创建一个demo文件，进入该目录，运行npm login 登录

2.初始化文件: npm init -y

3.创建src目录，里面建立一个index.js文件

```js
// 文件内容
let fn = function(){
    console.log('hello zero');
}
// 导出该方法
export default fn;
```

4.项目提交： npm publish

