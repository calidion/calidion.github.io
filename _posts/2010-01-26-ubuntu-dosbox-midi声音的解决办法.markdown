---
layout: post
status: publish
published: true
title: Ubuntu dosbox midi声音的解决办法
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 233
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=233
date: !binary |-
  MjAxMC0wMS0yNiAxNzozNDoyMCArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwOTozNDoyMCArMDgwMA==
categories:
- Ubuntu
tags:
- dosbox
- midi
- Ubuntu
- 声音
comments: []
---
<p>dosbox下玩仙剑出现Midi声音混乱的情况。<br />
通过google找到bug<br />
并有部分网友提供了解决办法。<br />
原文链接：<br />
https://bugs.launchpad.net/ubuntu/+source/dosbox/+bug/429373<br />
对于最新的ubuntu 9.10只需要<br />
将alsa修改成esd即可。<br />
执行命令：<br />
sudo apt-get install libsdl1.2debian-esd<br />
即可解决。</p>
