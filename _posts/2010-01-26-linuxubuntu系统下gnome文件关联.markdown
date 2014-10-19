---
layout: post
status: publish
published: true
title: Linux/Ubuntu系统下Gnome文件关联
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 273
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=273
date: !binary |-
  MjAxMC0wMS0yNiAxODowMDo1MyArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAxMDowMDo1MyArMDgwMA==
categories:
- Ubuntu
tags:
- Gnome
- Ubuntu
comments: []
---
<p>PS:如果你要修改文件的打开方式，请选择右键＝>属性=>打开方式=>删除<br />
和Windows一样，在Gnome的文件管理器(nautilus)里，双击一个文件的时候，<br />
系统会自动调用相应的程序去打开这个文件。前提是能打开这个文件的软件已经安装<br />
并且配置完毕了。</p>
<p>在Nautilus里通过右键菜单固然可以修改默认的打开方式，但是缺乏灵活性和可<br />
操作性，比如，不能删除一些候选的打开方式，不能批量增加一些打开方式等等。</p>
<p>经过反复的摸索，终于被我发现了GNMOE的打开方式的配置方式。<br />
这里需要涉及到以下几个目录和文件</p>
<p>~/.local/share/applications<br />
/etc/gnome/defaults.list<br />
/usr/share/applications<br />
/usr/share/applications/mimeinfo.cache<br />
~/.local/share/applications/mimeinfo.cache<br />
去这几个目录看一下，就会发现很多以　desktop　为后缀的文件。<br />
这些文件是多功能的，第一，它们是组成GNMOE的&ldquo;开始&rdquo;菜单的一部分，即&ldquo;开始&rdquo;<br />
菜单里的一些应用程序项，在这里都能找到。你可以运行　alacarte，　这里会<br />
列出整个菜单的结构，你可以编辑它，但是很多项你没法删除，因为没有权限，<br />
你试着用root权限去运行　alacarte　，抱歉，你还是没有权限删除，要删除它们，<br />
只有在/usr/share/applications下面找到对应的文件，直接删除这个文件即可。</p>
<p>从总体上讲<br />
/etc/gnome/defaults.list保存了全局的打开方式<br />
~/.local/share/applications/defaults.list保存了个人的打开方式<br />
当两着不一致是，优先采用局部的个人设置。</p>
<p>~/.local/share/applications<br />
/usr/share/applications<br />
这两个分别是局部的desktop项和全局的desktop项</p>
<p>/usr/share/applications/mimeinfo.cache<br />
~/.local/share/applications/mimeinfo.cache<br />
这两个分别是全局的和局部的打开方式缓存</p>
<p>先看一下/etc/gnome/defaults.list的结构</p>
<p>[DefaultApplications]<br />
application/csv=gnumeric.desktop<br />
application/excel=ooo-calc.desktop<br />
application/msexcel=ooo-calc.desktop<br />
application/msword=ooo-writer.desktop<br />
application/ogg=mplayer.desktop<br />
application/pdf=evince.desktop<br />
application/postscript=evince.desktop<br />
.................<br />
text/x-chdr=vim.desktop<br />
text/x-csrc=vim.desktop<br />
text/x-dtd=vim.desktop<br />
text/x-java=vim.desktop<br />
text/mathml=vim.desktop<br />
text/x-python=vim.desktop<br />
text/x-sql=vim.desktop<br />
text/xml=firefox.desktop<br />
video/dv=mplayer.desktop<br />
video/mp4=mplayer.desktop<br />
video/mpeg=mplayer.desktop<br />
video/msvideo=mplayer.desktop<br />
video/quicktime=mplayer.desktop<br />
video/vnd.rn-realvideo=mplayer.desktop<br />
video/x-anim=mplayer.desktop<br />
video/x-avi=mplayer.desktop<br />
video/x-flc=mplayer.desktop<br />
......................</p>
<p>不难发现<br />
是这样的一种形式<br />
程序的类型/文件类型=打开这个文件的项[;项2]...[;项n]<br />
候选打开方式可以有好几种<br />
中间用;隔开，不留其余字符</p>
<p>要修改一个文件的打开方式，需要先确定这个文件的类型<br />
以纯文本文件为例类型是plain打开方式默认为vim.desktop<br />
候选的是firefox.desktop<br />
text/plain=vim.desktop;firefox.desktop</p>
<p>可以直接编辑<br />
~/.local/share/applications/defaults.list<br />
/etc/gnome/defaults.list<br />
编辑完之后，手工修改<br />
/usr/share/applications/mimeinfo.cache<br />
~/.local/share/applications/mimeinfo.cache<br />
这两个cache文件。<br />
这样就立即生效了</p>
<p>下面看一下desktop文件的结构</p>
<p>[DesktopEntry]<br />
Encoding=UTF-8//字符编码<br />
Name=vim　　//现实的名字<br />
MimeType=text/plain;//类型<br />
Exec=vim%f//运行的程序%f表示一个参数<br />
Type=Application　//类型<br />
Terminal=true//是否使用终端<br />
NoDisplay=true//是否显示在gnome菜单里</p>
<p>知道这些<br />
就可以很方便的定制&ldquo;开始&rdquo;菜单　和　文件的打开方式了</p>
