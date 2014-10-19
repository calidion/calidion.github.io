---
layout: post
status: publish
published: true
title: Google Docs https 被屏的解决办法
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1233
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1233
date: !binary |-
  MjAxMC0wNy0xMyAxMTozMjoxOSArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wNy0xMyAwMzozMjoxOSArMDgwMA==
categories:
- WEB开发
tags:
- docs
- https
comments: []
---
<p>1</p>
<p>添加下面的内容到系统的hosts文件里:</p>
<p>66.249.80.104 docs.google.com</p>
<p>Linux:<br />
/etc/hosts<br />
Windows:<br />
%WINDIR%system32driversetchosts</p>
<p>要解决更多的地址问题，可以添加下面的内容</p>
<p>66.249.80.104 encrypted.google.com<br />
66.249.80.104 suggestqueries.google.com<br />
66.249.80.104 mail.google.com<br />
66.249.80.104 groups.google.com<br />
66.249.80.104 groups.google.com.hk<br />
66.249.80.104 docs.google.com<br />
66.249.80.104 docs0.google.com<br />
66.249.80.104 docs1.google.com<br />
66.249.80.104 spreadsheets.google.com<br />
66.249.80.104 spreadsheets0.google.com<br />
66.249.80.104 webcache.googleusercontent.com<br />
66.249.80.104 sites.google.com<br />
66.249.80.104 talkgadget.google.com<br />
66.249.80.104 clients1.google.com<br />
66.249.80.104 clients2.google.com<br />
66.249.80.104 clients3.google.com<br />
66.249.80.104 clients4.google.com<br />
66.249.80.104 code.google.com</p>
