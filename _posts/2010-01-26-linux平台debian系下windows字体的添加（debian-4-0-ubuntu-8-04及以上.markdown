---
layout: post
status: publish
published: true
title: Linux平台Debian系下Windows字体的添加（Debian 4.0 / Ubuntu 8.04及以上)
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
sudo mkdir /mnt/c<br />
sudo mount /dev/sda1(根据fdisk所显示的结果来,我的机器是sda1） /mnt/c<br />
mount 的type要根据你实际的分区情况来加载。我建议默认的分区是FAT32的。</p>
<p>3)创建windows字体目录<br />
sudo mkdir /usr/share/fonts/truetype/windows<br />
4)找到/mnt/c/windows/Fonts,将这个目录下的任何的文档拷贝到/usr/share/fonts/truetype/windows目录.<br />
sudo cp /mnt/c/windows/Fonts/ /usr/share/fonts/truetype/windows/ -R<br />
然后执行下面几句命令：<br />
sudo chown root.root /usr/share/fonts/truetype/ -R<br />
sudo chmod 755 /usr/share/fonts/ -R<br />
5)执行sudo dpkg-reconfigure fontconfig<br />
6)重新启动一下GNOME。</p>
<p>sudo /etc/init.d/gdm restart</p>
<p>。再查看一下<br />
桌面－＞最好选择项－＞字体。<br />
您就能够看到很多的原来在WINDOWS目录下的字体了。<br />
有宋体、Arail、Courier New等好看常用的字体。<br />
然后根据您的需要把字体配置一下。<br />
其实你会发现Linux的字体安装真的很简单。</p>
