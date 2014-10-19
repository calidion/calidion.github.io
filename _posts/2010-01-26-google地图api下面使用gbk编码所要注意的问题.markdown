---
layout: post
status: publish
published: true
title: google地图api下面使用GBK编码所要注意的问题
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 302
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=302
date: !binary |-
  MjAxMC0wMS0yNiAyMDowMzowNCArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAxMjowMzowNCArMDgwMA==
categories:
- WEB开发
tags:
- Google Maps API
- 编码
comments: []
---
<p>1.编码格式要统一。比如javascript要用gbk的,html页面要用gbk的<br />
2.服务器端最好能产生一个header，指明Content-Type是GBK;<br />
如php:<br />
header("Content-Type: text/html; charset=gbk;");</p>
<p>3.网页的META信息里也最好有一个指明是GBK的标签：<br />
<meta content="text/html; charset=gbk" http-equiv="Content-Type" /></p>
<p>4.最后也是最重要的。要指明oe=gbk<br />
不是动态加载的时候需要在scr的链接上加上"&oe=gbk";<br />
如果里动态加载的话，参照下面的形式加载：</p>
<pre name="code" class="js">
google.load("maps", "2", {<br />
    "language" : "zh-CN",<br />
    callback: initMap,<br />
    other_params: "oe=gbk"<br />
});<br />
</pre></p>
