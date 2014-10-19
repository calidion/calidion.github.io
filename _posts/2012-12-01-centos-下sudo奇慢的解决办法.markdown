---
layout: post
status: publish
published: true
title: Centos 下sudo奇慢的解决办法
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1507
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1507
date: !binary |-
  MjAxMi0xMi0wMSAxMDoyNDozNiArMDgwMA==
date_gmt: !binary |-
  MjAxMi0xMi0wMSAxMDoyNDozNiArMDgwMA==
categories:
- 操作系统
- Linux
tags: []
comments: []
---
<p>
进入root账号：</p>
<p>echo "127.0.0.1 `hostname`" >> /etc/hosts</p>
<p>注：<br />
CentOS的用户友好性是比较差的一个系统。</p>
<p>作为Lamp的主要平台，竟然存在着apache的mod php的解析问题。</p>
<p>同时还有一堆不合理的设置。</p>
<p>他成为服务器的主流Os让我非常不解。</p>
<p>欢迎高人来帮助我理解。</p>
