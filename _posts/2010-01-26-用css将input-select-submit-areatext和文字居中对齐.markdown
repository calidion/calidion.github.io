---
layout: post
status: publish
published: true
title: 用CSS将input, select, submit, areatext和文字居中对齐
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 287
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=287
date: !binary |-
  MjAxMC0wMS0yNiAxOTo0Mzo0OCArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAxMTo0Mzo0OCArMDgwMA==
categories:
- WEB开发
tags:
- CSS
- 对齐
comments: []
---
<p>假设HTML上有一个容器id<br />
如果你想把他里面的各种TAG都居中对齐的话，你只需要在<br />
CSS里加入下面的语句</p>
<p>#id *<br />
{<br />
vertical-align: middle;<br />
}</p>
<p>如果你只想指定几样对齐，将*号替换成相应的几个TAG就可以了。</p>
<p>一定要注意id所对应的容易一定是在你想要对齐的那些控件的外面的一个容器。</p>
