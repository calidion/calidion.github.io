---
layout: post
status: publish
published: true
title: Appengine 非本机访问测试
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1425
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1425
date: !binary |-
  MjAxMC0xMi0wNCAxMjo0MDowOSArMDgwMA==
date_gmt: !binary |-
  MjAxMC0xMi0wNCAwNDo0MDowOSArMDgwMA==
categories:
- WEB服务器技术
- Python
tags:
- Google App Engine
comments: []
---
<p>App Engine （Python)在本地测试运行时， 默认绑定了localhost 所以当你想要通过虚拟机或者其它机器访问你的程序时就会出问题无法访问的情况。</p>
<p>其实只要有点IP基础知识的人就可以想到将IP换成是0.0.0.0就可以让服务与IP无关。</p>
<p>所以我们可以在运行时加上以下的参数：</p>
<p>--address=0.0.0.0</p>
<p>这样就可以让不同的IP都能访问到。</p>
<p>当然也可以添加成：</p>
<p>--address=192.168.1.1</p>
<p>仅限于局域网内访问。</p>
<p>总之只要你对IP绑定的原理有一些了解就可以帮助你更好的完成测试。</p>
