---
layout: post
status: publish
published: true
title: Ubuntu下面gedit中文乱码的解决
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 62
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=62
date: !binary |-
  MjAxMC0wMS0yNiAxMDo1MjowOSArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwMjo1MjowOSArMDgwMA==
categories:
- Ubuntu
tags:
- gedit
- Ubuntu
- 乱码
comments: []
---
<p>1.由于中文处理中大部分的中文处理都是使用gb2312或者gbk完成的<br />
2.但是默认的情况下，Linux并不支持GBK，GB2312,所以经常会发现在Linux打开文件出现的是乱码。<br />
下面讲一下在Linux下面，中文乱码的解决办法：</p>
<p>1.对于当前用户来讲,在命令行里输入:<br />
gconf-editor<br />
则会得到如下的图片<br />
<a href="http:&#47;&#47;www.3gcnbeta.com&#47;wordpress&#47;wp-content&#47;uploads&#47;2010&#47;01&#47;721420365310889234.jpg"><&#47;a><a href="http:&#47;&#47;www.3gcnbeta.com&#47;wordpress&#47;wp-content&#47;uploads&#47;2010&#47;01&#47;1931481290190170444.jpg"><img class="aligncenter size-full wp-image-81" title="1931481290190170444" src="http:&#47;&#47;www.3gcnbeta.com&#47;wordpress&#47;wp-content&#47;uploads&#47;2010&#47;01&#47;1931481290190170444.jpg" alt="" width="700" height="550" &#47;><&#47;a></p>
<p>2.然后选择apps->geditor-2&#47;preferences&#47;encodings.如下图。</p>
<p><a href="http:&#47;&#47;www.3gcnbeta.com&#47;wordpress&#47;wp-content&#47;uploads&#47;2010&#47;01&#47;823314306880051668.jpg"><&#47;a><img title="721420365310889234" src="http:&#47;&#47;www.3gcnbeta.com&#47;wordpress&#47;wp-content&#47;uploads&#47;2010&#47;01&#47;721420365310889234.jpg" alt="" width="700" height="550" &#47;></p>
<p>3.双击第一个auto-detect键，则出现如下的界面：</p>
<p><a href="http:&#47;&#47;www.3gcnbeta.com&#47;wordpress&#47;wp-content&#47;uploads&#47;2010&#47;01&#47;1948369788792509648.jpg"><&#47;a><a href="http:&#47;&#47;www.3gcnbeta.com&#47;wordpress&#47;wp-content&#47;uploads&#47;2010&#47;01&#47;3212192434222392812.jpg"><img class="aligncenter size-full wp-image-80" title="3212192434222392812" src="http:&#47;&#47;www.3gcnbeta.com&#47;wordpress&#47;wp-content&#47;uploads&#47;2010&#47;01&#47;3212192434222392812.jpg" alt="" width="345" height="400" &#47;><&#47;a></p>
<p>4.选择添加，则出来如下的对话框：</p>
<p><img title="823314306880051668" src="http:&#47;&#47;www.3gcnbeta.com&#47;wordpress&#47;wp-content&#47;uploads&#47;2010&#47;01&#47;823314306880051668.jpg" alt="" width="281" height="95" &#47;></p>
<p>5.分别添加GBK， GB2312两个编码</p>
<p><img title="1948369788792509648" src="http:&#47;&#47;www.3gcnbeta.com&#47;wordpress&#47;wp-content&#47;uploads&#47;2010&#47;01&#47;1948369788792509648.jpg" alt="" width="281" height="95" &#47;></p>
<p>并将GBK与GB2312放到最前面，如3所示。这样再打开GBK的文件就能自动识别了。</p>
<p>是对于sudo的情况，则需要打入命令：<br />
sudo gconf-editor<br />
按上述方法再来一遍即可</p>
<div><span style="color: #0000ee; -webkit-text-decorations-in-effect: underline;"><br />
<&#47;span><&#47;div></p>
<div><span style="color: #0000ee; -webkit-text-decorations-in-effect: underline;"><br />
<&#47;span><&#47;div></p>
<div><span style="color: #0000ee; -webkit-text-decorations-in-effect: underline;"><br />
<&#47;span><&#47;div></p>
