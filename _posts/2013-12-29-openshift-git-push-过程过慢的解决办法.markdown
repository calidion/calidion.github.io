---
layout: post
status: publish
published: true
title: Openshift git push 过程过慢的解决办法
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1660
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1660
date: !binary |-
  MjAxMy0xMi0yOSAxNjoxMDoxNCArMDgwMA==
date_gmt: !binary |-
  MjAxMy0xMi0yOSAwODoxMDoxNCArMDgwMA==
categories:
- Shell
tags: []
comments: []
---

使用Open shift hot deploy 加速应用的启动。代码如下：

```
$ cd applicationName/.openshift/markers
$ touch hot_deploy
$ git add hot_deploy
$ git commit -m "Adding hot deployment marker"
$ git push
```

