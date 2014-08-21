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
<p>由于新的技术进步，上传文件这样的事情已经可以轻松的通过ajax实现<br />
下面的代码是通过我的调试与验证的，基本是已经可以用了，现在分享一下。<br />
也将我遇到的问题抛出来，希望有人可以帮助解答。</p>
<p>代码如下：</p>
<pre language="javascript" name="code">
            var form = new FormData($(this).parents("form").get(0));</p>
<p>            &#47;&#47;这段注释的代码用来实现添加文件（但是根据测试的结果来看，不是非常可靠）<br />
            &#47;&#47;建议在form里编写文件上传的内容<br />
            form.append('file', $('input[type=file]')[0].files[0]);<br />
            form.append('image', $('input[type=file]')[0].files[0]);</p>
<p>            &#47;&#47;这里有一个很奇怪的问题，没有初始化FormData时，我只append image时发不出来文件，添加了file再添加image,就能将image发出来了。</p>
<p>            &#47;&#47;这里可以添加字段，对于中文或者非ASCCI码，记得转码转送，这样不会出现乱码，也符合HTTP的规范。<br />
            form.append('act', 'update');<br />
            form.append('name', encodeURIComponent($('input[type=text]').val()));<br />
            form.append('id', encodeURIComponent($('input[type=hidden]').val()));<br />
<&#47;pre></p>
<p>然后通过jquery发送。</p>
<pre language="javascript" name="code">
$.ajax({<br />
  url: "stash.php",<br />
  type: "POST",<br />
  data: form,<br />
  processData: false,<br />
  contentType: false<br />
});<br />
<&#47;pre><br />
两个flase很重要，processData=false告诉jquery不要处理数据，contentType=false告诉jquery不要再设contentType类型。</p>
