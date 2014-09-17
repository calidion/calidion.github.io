---
layout: post
status: publish
published: true
title: Thinkpad T43 安装 iDeneb v1.4 Leopard 10.5.6
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 335
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=335
date: !binary |-
  MjAxMC0wMi0wMiAyMzo1Mzo1OSArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMi0wMiAxNTo1Mzo1OSArMDgwMA==
categories:
- 编程技术
tags:
- Mac
- T43
comments: []
---
<p>IBM Thinkpad T43 ( Type: 2668-44U)<br />
硬件信息<br />
Intel Pentium M (Dothan) 750 1.86GHz CPU 533MHz BUS speed<br />
北桥与显卡 Intel 915PM northbridge and an ATI Mobility Radeon X300 (M22) 64MB DDR2 SDRAM Supports DVI output through a dock or port replicator.<br />
南桥 Intel 82801FBM ICH6-M southbridge<br />
显示器 14.1" TFT display with 1024x768 resolution<br />
内存 512MB PC2-4200 (533 MHz) memory standard, 2GB max<br />
硬盘 40GB PATA HDD1<br />
声卡 AD1981B AC'97 Audio controller<br />
网卡 Broadcom NetXtreme BCM5751M 10&#47;100&#47;1000 Gigabit Ethernet<br />
光驱 UltraBay Slim with DVD-ROM&#47;CD-RW Combo<br />
通讯 CDC slot with IBM Integrated 56K Modem (MDC-2)<br />
无线 MiniPCI slot with Intel PRO&#47;Wireless 2200BG Mini-PCI Adapter<br />
其他<br />
CardBus slot (Type 2)<br />
ExpressCard&#47;54 slot<br />
IBM Embedded Security Subsystem 2.0<br />
IBM Active Protection System<br />
Integrated Fingerprint Reader on select systems<br />
UltraNav (TrackPoint &#47; Touchpad combo)<br />
安装iDeneb 10.5.6 Mac OS X<br />
将DVD光盘插入光驱启动，按F12进入启动顺序菜单，选择DVD启动。<br />
在boot:提示符下，直接按回车。<br />
选择&ldquo;以简体中文作为主要语言&rdquo;<br />
欢迎界面，直接选择&ldquo;继续&rdquo;<br />
许可协议，选&ldquo;同意&rdquo;<br />
选择目的卷宗这里，若没有任何东东，那么在屏幕最上面菜单栏中选择&ldquo;实用工具&rdquo;，再选择&ldquo;磁盘工具&rdquo;。<br />
在新出现的磁盘管理界面上，从左面单击disk名称，我的是&ldquo;37.3GB HTS541040G9A....&rdquo;，然后在右面单击&ldquo;分区&rdquo;，将disk0s2区域选中（因为我的空白区域是整个磁盘的第二个分区处，若当初分区是在第一块区域，那么这里是disk0s1，若是在从硬盘上，则为disk1s1），写上名称&ldquo;macdisk&rdquo;（这里也随便你写，相当于卷标），格式选择&ldquo;Mac OS扩展（日志式）&rdquo;，然后点击&ldquo;应用&rdquo;。 然后，在左侧disk名称下将会出现macdisk（或你写的卷标），单击这个卷标，在右边选择&ldquo;抹掉&rdquo;选项卡，单击&ldquo;抹掉&rdquo;，弹出警告信息依然点击&ldquo;抹掉&rdquo;。到这里，就完成了对磁盘分区的格式化。若今后需要重装，只需要重复这个段落的动作，不需要重复上个段落。<br />
而后在屏幕上端的菜单栏中选择&ldquo;磁盘工具&rdquo;，选择&ldquo;退出磁盘工具&rdquo;。这时，选择目的卷宗这里就出现了一个磁盘，卷标是macdisk（或你写的卷标）。单击它后按&ldquo;继续&rdquo;按钮。<br />
在接下来的&ldquo;安装摘要&rdquo;这个界面，要点击左下角的&ldquo;自定&rdquo;按钮。<br />
打开&ldquo;本地化语言&rdquo;左边的小箭头，勾选&ldquo;简体中文&rdquo;。然后再单击小箭头缩回。<br />
勾选&ldquo;附加字体&rdquo;，勾选&ldquo;X11&rdquo;，iDeneb Essential System已经被勾选，不要动。<br />
展开&ldquo;Patches 10.5.6 Ready&rdquo;，这个目录十分重要，最好查看晓大虾的博客予以理解：Hackintosh系列教程#3-基本安装流程（基于iDeneb 1.4）<br />
Alternative Essential Patch<br />
  勾选&ldquo;ACPI Kext 10.5.6&rdquo;<br />
  勾选&ldquo;PS2Fix for ACPI kext 10.5.6&rdquo;（因为Thinkpad自带的小红点和触摸板是PS&#47;2方式）<br />
Audio<br />
  勾选&ldquo;AC97Audio&rdquo;<br />
Chipset<br />
  勾选&ldquo;ICHx Fixed&rdquo;<br />
Kernel<br />
  勾选&ldquo;Kernel 9.2.0 Speedstep&rdquo; （参考http:&#47;&#47;wiki.osx86project.org&#47;）<br />
Network<br />
  Ethernet<br />
   勾选&ldquo;AppleBC5751&rdquo;<br />
Fix<br />
  AppleSMBIOS<br />
   勾选&ldquo;AppleSMBIOS MacBook&rdquo;（我比较喜欢冒充MacBook）<br />
   勾选&ldquo;FireWire Remove&rdquo;（T43没有火线，移除以减少冲突）<br />
   勾选&ldquo;BatteryManager&rdquo;<br />
   勾选&ldquo;Seatbel Fix&rdquo;<br />
不选&ldquo;System Utilities&rdquo; 不选&ldquo;Video&rdquo;<br />
上面介绍的&ldquo;Patches 10.5.6 Ready&rdquo;到这里完毕，接下来勾选&ldquo;Applications&rdquo;，不选&ldquo;Netbook&rdquo;。最后，点击&ldquo;完成&rdquo;按钮，点击&ldquo;安装&rdquo;按钮开始安装。<br />
（注意，这样选择后，休眠功能不起作用，有愿意实验的可以再配合晓博客的选项说明选择某些没选的项目来更正。）<br />
初始化<br />
启动后，菜单上应该有Windows XP和Mac OS X 10.5.6（或你自己写的）两个项目，选择Mac那个回车，然后会有个提示信息并倒计时，这个时候不要动键盘，若动了，进入boot:提示界面，直接回车就可以。<br />
然后你就可以看到初始化屏幕，国家啦，地址啦等等。这里不再说了。要是遇到困难可以留言。需要注意的是：这些步骤中会需要你设置一个管理员密码，这密码千万要记住，因为每次进入Mac OS X不需要密码，但是安装驱动等动作都需要这个密码。<br />
安装Intel 2200 BG无线网卡驱动<br />
在http:&#47;&#47;code.google.com&#47;p&#47;iwidarwin这里，找到相关版本的驱动，下载后会自动启动安装器安装。<br />
这里要说明的一点是：若驱动装错，会进不了系统，不过可以按照如下方法补救：<br />
启动的时候，选择了&ldquo;Mac OS X 1.5.6&rdquo;菜单后，会提示按任意键进入选项启动方式，这个时候按下空格键，进入boot:状态，输入-x并回车，这样启动到安全模式。<br />
输入密码登录后，打开终端（双击macdisk盘符，打开Applications，打开Utilities，打开Terminal），输入：<br />
sudo kextunload -p &#47;System&#47;Library&#47;Extensions&#47;iwi2200.kext<br />
输入安装时设置的密码后这个命令会执行成功，若不成功，检查命令，要注意严格大小写。<br />
然后，打开macdisk盘符，进入System，进入Library，进入Extensions，将iwi2200.kext拖入回收站，然后去上层目录，将Extensions.mkext文件删除到回收站，若有其他Extensions.aaaa(aaaa为任意长度任意字符)，全部拽回收站里去。这些步骤都要求输入密码，也就是安装时候设置的那个。做完这些项目后，重启。就可以正常进入系统了。<br />
最新问题：<br />
显卡QE无法打开。(机器太老了:( )<br />
无线不工作（安装iwl2200后，也只能连接无密码或WEP密码的无线路由，不支持WPA&#47;WPA2的无线路由，可问题是大部分无线都是WPA&#47;WPA2）</p>
<p>Read more: http:&#47;&#47;dlit.org&#47;index.php?n=Main.ThinkpadT43#ixzz0eOVCsoJf</p>
