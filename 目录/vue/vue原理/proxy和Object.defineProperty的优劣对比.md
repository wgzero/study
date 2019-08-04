proxy和Object.definedProperty之间的区别：

1.Proxy的优势：

A.Proxy可以直接监听对象而非属性

B.Proxy可以监听数组的变化

C.Proxy有多达13种拦截方法，不限于apply、ownKeys、deleteProperty、has等等是Object.defineProperty所不具备的

D.Proxy返回的是一个新对象，我们只操作新对象就可以达到目的，而Object.defineProperty只能遍历对象属性直接修改

E.Proxy作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利

2.Object.property的优势：

A.兼容性好，支持IE9

