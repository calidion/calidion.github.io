---
layout: post
status: publish
published: true
title: ! '[转载]解决bitbucket被封，无法pull，push的问题'
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1549
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1549
date: !binary |-
  MjAxMy0wNS0yNCAxNzowODo0NSArMDgwMA==
date_gmt: !binary |-
  MjAxMy0wNS0yNCAwOTowODo0NSArMDgwMA==
categories:
- 其它
tags: []
comments:
- id: 111
  author: 小李
  author_email: iamlosing02@gmail.com
  author_url: http://iamlosing.info
  date: !binary |-
    MjAxMy0wNS0yOCAyMjozMzoyMCArMDgwMA==
  date_gmt: !binary |-
    MjAxMy0wNS0yOCAxNDozMzoyMCArMDgwMA==
  content: 怪不得我今天没法pull/push, 看了下确实用的是git协议， 即使开了VPN也无法提交，妹的。
---
原文：

http://qing.blog.sina.com.cn/1687779391/6499783f33003s9u.html

解决bitbucket被封，无法pull，push的问题

昨晚就发现bitbucket抽风，push很慢，根本无法pull，今天早上来验证，才发现被墙了。还有很多项目托管在上面，于是寻找google解决。解决办法如下：

配置git pull和push都走https协议，不要走git或者ssh协议；

```shell
git config --add http.proxy 127.0.0.1:8087
git config --add https.proxy 127.0.0.1:8087
git config --add https.sslVerify false
git config --global http.postBuffer 524288000   #非常重要，否则可能提交不成功。
```

8087为本地的goagent端口，sslVerify最好配置为false，否则会出现证书问题。

上面的操作也可以换成直接修改.git/config文件，添加如下代码：

```

[http]

proxy = http://127.0.0.1:8087

sslVerify = false

[https]

proxy = http://127.0.0.1:8087

sslVerify = false</p>

url = https://*****@bitbucket.org/****.git

pushurl = https://****@bitbucket.org/****.git
```