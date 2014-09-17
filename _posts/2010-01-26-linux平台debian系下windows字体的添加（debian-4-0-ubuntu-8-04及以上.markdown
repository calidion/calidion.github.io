---
layout: post
status: publish
published: true
title: Linux平台Debian系下Windows字体的添加（Debian 4.0 &#47; Ubuntu 8.04及以上)
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 277
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=277
date: !binary |-
  MjAxMC0wMS0yNiAxODowMzozMyArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAxMDowMzozMyArMDgwMA==
categories:
- Ubuntu
tags:
- Debian
- Linux
- Ubuntu
- Windows
- 字体
comments: []
---
<p>具体分成以下几步：</p>
<p>1)查看WINDOWS所在的盘号<br />
sudo fdisk -l<br />
2)mount这个Windows分区.<br />
sudo mkdir &#47;mnt&#47;c<br />
sudo mount &#47;dev&#47;sda1(根据fdisk所显示的结果来,我的机器是sda1） &#47;mnt&#47;c<br />
mount 的type要根据你实际的分区情况来加载。我建议默认的分区是FAT32的。</p>
<p>3)创建windows字体目录<br />
sudo mkdir &#47;usr&#47;share&#47;fonts&#47;truetype&#47;windows<br />
4)找到&#47;mnt&#47;c&#47;windows&#47;Fonts,将这个目录下的任何的文档拷贝到&#47;usr&#47;share&#47;fonts&#47;truetype&#47;windows目录.<br />
sudo cp &#47;mnt&#47;c&#47;windows&#47;Fonts&#47; &#47;usr&#47;share&#47;fonts&#47;truetype&#47;windows&#47; -R<br />
然后执行下面几句命令：<br />
sudo chown root.root &#47;usr&#47;share&#47;fonts&#47;truetype&#47; -R<br />
sudo chmod 755 &#47;usr&#47;share&#47;fonts&#47; -R<br />
5)执行sudo dpkg-reconfigure fontconfig<br />
6)重新启动一下GNOME。</p>
<p>sudo &#47;etc&#47;init.d&#47;gdm restart</p>
<p>。再查看一下<br />
桌面－＞最好选择项－＞字体。<br />
您就能够看到很多的原来在WINDOWS目录下的字体了。<br />
有宋体、Arail、Courier New等好看常用的字体。<br />
然后根据您的需要把字体配置一下。<br />
其实你会发现Linux的字体安装真的很简单。</p>
