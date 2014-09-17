---
layout: post
status: publish
published: true
title: Elixir下实现OneToOne关系
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1284
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1284
date: !binary |-
  MjAxMC0wOC0wMiAxNjo1MDo0MiArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wOC0wMiAwODo1MDo0MiArMDgwMA==
categories:
- Python
tags:
- Elixir
comments: []
---
<p>在实现Elixir下OneToOne关系时，<br />
一开始使用的形式是:<br />
class A():<br />
  b = OneToOne('B', inverse='a')</p>
<p>class B():<br />
  a = OneTOOne('A', inverse='b')</p>
<p>发现编译一直无法通过。</p>
<p>然后使用：<br />
class A():<br />
  b = OneToOne('B', inverse='a')</p>
<p>class B():<br />
  a = ManyToOne('A')</p>
<p>后通过.<br />
这里的ManyToOne实际上跟OneToOne的效果是一样的。</p>
