---
layout: post
status: publish
published: true
title: Ubuntu 10.04 VPN客户端配置心得
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1210
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1210
date: !binary |-
  MjAxMC0wNi0yNyAxNjowNjowOSArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wNi0yNyAwODowNjowOSArMDgwMA==
categories:
- Ubuntu
tags:
- Ubuntu
- VPN
comments: []
---
<p>Ubuntu 10.04的连接管理器似乎是有BUG，要想连接成功，需要正确的配置你的连接项，如果第一次失败，可能以后都不能成功了，这里需要删除重新设置。 除了删除重新配置外，还有一个要点是一定要点上高级选项(Advance)，选择Use-Point-To-Point-Encryption(MPPE)。</p>
<p>然后再应用，这时连接VPN就可以成功。</p>
<p>如果说他提示&ldquo;VPN服务启动失败&rdquo;，那用上面的办法试下应该就能成功。</p>
