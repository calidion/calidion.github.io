---
layout: post
status: publish
published: true
title: python 下的trim,删除前后的空白字符
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 202
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=202
date: !binary |-
  MjAxMC0wMS0yNiAxNzowOTo0MCArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwOTowOTo0MCArMDgwMA==
categories:
- 编程技术
- Python
tags:
- python
- trim
comments: []
---
<p>1。删除前后的空白字符<br />
>>> str = " a b c d "<br />
>>> str.strip()<br />
'a b c d'<br />
2。删除左边的空白<br />
>>> str = "                a b c d                  "<br />
>>> str.lstrip()<br />
'a b c d                  '<br />
3。删除右边的空白<br />
>>> str = "                a b c d                  "<br />
>>> str.rstrip()<br />
'                a b c d'</p>
