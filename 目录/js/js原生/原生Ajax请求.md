## I.原生get，post和ajax请求

#### 1.一个完整的ajax请求包括五个步骤：

A.创建XMLHTTPRequest对象

B.使用open方法创建http请求，并设置请求地址

C.设置发送的数据，开始和服务器端交互

D.注册事件

E.获取响应并完成更新界面

#### 2.onreadystatechange，readystate和stats

![1563674232420](C:\Users\wugang\AppData\Roaming\Typora\typora-user-images\1563674232420.png)

status状态码：

**200：请求成功（后台处理结果OK）**

**303：重定向**

400：请求错误

401：未授权

403：禁止访问

**404：页面找不到**

**500：服务器错误**

#### 3.原生get请求：

```js
//1.创建XMLHTTPRequest实例
var xhr = new XMLHTTPRequest();
//2.监听状态的变化
xhr.onreadystatechange = function(){
	//3.请求成功
    if(xhr.readystate == 4){
    	//4.响应成功
        if(xhr.state == 200){
        	// 5.打印结果
            console.log(xhr.responseXML);
        }
    }
};
// 6.发送请求方式以及地址
xhr.open('get','xxx.php');
// 7.发送请求
xhr.send();
```

#### 4.原生post请求：

```js
var xhr = new XMLHTTPRequest();
// 修改请求头部
xhr.setRequestHeader('Content-type', 'appliction/x-www-form-urlencoded');
xhr.onreadystatechange = function(){
    if(xhr.readystate == 4){
        if(xhr.status == 200){
           console.log(xhr.responseXML);
           }
    }
}
xhr.opne('post', 'xx.php');
xhr.send('username=zero&password=123');
```

#### 5.原生ajax请求：

```js
<script>
        function ajax(options){
            options = options || {};
            options.type = (options.type || "GET").toUpperCase();
            options.dateType =options.dateType || "json";
            var params = formatParams(options.data);
            if(window.XMLHttpRequest){
                var xhr = new XMLHttpRequest();
            }else{
                var xhr = new ActiveXObject('Microsoft.XMLHTTP');
            }
            if(options.type == "GET"){
                xhr.open("GET", options.url + "?" + params, true);
                xhr.send(null);
            }else if(options.type == "POST"){
                xhr.open("POST", options.url, true);
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.send(params);
            }
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    var status = xhr.status;
                    if(status >= 200 && status < 300){
                        options.success && options.success(xhr.responseText);
                    }else{
                        options.fail && options.fail(status);
                    }
                }
            }

        }    

        // 格式化参数
        function formatParams(data){
            var arr = [];
            for(var name in data){
                arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
            }
            arr.push(("v=" + Math.random()).replace(".", ""));
            return arr.join("&");
        }
        
    </script>



     <script>
        //  发送get请求
         ajax({
             type: 'get',
             url: 'https://autumnfish.cn/api/joke/list',
             data: {
                 num: 4
             },
             success: function(res){
                console.log(res);
             }
         });
     </script>
```

