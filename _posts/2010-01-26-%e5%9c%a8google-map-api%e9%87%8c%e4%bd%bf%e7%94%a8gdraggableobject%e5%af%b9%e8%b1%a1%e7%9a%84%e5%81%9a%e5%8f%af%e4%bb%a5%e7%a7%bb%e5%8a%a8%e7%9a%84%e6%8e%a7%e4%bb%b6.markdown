---
layout: post
status: publish
published: true
title: 在google map api里使用GDraggableObject对象的做可以移动的控件
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 304
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=304
date: !binary |-
  MjAxMC0wMS0yNiAyMDowNToxMCArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAxMjowNToxMCArMDgwMA==
categories:
- WEB开发
tags:
- Google Maps API
- 控件
comments: []
---
<p>1. 首先要指定可以移动的对象与移动对象移动的父级dom</p>
<p>   var dragDom = document.createElement('div');<br />
   var parentDom = document.getElementById('mo');<br />
   var draggable = new GDraggableObject(dragDom, {container: parentDom});<br />
2 .如果你想让dragDom里面的一个DOM来当做移动的控制条，<br />
你可以先把它取出来。<br />
   var bar = document.createElement('div');<br />
dragDom.appendChild(bar);<br />
然后用这句话，<br />
   draggable.setDraggingCursor(bar);<br />
将移动控制条限制在bar上。<br />
这样一个最基本的可移动对象就创建完成。</p>
