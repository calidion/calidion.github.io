---
layout: post
status: publish
published: true
title: Ubuntu 9.04 无X时framebuffer的字体修改办法
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 239
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=239
date: !binary |-
  MjAxMC0wMS0yNiAxNzozODozMCArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwOTozODozMCArMDgwMA==
categories:
- Ubuntu
tags:
- framebuffer
- Ubuntu
- 字体
comments: []
---
<p>1.ubuntu 9.04里提供了 console-setup的功能</p>
<p>2.Ctrl+Alt + 1-6</p>
<p>3.sudo dpkg-reconfigure console-setup</p>
<p>4.根据自己的机器情况修改，最后有字体，VGA，FIXED等几类，可以根据自己的需要来选择。</p>
<p>5.在framebuffer下能直接看到字体的修改效果。</p>
