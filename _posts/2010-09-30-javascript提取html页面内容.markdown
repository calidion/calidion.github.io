---
layout: post
status: publish
published: true
title: javascript提取HTML页面内容
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1389
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1389
date: !binary |-
  MjAxMC0wOS0zMCAxMzo1NzoyOSArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wOS0zMCAwNTo1NzoyOSArMDgwMA==
categories:
- WEB前端技术
- Javascript
tags:
- javascript
comments: []
---
<p>今天同事有一个用javascript提取的HTML页面的内容的需求。<br />
经过一段时间的试验。<br />
得到下面的代码。<br />
能提取出来相应的HTML标签内的内容。</p>
<pre name="code" class="js">
var reg = &#47;<[^>]*?>([^>^<]+)<[^>]*?&#47;+[^>]*?>&#47;g;<br />
var res = '<a href="forum-10-1.html" class="prev">&nbsp<&#47;a><a href="forum-10-1.html">1<&#47;a><strong>2<&#47;strong><a href="forum-10-3.html">3<&#47;a><a href="forum-10-4.html">4<&#47;a><a href="forum-10-5.html">5<&#47;a><a href="forum-10-6.html">6<&#47;a>'.replace(reg, "$1,");<br />
console.log(res);<br />
<&#47;pre></p>
<p>结果:<br />
"&nbsp,1,2,3,4,5,6,"</p>
