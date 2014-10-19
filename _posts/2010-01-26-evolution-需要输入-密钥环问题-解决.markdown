---
layout: post
status: publish
published: true
title: evolution 需要输入 密钥环问题 解决
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 255
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=255
date: !binary |-
  MjAxMC0wMS0yNiAxNzo0OToxMSArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwOTo0OToxMSArMDgwMA==
categories:
- Ubuntu
tags:
- Ubuntu
comments: []
---
<p>新创建好evolution时会提示输入密钥环的密码。<br />
这时选择不输入，即当取消按钮。</p>
<p>如果出现这种问题。<br />
可以这样处理。<br />
打开终端，输入命令：<br />
rm ~/.gnome2/keyrings/ -rf<br />
就可以了。</p>
