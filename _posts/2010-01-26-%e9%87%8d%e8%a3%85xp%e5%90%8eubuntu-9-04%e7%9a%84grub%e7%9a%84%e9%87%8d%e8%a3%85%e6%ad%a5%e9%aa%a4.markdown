---
layout: post
status: publish
published: true
title: 重装XP后Ubuntu 9.04的Grub的重装步骤
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 271
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=271
date: !binary |-
  MjAxMC0wMS0yNiAxNzo1OTozOCArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwOTo1OTozOCArMDgwMA==
categories:
- Ubuntu
tags:
- Grub
- Ubuntu
- XP
- 重装
comments: []
---
<p>1.使用ubuntu 9.04的live cd进入桌面<br />
2.打开terminal，即命令行窗口<br />
3.sudo -i<br />
4.grub<br />
5.find &#47;boot&#47;grub&#47;stage1<br />
这里系统会输出:(hd0, x)<br />
6.root (hd0, x) #注意root后面一定要加上空格<br />
7. setup (hd0) &#47; setup (hd0, x)<br />
8.quit<br />
9.reboot<br />
10.这时就可以重新看到系统的选择项了。</p>
<p>注:如果出现错误,可以通过调整空格来避免.</p>
