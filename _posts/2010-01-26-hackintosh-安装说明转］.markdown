---
layout: post
status: publish
published: true
title: Hackintosh 安装说明[转］
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 112
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=112
date: !binary |-
  MjAxMC0wMS0yNiAxNDo1NjoxMyArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwNjo1NjoxMyArMDgwMA==
categories:
- 操作系统
tags:
- Hackintosh
comments: []
---
<p>原链接：<br />
http://dlit.org/index.php?n=Main.MacOSXOnPC%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E<br />
Hackintosh 安装说明<br />
Mac OS X 安装版本</p>
<p>在非苹果机上安装Mac OS X，用原版（Mac OS零售版）的安装光盘若能安装成功，以后可以方便升级，建议首先尝试这种方法。不过采用原版安装，不仅需要破解的小技巧，若硬件与Mac电脑相差较大，还可能会遇到驱动方面的问题。</p>
<p>Mac OS X Leopard 10.5.6零售版原版光盘下载</p>
<p>下载的文件是一个zip压缩文件，使用Windows XP或更高版本以及Mac OS系统，可以直接解压缩，得到一个种子文件。若用Windows系统，使用迅雷或比特精灵打开该文件进行下载。若用Mac OS系统，使用Transmission下载。下载后，是一个dmg后缀的文件，其安装方法见下文介绍。</p>
<p>除了原版安装以外，还有很多破解版本，请参考Mac OS X各个破解版本介绍</p>
<p>目前最好的破解版本下载：</p>
<p>iDeneb v1.5 Leopard 10.5.7 下载<br />
iDeneb v1.4 Leopard 10.5.6 下载<br />
iPC OSx86 10.5.6 下载<br />
iAtkos 5i 10.5.5 下载<br />
下载的文件也是zip文件，参考上面的说明来下载。不同的是，这些下载的iso镜像文件可通过Windows平台的Nero或Mac OS X平台的Toast Titanium刻录为光盘进行安装。</p>
<p>Mac OS X 安装方法</p>
<p>原版系统安装方法</p>
<p>使用原版系统，因下载的dmg文件刻录光盘需要双层光盘和双层刻录机支持，大多数选择从硬盘安装的方法。</p>
<p>需要注意的是，采用原版系统安装时，最好是给MAC OS X一个单一的硬盘，不要与其他系统公用，因为其采用EFI引导+GUID分区，与所有的操作系统都不兼容。</p>
<p>用原版盘安装单一Mac系统10.5.6</p>
<p>多系统共存安装Mac OS X原版</p>
<p>破解系统安装方法</p>
<p>若硬盘上仅安装Mac OS X单一系统。直接将光盘插入光驱开始安装即可。</p>
<p>若安装Windows+Mac OS X双系统，需要预先准备分区以及配置引导器。分区方法为（注意先备份文件以免后悔）：</p>
<p>右键&ldquo;我的电脑&rdquo;，选择&ldquo;管理&rdquo;，选择&ldquo;磁盘管理&rdquo;，将除C盘外的主盘分区或逻辑分区删除（先删除逻辑盘，再删除逻辑分区）。删除的方法是右键分区，然后选择&ldquo;删除&rdquo;。<br />
单击&ldquo;开始&rdquo;，选择&ldquo;运行&rdquo;，输入&ldquo;cmd&rdquo;并回车。<br />
在命令行窗口输入Diskpart，回车后输入下列命令：<br />
list disk （显示硬盘号，若只有一个硬盘则会显示0，第二个硬盘会显示为1，依此类推）<br />
select disk 0 （这里替换成你的目标硬盘号，这里以唯一一块硬盘做例子）<br />
create partition primary id=af （这一步将硬盘空闲空间标示为af类型的分区，也就是Mac OS认识的分区。）<br />
注意：必须保证安装Mac的分区（此时此分区肯定已是主分区，见上面）是位于紧跟Windows分区之后的主分区，中间不能再存在其他主分区（但可以是扩展或逻辑分区）<br />
接下来配置引导。比较常用的双系统引导有chain0和tboot两种方法，使用其中一种即可。</p>
<p>chain0法</p>
<p>下载chain0文件，下载后解压，将解压出来的chain0文件拷贝到C:根目录，<br />
修改C:boot.ini （若找不到，查看下文说明。）<br />
在[operating systems]节添加如下内容：<br />
C:CHAIN0= "Mac OS X 10.5.6"<br />
上面这一行里，"Mac OS X 10.5.6"随便你写成什么，这些字符将会在开机选择操作系统的时候在菜单里出现。<br />
若C:下不出现boot.ini，那么需要打开&ldquo;我的电脑&rdquo;，在菜单栏上选择&ldquo;工具&rdquo;，选择&ldquo;文件夹选项&rdquo;，选择&ldquo;查看&rdquo;选项卡，将&ldquo;隐藏受保护的操作系统文件（推荐）&rdquo;前的对勾去掉，在下面一行&ldquo;隐藏文件和文件夹&rdquo;这里选择&ldquo;显示所有文件和文件夹&rdquo;<br />
CHAIN0也可以从光盘的SystemInstallationPackagesPatchesBoot.pkgContentsResourcesboot目录中找到。<br />
tboot法</p>
<p>tboot法与chain0法类似，下载tboot，将下载的文件解压，将解压后的tboot文件拷贝到C:根目录。<br />
修改boot.ini文件，在[operating systems]节添加C:CHAIN0= "Mac OS X 10.5.6"<br />
将分区和引导准备好之后，就可以插入破解光盘，从光盘启动电脑。以下分别说明不同破解版本的具体安装步骤。</p>
<p>iDeneb v1.4 Leopard 10.5.6</p>
<p>1) 将DVD光盘插入光驱启动，依照机器不同按F1/F2/F12等键从启动顺序菜单中选择DVD启动。</p>
<p>2) 按空格键从光盘启动。</p>
<p>3) 在boot:提示符下，直接按回车。出现一个灰苹果，如下图</p>
<p>4) 选择&ldquo;以简体中文作为主要语言&rdquo;，如下图</p>
<p>5) 欢迎界面，直接选择&ldquo;继续&rdquo;，如下图</p>
<p>6) 许可协议，选&ldquo;同意&rdquo;，如下图</p>
<p>7) 选择目的卷宗。点击选择有效磁盘，然后点击&ldquo;继续&rdquo;。如下图</p>
<p>8) 若目的卷宗这里，没有任何磁盘，那么在屏幕最上面菜单栏中选择&ldquo;实用工具&rdquo;，再选择&ldquo;磁盘工具&rdquo;，如下图</p>
<p>9) 将目标分区（也就是前面叙述的准备好的分区）选中后界面右边，选择&ldquo;抹掉&rdquo;选项卡，卷宗格式为&ldquo;Mac OS扩展（日志式）&rdquo;并单击&ldquo;抹掉&rdquo;按钮，如下图</p>
<p>10) 然后退出磁盘工具，如下图</p>
<p>11) 接着还是按照第7步说明的，选择有效磁盘，然后继续。来到&ldquo;安装摘要&rdquo;界面，如下图</p>
<p>12) 在&ldquo;安装摘要&rdquo;界面，一定要选择左下的&ldquo;自定义&rdquo;按钮，选择合适的选项，出现下图界面，否则，安装失败可能性非常高。而这里的选项，根据不同的机型，有着不同的选择。若机器型号与下文成功列表里一致，可点击相关机型来查看选项。各个选项定义或作用请参考Hackintosh系列教程#3-基本安装流程（基于iDeneb 1.4）</p>
<p>13) 选择完毕后，回到&ldquo;安装摘要&rdquo;界面，点击&ldquo;继续&rdquo;按钮即可进行安装，重启后，我们就进入了一个全新的Mac世界！</p>
<p>Mac OS X 在各个机型上成功安装的例子列表</p>
<p>IBM/Lenovo</p>
<p>Thinkpad T43 安装 iDeneb v1.4 Leopard 10.5.6</p>
<p>Thinkpad X61 安装 iDeneb v1.4 Leopard 10.5.6</p>
<p>华硕ASUS</p>
<p>ASUS Z9100L 安装 iDeneb v1.4 Leopard 10.5.6</p>
<p>惠普HP</p>
<p>HP DV2114TX 安装 iDeneb v1.4 Leopard 10.5.6</p>
<p>戴尔Dell</p>
<p>Dell 1400 安装 iATKOS 4i Leopard 10.5.4 并成功升级10.5.7</p>
<p>Dell 1425 安装 iDeneb v1.4 Leopard 10.5.6</p>
<p>Dell Latitude D410 安装 iDeneb v1.4 Leopard 10.5.6</p>
<p>Dell Latitude D630 完美安装 iAtkos 5i Leopard 10.5.5</p>
