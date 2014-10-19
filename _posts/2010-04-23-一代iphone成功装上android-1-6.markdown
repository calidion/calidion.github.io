---
layout: post
status: publish
published: true
title: 一代iPhone成功装上Android 1.6
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 736
wordpress_url: http://3gcnbeta.ap01.aws.af.cm/wordpress/?p=736
date: !binary |-
  MjAxMC0wNC0yMyAxNzowODo0MiArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wNC0yMyAwOTowODo0MiArMDgwMA==
categories:
- 新闻
tags: []
comments: []
---
<p>准备工作：</p>
<p>Windows系统+Ubuntu系统都装好，我是Win 7 和 Ubuntu 10.04；<br />
确保你是一代iPhone，并且已经越狱；(必须是用pwned的机器，用redsn0w的不行)<br />
最好有点Linux系统命令常识，本人不负责解答Linux命令相关问题，抱歉<br />
下载我重新打包的文件：<br />
http://www.rayfile.com/files/ede2a007-4e2a-11df-a065-0015c55db73d/</p>
<p>安装步骤：<br />
（1）WinRAR解压下载的android_by_tyllrxs.tar.bz2文件（不能解压的升级WinRAR 3.91）</p>
<p>（2）用WinSCP或者91助手之类的把android.img.gz、cache.img、ramdisk.img、system.img、userdata.img、zImage一共6个文件放到iPhone的/private/var/ 目录下</p>
<p>（3）重启电脑，断开数据线，关iphone</p>
<p>（4）进入Ubuntu系统，插上数据线，同时按住iphone的Home键和开机键，等到iphone显示itunes和usb的图标后松开Home键；</p>
<p>（5）在Ubuntu中打开应用程序=>附件=>终端，输入以下命令：(假设你把android_by_tyllrxs.tar.bz2文件解压到了主文件夹下的tttttt目录下)<br />
复制代码<br />
切换到工作目录<br />
cd tttttt<br />
安装所需要的库文件<br />
sudo apt-get install libusb-1.0-* libreadline5<br />
输入root用户的密码后，等待安装完成。<br />
sudo ./loadibec openiboot.img3<br />
此时iPhone显示双系统界面。<br />
按下电源键，光标跳到下面的openiBoot图标上，按下Home键，出现一堆命令行</p>
<p>(如果不是pwn破解的iPhone,不要继续,否则需要重刷机器)</p>
<p>输入sudo ./oibc<br />
这时会出现<br />
-------------------------------<br />
WELCOME TO OPENIBOOT<br />
-------------------------------<br />
接下来还会保持在这个程序里，这时可以直接输入install，情况如下：<br />
-------------------------------<br />
WELCOME TO OPENIBOOT<br />
-------------------------------<br />
<span style="color: #ff0000;"> install</span></p>
<p>稍等片刻。。。</p>
<p>当出现&ldquo;Done with installation&rdquo;后就表示安装成功（一定要等到这个出现！）<br />
输入reboot，等待重启。。。</p>
<p>一定要保证重启完毕后再断开接线。</p>
<p>大功告成！！！<br />
启动：</p>
<p>在开机界面下，按电源键选择要启动的系统，并通过按住Home键超过2秒（一定要2秒以上！呵呵～）来启动你选择的系统。</p>
