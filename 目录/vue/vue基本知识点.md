# Vue基本知识点

### 1.vue常用的指令：

A.v-if/-else：判断语句

B.v-show：显示和隐藏组件

C.v-for：循环(key值的作用，用来指定唯一值的)

D.v-on: 简写（@）：绑定点击事件

E.v-bind:简写（：）

F.v-model：数据的双向绑定

### 2.v-if和v-show之间的区别：

A.v-if是让组件新建和销毁，而v-show是display：none/block；

B.从性能上讲，v-show比v-if好些

### 3.vue的主要的8个生命周期钩子：

A.beforeCreate：（创建前）在数据观测，并且初始化事件没还有开始

B.created：（创建后）完成数据观测，属性和方法的运算，，初始化事件，但是$el属性还没有显示出来

C.beforeMount：（挂载前）在挂载开始之前就被调用，相关的render函数首次被调用。实例已经完成以下的配置：编译模板，把data里面的数据和模板生成html。注意此时还没有挂载html到页面上。

D.moutned：（挂载后）在el被新创建的vm.$el替换，并挂载到实例上去之后调用。实例已完成以下的配置：用上面编译好的html内容替换el属性指向的DOM对象。完成模板中的html渲染到html页面中。此过程中进行ajax交互。

E.beforeUpdate：（更新前）在数据更新之前调用，发生在虚拟DOM重新渲染和打补丁之前。可以在该钩子中进一步地更改状态，不会触发附加的重渲染过程。

F.updated：（更新后）在由于数据更改导致的虚拟DOM重新渲染和打补丁之后调用。调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作。然而在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。

G.beforeDestory：（销毁前）在实例销毁之前调用。实例仍然完全可用。

H.destoryed：（销毁后）在实例销毁之后调用。调用后，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。

第一次页面加载会触发beforeCreate、created、beforeMount、mounted, mounted说明dom渲染完毕

### 4.Vue生命周期在真实场景下的业务应用

A.created:进行ajax请求异步数据的获取、初始化数据

B.mounted:挂载元素dom节点的获取

C.nextTick:针对单一事件更新数据后立即操作dom

D.updated:任何数据的更新，如果要做统一的业务逻辑处理

E.watch:监听数据变化，并做相应的处理

### 5.计算属性、方法和侦听器

A.computed（计算属性）、methods（方法）、watch（侦听器）

B.当computed、methods、watch都可以使用时，优先实现computed，因为computed有缓存机制

### 6.vue的样式绑定：

A.通过对象的形式来绑定

```vue
<div v-bind:class='{actived: isActived}'></div>
```

B.数组的语法：

```vue
<div v-bind:class='[a, b]'></div>
data: {
    a:'main',
    b:'box'
}
// 最后渲染
<div v-bind:class='main box'></div>

```

C.内联样式绑定：

```vue
<div :style="{color: redColor,font-size: sizes +'px'}"></div>
data: {
    redColor: red,
    sizes: 25
}
```

### 7.条件渲染：v-for和v-if不推荐一起使用

### 8.数组更新检测：

A.变异方法（7个）：Vue 将被侦听的数组的变异方法进行了包裹，所以它们也将会触发视图更新

push(),pop(),shift(),unshift(),splice(),sort(),reserve();

B.替换数组：用一个含有相同元素的数组去替换原来的数组是非常高效的操作。

### 9.事件处理：

A.事件修饰符：修饰符是由点开头的指令后缀来表示的。

- .stop:
- .prevent:
- .capture:
- .self:
- .once:
- .passive:
- .once:

```vue
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即元素自身触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
// 2.1.4 新增
<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>
<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成  -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">...</div>
```

B.按键修饰符：vue 允许为 `v-on` 在监听键盘事件时添加按键修饰符

- `.enter`
- `.tab`
- `.delete` (捕获“删除”和“退格”键)
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`

```vue
<!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
<input v-on:keyup.enter="submit">

```

C.系统修饰符：

`.exact` 修饰符允许你控制由精确的系统修饰符组合触发的事件。

```vue
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button @click.exact="onClick">A</button>
```

### 10.动态组件：

```vue
// 实现数据的缓存
<keep-alive></keep-alive>
```

### 11.进入/离开&&列表动画

A.过度的类名：

- v-enter

- v-enter-active

- v-enter-to

- v-leave

- v-leave-active

- v-leave-to

  ```vue
  <div id="demo">
    <button v-on:click="show = !show">
      Toggle
    </button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
  <script>
      new Vue({
        el: '#demo',
        data: {
          show: true
        }
      })
  </script>
  <style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  </style>
  ```

12.Vue中的$route和$router之前的区别是什么？

A.$route是用来获取路由信息的

```vue
<script>
//字符串，等于当前路由对象的路径，会被解析成绝对路径，如："/shop/goods"
$route.path
//对象，包含路由中的动态片段和全匹配片段的键值对 。
$route.params
//对象，包含路由中查询参数的键值对。例如，对于 /home/news/detail/01?favorite=yes ，
//会得到$route.query.favorite == ‘yes’ 。
$route.query
//路由规则所属的路由器（以及其所属的组件）。
$route.router
//数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。
$route.matched
//当前路径的名字，如果没有使用具名路径，则名字为空。
//所以我们可以通过$route.来获取到路由里的这些信息为自己所用。这就是 $route！
$route.name
</script>
```

B.$router的作用是进行路由跳转的

```
// 从当前页面跳转到-1页面，也就是上一页
$router.go(-1);
```

