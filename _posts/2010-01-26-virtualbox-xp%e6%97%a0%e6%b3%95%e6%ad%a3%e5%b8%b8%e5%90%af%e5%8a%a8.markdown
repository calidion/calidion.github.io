---
layout: post
status: publish
published: true
title: VirtualBox XP无法正常启动
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 41
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=41
date: !binary |-
  MjAxMC0wMS0yNiAwOTozMzoyNyArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwMTozMzoyNyArMDgwMA==
categories:
- Ubuntu
tags: []
comments: []
---
<p>提示信息说是intelppm.sys出错.<br />
解决办法:<br />
1.开机F8, 选择带网络的安全模式<br />
2.到WINDOWS目录下,删除oem开头的inf与npf文件<br />
3.在WINDOWS目录下查找intelppm.sys,删除所有找到的文件<br />
重启后正常开机.</p>
