# Vue面试题记录

## 1.vue-router有哪几种钩子

A.全局钩子：

- router.beforeEach：全局前置守卫，进入路由之前

- router.beforeResolve：全局解析守卫在beforeRouteEnter调用之后调用

- router.afterEach：全局后置钩子，进入路由之后

  ```vue
  // main.js 入口文件
  import router from './router'; // 引入路由
  router.beforeEach((to, from, next) => { 
    next();
  });
  router.beforeResolve((to, from, next) => {
    next();
  });
  router.afterEach((to, from) => {
    console.log('afterEach 全局后置钩子');
  });
  ```


B.路由独享钩子：如果你不想全局配置守卫的话，你可以为某些路由单独配置守卫（beforeEnter）

```
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => { 
        // 参数用法什么的都一样,调用顺序在全局前置守卫后面，所以不会被全局守卫覆盖
        // ...
      }
    }
  ]
})
```

C.组件内钩子：

- beforeRouteEnter 进入路由前, 在路由独享守卫后调用 **不能** 获取组件实例 `this`，组件实例还没被创建
- beforeRouteUpdate (2.2) 路由复用同一个组件时, 在当前路由改变，但是该组件被复用时调用 可以访问组件实例 `this`
- beforeRouteLeave 离开当前路由时, 导航离开该组件的对应路由时调用，可以访问组件实例 `this`



## 2.聊聊你对Vue.js的模板编译的理解



## 3.Vue的双向数据绑定原理是什么？

## 4.组件之前的通信分为哪几种？怎么样去实现？

A.父组件给子组件传值



B.子组件给父组件传值



C.兄弟组件之间的传值



## 5.Vue的响应式原理（通过观察者模式来实现的）



## 6.vue-router实现原理

## 7.vuejs的两个核心是什么？

数据驱动和组件化

## 8.vue中的虚拟DOM

## 9.vue中的diff算法

