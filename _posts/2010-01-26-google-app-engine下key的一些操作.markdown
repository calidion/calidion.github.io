---
layout: post
status: publish
published: true
title: Google App Engine下key的一些操作
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 184
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=184
date: !binary |-
  MjAxMC0wMS0yNiAxNjo1MTowNCArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwODo1MTowNCArMDgwMA==
categories:
- WEB开发
tags:
- Google App Engine
comments: []
---
<p>1.得到ID</p>
<p>appengine下面的db.Model类的元素可以通过访问属性key().id()来得到这个model的ID<br />
如果<br />
class User(db.Model):<br />
   ...<br />
   ...</p>
<p>for user in User.all():<br />
id = user.key().id() ＃可以得到一个数据的ID</p>
<p>2.通过 key可以直接得到一个Model对象<br />
通过<br />
   key = Model.key()得到key值,将这个key保存好<br />
随便在需要的地方就可以能过：<br />
db.get(Model.key)<br />
得到原来的Model对象<br />
3.通过KEY直接删除一个数据记录<br />
db.delete(Model.key)</p>
