---
layout: post
status: publish
published: true
title: 利用FormData与jquery实现ajax上传文件
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1529
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1529
date: !binary |-
  MjAxMy0wNS0wMyAxNzo0MjoyMiArMDgwMA==
date_gmt: !binary |-
  MjAxMy0wNS0wMyAwOTo0MjoyMiArMDgwMA==
categories:
- 编程技术
- WEB开发
- WEB前端技术
- Javascript
tags: []
comments: []
---
由于新的技术进步，上传文件这样的事情已经可以轻松的通过ajax实现

下面的代码是通过我的调试与验证的，基本是已经可以用了，现在分享一下。

也将我遇到的问题抛出来，希望有人可以帮助解答。

代码如下：

```javascript

var form = new FormData($(this).parents("form").get(0));</p>

//这段注释的代码用来实现添加文件（但是根据测试的结果来看，不是非常可靠）

//建议在form里编写文件上传的内容

form.append('file', $('input[type=file]')[0].files[0]);

form.append('image', $('input[type=file]')[0].files[0]);

//这里有一个很奇怪的问题，没有初始化FormData时，我只append image时发不出来文件，添加了file再添加image,就能将image发出来了。

//这里可以添加字段，对于中文或者非ASCCI码，记得转码转送，这样不会出现乱码，也符合HTTP的规范。

form.append('act', 'update');

form.append('name', encodeURIComponent($('input[type=text]').val()));

form.append('id', encodeURIComponent($('input[type=hidden]').val()));

```

然后通过jquery发送。

```

$.ajax({

  url: "stash.php",

  type: "POST",

  data: form,

  processData: false,

  contentType: false

});

```

两个flase很重要，processData=false告诉jquery不要处理数据，contentType=false告诉jquery不要再设contentType类型。</p>