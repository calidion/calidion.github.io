---
layout: post
status: publish
published: true
title: iPhone安装Android, openiboot安装指南（原创翻译）
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 715
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=715
date: !binary |-
  MjAxMC0wNC0yMyAxMToxNjo0MiArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wNC0yMyAwMzoxNjo0MiArMDgwMA==
categories:
- Android
- 民工翻译
- iPhone
tags: []
comments: []
---
<p>由3gcnbeta.com翻译</p>
<p>未经许可，谢绝转载.</p>
<p>原文：<a href="http://wiki.github.com/planetbeing/iphonelinux/openiboot-installation">http://wiki.github.com/planetbeing/iphonelinux/openiboot-installation</a></p>
<p>必需的条件：</p>
<ul>
<li>一个运行Linux系统的PC
<ul>
<li>git版本控制系统。这个包在一些操作系统里(比如Ubuntu)被称为"git-core"</li><br />
</ul><br />
</li></p>
<li>一个用"pwned"（即用pwn方式破解的)iPhone或者iPod Touch.一个"pwned"的设备是指用Pwnage工具或者是QuickPwn的设备，两者都可以从http://blog.iphone-dev.org/ 得到。</li><br />
</ul><br />
检出代码:<br />
git clone git://github.com/planetbeing/iphonelinux.git<br />
cd iphonelinux/</p>
<h1>第一次构建openiboot:</h1></p>
<ol>
<li>构那家一个ARM工具链（只需要做一次):
<ol>
<li>用root运行:
<pre>toolchain/build-toolchain.sh make</pre><br />
</li></p>
<li>等，需要很长时间，直到工具链编译完成.</li><br />
</ol><br />
</li></p>
<li>编译 OpeniBoot:
<ol>
<li>要从恢复模式中运行openiboot(a.k.a iboot), 你需要创建一个img3镜像.
<ol>
<li><em>需要运行些指令!</em></li><br />
</ol><br />
</li></p>
<li>然后构建: (需要一个能运行X86二进制的Linux系统）
<ol>
<li>对于iPod touch, 运行:
<pre>PLATFORM=IPOD make openiboot.img3</pre><br />
</li></p>
<li>对于 iPhone 2G, 运行:
<pre>PLATFORM=IPHONE make openiboot.img3</pre><br />
</li></p>
<li>对于iPhone 3G,运行:
<pre>PLATFORM=3G make openiboot.img3</pre><br />
</li><br />
</ol><br />
</li></p>
<li>在client/里运行make all:
<pre>cd client &amp;&amp; make all &amp;&amp; cd ..</pre><br />
(要求libusb, libreadline 和 pthread)</li></p>
<li>
<pre>sudo client/loadibec openiboot.img3</pre><br />
</li></p>
<li>运行客户端:
<pre>sudo client/oibc</pre><br />
</li><br />
</ol><br />
</li></p>
<li>在NOR里运行openiboot (可选): 在openiboot客户端运行 &ldquo;install&rdquo; &nbsp;(uninstall请用命令restore/update/run QuickPwn)</li><br />
</ol><br />
<strong>更新一个存在的openiboot:</strong></p>
<ol>
<li>从Git拉出新的代码: (如果你已经通过Git下载了代码，请使用&ldquo;git pull&rdquo;命令)</li>
<li>编译openiboot, 这次不需要再重新编译img3镜象:
<ol>
<li>对于 iPod Touch, 运行:
<pre>PLATFORM=IPOD make</pre><br />
</li></p>
<li>对于iPhone 2G,运行:
<pre>PLATFORM=IPHONE make</pre><br />
</li></p>
<li>对于iPhone 3G,运行:
<pre>PLATFORM=3G make</pre><br />
</li><br />
</ol><br />
</li></p>
<li>在client/里运行make all:
<pre>cd client &amp;&amp; make all &amp;&amp; cd ..</pre><br />
(要求libusb, libreadline 和 pthread)</li></p>
<li>通过设备菜单运行openiboot.</li>
<li>运行客户端:
<pre>sudo client/oibc</pre><br />
</li></p>
<li>将openiboot二进制内容复制到设备的内容:
<pre>!openiboot.bin</pre><br />
</li></p>
<li>跳转到:
<pre>go 0&times;09000000</pre><br />
</li></p>
<li>通过设备菜单重新运行openiboot控制台 .</li>
<li>重新启动客户端:
<pre>sudo client/oibc</pre><br />
</li></p>
<li>安装新版本:
<pre>install</pre><br />
</li><br />
</ol></p>
