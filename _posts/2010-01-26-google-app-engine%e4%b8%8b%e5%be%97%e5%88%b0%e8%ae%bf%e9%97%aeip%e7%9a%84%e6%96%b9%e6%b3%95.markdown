---
layout: post
status: publish
published: true
title: Google App Engine下得到访问IP的方法
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 182
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=182
date: !binary |-
  MjAxMC0wMS0yNiAxNjo0OToxMSArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwODo0OToxMSArMDgwMA==
categories:
- Python
- WEB开发
tags:
- Google App Engine
- IP
comments: []
---
<p>1.采用python的wsgi的办法</p>
<p>ip = os.eniron['REMOTE_ADDR']</p>
<p>2.采用appengine 自己的办法</p>
<p>ip = self.request.remote_addr </p>
