---
layout: post
status: publish
published: true
title: php里print,echo的区别?
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1361
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1361
date: !binary |-
  MjAxMC0wOC0yNiAxODoxNzowMSArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wOC0yNiAxMDoxNzowMSArMDgwMA==
categories:
- php
tags:
- PHP
comments: []
---
<p>1.首要明确print,echo都不是普通的函数,可以用function_exists函数测试</p>
<p>2.print, echo前者只能打印一个字符,而echo 可以打印多个</p>
<p>print &nbsp;$a, $b是错误的,而 echo $a, $b是正确的</p>
<p>3.print会有返回值,但是echo没有返回值,性能略好一些</p>
