---
layout: post
status: publish
published: true
title: Google App Engine Channel API 初体验
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1436
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1436
date: !binary |-
  MjAxMC0xMi0xOCAyMDoxODozNCArMDgwMA==
date_gmt: !binary |-
  MjAxMC0xMi0xOCAxMjoxODozNCArMDgwMA==
categories:
- Python
- WEB前沿
- Javascript
tags:
- Comet
- Google App Engine
comments: []
---
<p>1. channel api的id分成key与channel api<br />
channel api是给客户端的，对于服务器没有什么用。<br />
而key是服务器端的，服务器只要有key就可以了</p>
<p>流程大约是这样<br />
a)创建<br />
key = md5(str).hexdigest()    #要限制在64位以内<br />
channel_id = channel.create_channel(key)<br />
b)<br />
然后<br />
channel.send_message(key, message) 发送消息<br />
c)<br />
在客户端的注意点是message发出去后，在javascript端也是一个对象。<br />
内容需要通过得到的对象data.data来得到发送的字符串。</p>
<p>2. 在SDK上并没有使用comet技术，而是使用了polling,不断的从服务器取数据。</p>
<p>3. channel api 现在没有状态，无法知道如何客户端是不是已经断开。</p>
