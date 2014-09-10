---
layout: post
status: publish
published: true
title: Android SDK 下载不了或者非常慢的解决办法
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1630
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1630
date: !binary |-
  MjAxMy0xMi0wNCAwMDo1NjozNiArMDgwMA==
date_gmt: !binary |-
  MjAxMy0xMi0wMyAxNjo1NjozNiArMDgwMA==
categories:
- 移动开发技术
- Android
tags: []
comments: []
---
由于我们伟大的防火墙的影响，Android的SDK下载总是存在问题，一般情况下，我们基于方法一就可以解决问题。

方法一、

1、通过在命令行或者eclipse开发环境打开Android SDK manager

2、选择菜单栏里的Tools->Options...

3、在打开的设置界面，选中Others下面的： Force https:&#47;&#47;... sources to be fetched using http:&#47;&#47;...

![](http:&#47;&#47;res.cloudinary.com&#47;dawjytvkn&#47;image&#47;upload&#47;v1386089566&#47;temp_rntpnx.jpg)

如果上述的方法不能成功，说明http协议也被墙了，我们需要将连接请求转到代理上来。

方法二、

1、首先下载安装goagent

2、然后在上述的Options页面添加Proxy Settings。

3、添加

HTTP Proxy Server: &nbsp; &nbsp;&nbsp;127.0.0.1

HTTP Proxy Port: &nbsp; 8087