---
layout: post
status: publish
published: true
title: Ubuntu 9.10 T43 TrackPoint 配置
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 58
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=58
date: !binary |-
  MjAxMC0wMS0yNiAxMDo0NDozMyArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwMjo0NDozMyArMDgwMA==
categories:
- Ubuntu
tags:
- T43
- TrackPoint
- 驱动
comments: []
---
<p>http:&#47;&#47;www.thinkwiki.org&#47;wiki&#47;How_to_configure_the_TrackPoint</p>
<p>1.root打开文件<br />
sudo gedit &#47;etc&#47;hal&#47;fdi&#47;policy&#47;mouse-wheel.fdi<br />
2.复制下面的内容并保存<br />
<match key="info.product" string="TPPS&#47;2 IBM TrackPoint"><br />
 <merge key="input.x11_options.EmulateWheel" type="string">true<&#47;merge><br />
 <merge key="input.x11_options.EmulateWheelButton" type="string">2<&#47;merge><br />
 <merge key="input.x11_options.YAxisMapping" type="string">4 5<&#47;merge><br />
 <merge key="input.x11_options.XAxisMapping" type="string">6 7<&#47;merge><br />
 <merge key="input.x11_options.Emulate3Buttons" type="string">true<&#47;merge><br />
 <merge key="input.x11_options.EmulateWheelTimeout" type="string">200<&#47;merge><br />
<&#47;match><br />
3. sudo rmmod psmouse<br />
4. sudo modprobe psmouse</p>
