---
layout: post
status: publish
published: true
title: 在Ubuntu 9.04下面开发 Google App Engine
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 176
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=176
date: !binary |-
  MjAxMC0wMS0yNiAxNjo0Mjo0OCArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwODo0Mjo0OCArMDgwMA==
categories:
- 新闻
- WEB开发
tags:
- GAE
- Google App Engine
comments: []
---
<p>1. 在ubuntu 9.04下面开发appengine经常会出现<br />
No module named _multiprocessing<br />
的错误<br />
2.产生这个问题的原因是9.04的ubuntu默认的python版本是2.6<br />
3.解决这个问题的办法是让dev_appserver.py使用2.5的python<br />
4.方法如下:<br />
sudo apt-get install python2.5 optical amplifier</p>
<p>打开dev_appserver.py. 将第一行的环境说明修改成python2.5,<br />
#!&#47;usr&#47;bin&#47;env python2.5.</p>
