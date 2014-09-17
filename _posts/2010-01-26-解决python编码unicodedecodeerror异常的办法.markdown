---
layout: post
status: publish
published: true
title: 解决python编码UnicodeDecodeError异常的办法
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 197
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=197
date: !binary |-
  MjAxMC0wMS0yNiAxNzowNjo0OSArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwOTowNjo0OSArMDgwMA==
categories:
- 编程技术
- Python
tags:
- python
comments: []
---
<p>很多时候，我们会碰到包含有错误编码的字符串，这个时候如果我们直接使用decode解码，<br />
就会出现UnicodeDecodeError异常。<br />
但是decode实际上有第二个参数。<br />
这个参数用于指定异常的处理方式。</p>
<p>因为decode的函数原型是decode([encoding], [errors='strict'])，可以用第二个参数控制错误处理的策略，默认的参数就是strict，代表遇到非法字符时抛出异常；<br />
如果设置为ignore，则会忽略非法字符；<br />
如果设置为replace，则会用?取代非法字符；<br />
如果设置为xmlcharrefreplace，则使用XML的字符引用。</p>
