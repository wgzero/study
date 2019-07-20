## I.es6基础

#### 1.let和const

A.let和const没有作用域提升，并且都是块级作用域

B.let声明了，不可重复在声明，const声明了就必须赋值，不然会报错

C.能用const的就不要用let，能用let就不要用let

#### 2.结构赋值：

A.对象的结构赋值

```
const obj = {
    a: 'zero',
    b: 'summer'
}
const {a, b} = obj; 
console.log(a,b); //zero, summer
```

B.数组的解构赋值：

```
const obj = ['one', 'two', 'three'];
const [a,b,c] = obj;
console.log(a,b,c); // one two three
```

#### 3.模板字符串：(``)

```js
let a = 'zero';
console.log(`${a}`); // zero
```

#### 4.箭头函数：(()=>{})

A.要点：这里的this指向和es5this指向不同，这里的this指向是说：当前this的调用，es5this调用是指全局

```
// es5函数写法：
function show(){
    console.log('hello world');
}
show();
// es6写法：
()=>{console.log('123')}
```

#### 5.(...)三个点展开运算符

A.数组扩展运算符相当于es5中的数组的concat的用法：（原理结构）

```
let a = [1,2,3];
let b =[4,5,6,...a];
console.log(b); // 4,5,6,1,2,3
```



