---
layout: post
status: publish
published: true
title: Google App Engine 下面时间本地化的处理
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 178
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=178
date: !binary |-
  MjAxMC0wMS0yNiAxNjo0NjowOCArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwODo0NjowOCArMDgwMA==
categories:
- 新闻
- WEB开发
tags:
- Google App Engine
- pytz
- 本地化
comments: []
---
<p>1.首先下载pytz </p>
<p>pytz的下载地址：<br />
http://sourceforge.net/projects/pytz/</p>
<p>2.然后使用下面的代码：<br />
from datetime import datetime<br />
from datetime import date as strdate<br />
from pytz import timezone </p>
<p>def now(tz = None):<br />
if tz == None:<br />
tz = timezone("Asia/Shanghai")<br />
time = datetime.now(tz)<br />
ret = datetime(time.year, time.month, time.day, time.hour,<br />
time.minute, time.second)<br />
return ret </p>
<p>3.在调用时使用now来调用当前的时间即可<br />
其它的时间由自己运算得到就可以</p>
