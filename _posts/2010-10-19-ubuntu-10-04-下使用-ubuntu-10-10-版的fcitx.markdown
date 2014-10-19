---
layout: post
status: publish
published: true
title: Ubuntu 10.04 下使用 Ubuntu 10.10 版的fcitx
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1405
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1405
date: !binary |-
  MjAxMC0xMC0xOSAwNzoxOTozOSArMDgwMA==
date_gmt: !binary |-
  MjAxMC0xMC0xOCAyMzoxOTozOSArMDgwMA==
categories:
- Ubuntu
tags: []
comments: []
---
<p>由于fcitx的debian包在10.04时字符的编码并不是UTF-8,所以经常需要手动配置才能正确显示，</p>
<p>但是fcitx 在Ubuntu 10.10后采用的是fcitx_3.6.3-1，字符串已经开始使用UTF-8了。默认情况下显然的不再是方框了。</p>
<p>其实10.04下我们同样可以使用 fcitx 的deb包, 因为都是使用的Debian的包，依赖关系也很简单。</p>
<p>安装方法与其它的deb包安装方式没有任何差别</p>
<p>根据下面的软件地址直接在Ubuntu 10.04里安装就OK。</p>
<p>（打开下面的地址后点击下面的任何的镜象地址下载即可）</p>
<p>i386：</p>
<p><a href="http://packages.debian.org/zh-cn/sid/i386/fcitx/download">http://packages.debian.org/zh-cn/sid/i386/fcitx/download</a></p>
<p>AMD64:</p>
<p><a href="http://packages.debian.org/zh-cn/sid/amd64/fcitx/download">http://packages.debian.org/zh-cn/sid/amd64/fcitx/download</a></p>
