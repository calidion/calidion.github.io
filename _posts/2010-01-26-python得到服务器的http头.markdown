---
layout: post
status: publish
published: true
title: python得到服务器的http头
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 200
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=200
date: !binary |-
  MjAxMC0wMS0yNiAxNzowODo0MSArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwOTowODo0MSArMDgwMA==
categories:
- 编程技术
- Python
tags:
- HTTP
- python
comments: []
---
<pre name="code" class="py">
import httplib</p>
<p>conn=httplib.HTTPConnection("www.sina.com")<br />
conn.request("GET", "&#47;")<br />
r=conn.getresponse()<br />
r.getheaders() #获取所有的http头<br />
r.getheader("content-length") #获取特定的头</p>
<p><&#47;pre></p>
<p>>>> conn=httplib.HTTPConnection("www.sina.com.cn")<br />
>>> conn.request("GET", "&#47;")<br />
>>> r=conn.getresponse()<br />
>>> r.getheaders()<br />
[('x-cache', 'HIT from sh-9.sina.com.cn'), ('x-powered-by', 'mod_xlayout_jh&#47;0.0.<br />
1vhs.markII.remix'), ('accept-ranges', 'bytes'), ('expires', 'Tue, 25 Mar 2008 0<br />
8:43:33 GMT'), ('vary', 'Accept-Encoding'), ('server', 'Apache&#47;2.0.54 (Unix)'),<br />
('last-modified', 'Tue, 25 Mar 2008 08:32:57 GMT'), ('connection', 'close'), ('e<br />
tag', '"b177fb-48d9a-cca4e040"'), ('cache-control', 'max-age=60'), ('date', 'Tue<br />
, 25 Mar 2008 08:42:33 GMT'), ('content-type', 'text&#47;html'), ('age', '54')]<br />
>>> r.getheader("content-length")<br />
>>></p>
