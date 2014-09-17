---
layout: post
status: publish
published: true
title: Ubuntu GPG Key 出错的解决办法
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1379
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1379
date: !binary |-
  MjAxMC0wOS0xNyAxMzoxNDoyMyArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wOS0xNyAwNToxNDoyMyArMDgwMA==
categories:
- Ubuntu
tags: []
comments: []
---
<p>在安装新的source list的时候经常会出现GPG Key 没有办法通过验证的错误.<br />
一般有如下的报错:<br />
The following<br />
signatures were invalid: BADSIG 40976EAF437D05B5 Ubuntu Archive Automatic<br />
Signing Key</p>
<p>执行下列代码,将可以解决您的问题:</p>
<p>sudo bash<br />
apt-get clean<br />
cd &#47;var&#47;lib&#47;apt<br />
mv lists&#47; lists.old<br />
mkdir -p lists&#47;partial<br />
apt-get clean<br />
apt-get update</p>
