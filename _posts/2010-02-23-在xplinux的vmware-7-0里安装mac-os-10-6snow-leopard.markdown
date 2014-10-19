---
layout: post
status: publish
published: true
title: 在XP/Linux的VMWare 7.0里安装Mac os 10.6(Snow Leopard)
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 370
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=370
date: !binary |-
  MjAxMC0wMi0yMyAxMToxNToxMCArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMi0yMyAwMzoxNToxMCArMDgwMA==
categories:
- 编程技术
tags:
- darwin
- Mac
- Mac OS
- VMWare
comments: []
---
<p>下面的情况在Ubuntu/XP下面试验成功。</p>
<p>在安装之前，硬件上的一个必须的条件是必须支持visualization，如果没有开通的，必须在bios里面开通。</p>
<p>否则会得到一个不支持软虚拟的错误提示。</p>
<p>具体什么是虚拟化，怎么打开可以google一下。不同的机器不完全相同：</p>
<p><a href="http://www.google.com/search?hl=en&amp;source=hp&amp;q=%E6%89%93%E5%BC%80+cpu+%E8%99%9A%E6%8B%9F%E5%8C%96&amp;aq=f&amp;aqi=&amp;oq=">http://www.google.com/search?hl=en&amp;source=hp&amp;q=打开+cpu+虚拟化&amp;aq=f&amp;aqi=&amp;oq=</a></p>
<p>下面开始说软件上的安装步骤：</p>
<p>1.首先下载好Snow Leopard.dmg文件（通过emule或者bt或者http中的任何一种办法下载完成)</p>
<p>verycd的下载地址：<a href="http://www.verycd.com/topics/2778507">http://www.verycd.com/topics/2778507</a></p>
<p>2.下载VMWare 7.0（可以到官方网站下载VMWare for Linux/Windows)</p>
<p>官方下载地址：<a href="http://downloads.vmware.com/cn/d/info/desktop_downloads/vmware_workstation/7_0" target="_blank">http://downloads.vmware.com/cn/d/info/desktop_downloads/vmware_workstation/7_0</a></p>
<p>注册码自己搜索一下网站或者本博客。</p>
<p>你会发现网上darwin300.iso很难找，原因可能是已经改成darwin wks7的原因。</p>
<p>darwin wks7的下载地址：<a href="http://www.filedropper.com/darwin-wks7">http://www.filedropper.com/darwin-wks7</a></p>
<p>输入验证码就可以下载了（不保证以后一直有效，所以没有下载的赶紧下载）</p>
<p>3.创建一个FreeBSD-64位的虚拟机.</p>
<p>虚拟硬盘用什么方式可以自由，我推荐用2G的分散文件虚拟硬盘，网上有人说必须得一个文件，这种说法并不正确，我的虚拟机就是2G的文件组成的虚拟硬盘。</p>
<p>4.先关掉VMWare, 然后将.vmx文件里的</p>
<p>guestOS = "freebsd-64"一行，改成是guestOS = "darwin10"，这里再</p>
<p>5.将darwin wks7解压后的iso作为引导光盘</p>
<p>6.当引导完成后，光盘会自动弹出，这时将下载的snow leopard文件加载进去。</p>
<p>具体就是先将iso的文件设计成snow leopard文件，然后点Connect将他变成当前的光盘。</p>
<p>这时就可以开始安装了。安装完成后可以更新，可以升级，完全是正常的MAC机器，而不是hackintosh哦。</p>
<p>具体的安装过程我就不必说了。</p>
<p>7. 安装驱动</p>
<p>将原来的光盘重新加载，打开光盘，就会出现 wmare tools安装包，点击安装就可以驱动显卡了。</p>
<p>然后再到：<a href="http://ncu.dl.sourceforge.net/project/vmsvga2/Audio/SnowLeopard/EnsoniqAudioPCI_1.0.2_for_SnowLeopard.mpkg.tar.gz " target="_blank">http://ncu.dl.sourceforge.net/project/vmsvga2/Audio/SnowLeopard/EnsoniqAudioPCI_1.0.2_for_SnowLeopard.mpkg.tar.gz</a></p>
<p>下载声卡驱动。</p>
<p>8.下载输入法:</p>
<p><a href="http://fit.coollittlethings.com/down.php?v=1.9.3_intel">http://fit.coollittlethings.com/down.php?v=1.9.3_intel</a></p>
<p>安装完成一个完美的snow leopard就展示在你的眼前了。enjoy &nbsp;it:-)</p>
<p>需要补充的是，网上提到过Rebel EFI，我一直无法成功引导，所以我就不在这里介绍了。</p>
<p>如果你使用darwin wks7无法引导，你可以试一下Rebel EFI。</p>
<p>Linux下面的安装：</p>
<p>1.Linux下面目前似乎没有办法直接安装</p>
<p>2.所以我们的曲线救国的办法是通过上面的步骤在Windows下面安装，然后将安装完的虚拟机文件直接拿过来使用。</p>
<p>3.在linux下面的VMWare里打开，然后选择(i copied it)</p>
<p>4.你会发现它与在xp下面没有区别，很强大吧！！！哈哈。</p>
<p>5.Linux下面的速度比较慢。</p>
