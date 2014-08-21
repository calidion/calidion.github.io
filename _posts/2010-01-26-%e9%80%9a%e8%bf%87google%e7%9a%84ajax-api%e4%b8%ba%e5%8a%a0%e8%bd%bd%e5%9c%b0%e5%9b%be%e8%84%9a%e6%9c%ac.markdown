---
layout: post
status: publish
published: true
title: 通过google的ajax api为加载地图脚本
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 310
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=310
date: !binary |-
  MjAxMC0wMS0yNiAyMDowODozNCArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAxMjowODozNCArMDgwMA==
categories:
- WEB开发
tags:
- ajax
- Google Maps API
comments: []
---
<pre name="code" class="js">
 google.load("maps", "2", {"language" : "zh_CN", callback: init});</p>
<p> google.load("maps", "2", {callback: init, base_domain: 'ditu.google.cn'});</p>
<p> google.load("maps", "2", { "language" : "zh_CN", callback: initMap, other_params: "oe=gbk" });<br />
<&#47;pre></p>
<p>第一种只指定语言，适应性比较广泛。但是如果需要取服务器端的数据的话，可能会得不到所需要的中文数据<br />
第二种只适用于中文地图。但可以得到中文数据。<br />
如果你的网站是GBK编码的。<br />
可能在IE6下会碰到显示不了的问题，那一定要采用3的形式进行加载。<br />
因为上面指定了oe=gbk。</p>
