---
layout: post
status: publish
published: true
title: VirtualBox 复制硬盘文件
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 38
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=38
date: !binary |-
  MjAxMC0wMS0yNiAwOTozMjoxMyArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwMTozMjoxMyArMDgwMA==
categories:
- 操作系统
tags: []
comments: []
---
<p>1. cp a.vdi b.vdi<br />
2. VBoxManage internalcommands setvdiuuid b.vdi #用于消除uuid相同的情况<br />
3. 通过新建OS引入b.vdi作为硬盘系统的复制.</p>
