---
layout: post
status: publish
published: true
title: 将所有没有加入svn的文件加入到svn里的shell脚本
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 116
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=116
date: !binary |-
  MjAxMC0wMS0yNiAxNTowMjoxMSArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwNzowMjoxMSArMDgwMA==
categories:
- Ubuntu
tags:
- shell
- subversion
- svn
comments: []
---
<p>svn stat | grep ? | sed 's&#47;?s*&#47;svn add &#47;g' | sh</p>
