---
layout: post
status: publish
published: true
title: 使用Debian 5的VPS配置VPN翻墙
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1165
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1165
date: !binary |-
  MjAxMC0wNi0wOSAwMDo1NjowNiArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wNi0wOCAxNjo1NjowNiArMDgwMA==
categories:
- Linux
tags:
- Debian
- VPN
- VPS
comments: []
---
<p>现在VPS已经很便宜了，这使得翻墙变的越来越容易。<br />
下面介绍一下Debian系下面的VPN翻墙的配置方法。<br />
1. 安装 pptpd<br />
apt-get install pptpd<br />
2. 配置pptpd, 注释掉下面的文字的前面的#号即可<br />
localip 192.168.0.1 #这是VPN线路的网关地址<br />
remoteip 192.168.0.234-238,192.168.0.245 #分配给连接到VPN的机器的IP<br />
3.配置VPN用户和密码:打开 &#47;etc&#47;ppp&#47;chap-secrets<br />
格式:<br />
用户名 协议 密码 允许的IP(*表示全部)<br />
示例:<br />
  vpn0 pptpd vpn_pwd *<br />
4.配置pptpd：<br />
打开<br />
&#47;etc&#47;ppp&#47;pptpd-options<br />
在最后添加DNS：<br />
ms-dns 8.8.8.8 #google的dns服务器，可以自己根据需要修改。<br />
ms-dns 8.8.4.4 </p>
<p>5.&#47;etc&#47;init.d&#47;pptpd restart<br />
6.打开转发功能：<br />
打开&#47;etc&#47;sysctl.conf，<br />
查到下面的文字，将前面的注释去掉。<br />
net.ipv4.ip_forward = 1</p>
<p>7. 执行下面的命令：<br />
iptables -t nat -A POSTROUTING -o eth0 -s 192.168.0.0&#47;24 -j MASQUERADE<br />
同时写入到&#47;etc&#47;rc.local</p>
<p>8.&#47;etc&#47;init.d&#47;pptpd restart 重启pptpd<br />
这样VPN就配置完成了</p>
<p>然后在WINDOWS里选择创建VPN：<br />
控制面板->网络和 Internet 连接->网络连接</p>
<p>然后选择：创建一个新的连接-》下一步-》选择连接到我的工作场所的网络-》虚拟专用网络连接<br />
然后输入你的VPS的IP&#47;域名， 然后再输入你的用户名与密码。<br />
期待连接成功吧。<br />
如果连接失败，可以尝试将服务器重启一下。</p>
