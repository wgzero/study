# JS面试题

### 1.请使用闭包的方式，写一段JS实现如下功能，函数每调用一次则该函数的返回值加1？

方式一：函数表达式实现闭包变量延迟

```js
var show = (function(i){
    return function(){
        return i++;
    }
})(0);
console.log(show());
console.log(show());
```

方式二：函数内部声明函数调用

```js
function show(){
	var i=0;
    show = function(){
         return i++;
    }
    return i++;
}    
console.log(show());
console.log(show());
```



### 2.下面这段代码的结果是什么？如何修改让其结果为 0 1 2？

- 代码实例： 结果输出三次：3

```js
for(var i=0; i < 3 ;i++){
    setTimeout(()=> console.log(i), 1);
}
```

- 修改

  - 使用let保存变量

  ```js
  for(let i=0; i < 3 ;i++){
              setTimeout(()=> console.log(i), 1);
          }
  ```

  - 自执行函数

  ```js
  for(var i=0; i < 3 ;i++){
              setTimeout((function(){
                  console.log(i);
              })(),1);
          }
  ```

  

### 3.什么是防抖和节流？有什么区别？如何去使用防抖和节流？



### 4.箭头函数和普通函数除了this指向不同之外，还有那些不同之处嘛？



### 5.for，forEach，map，for...in,for...of之间的区别？以及如何去使用？

### 6.ES6有哪些新特性？



### 7.js中的两链一包是什么？以及它们的使用场景？

### 8.

### 9.