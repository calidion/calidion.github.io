---
layout: post
status: publish
published: true
title: 几步教你怎样从Ubuntu&#47;Debian包的源码编译出deb包
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1041
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1041
date: !binary |-
  MjAxMC0wNS0xOCAxMzozMTozMiArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wNS0xOCAwNTozMTozMiArMDgwMA==
categories:
- Ubuntu
tags: []
comments: []
---
<p>1. 首先创建一个临时文件夹, src:<br />
mkdir src<br />
cd src<br />
2.假设原包名叫foo,通过下面的命令得到源代码:<br />
     apt-get source foo<br />
进入<br />
     cd foo-*<br />
3.安装所有相关的依赖包：<br />
     sudo apt-get build-dep foo<br />
4.将包修改成你的包，这样避免与debian的新包产生冲突：<br />
     dch -l local 'Blah blah blah'<br />
5.最后编译你的包:<br />
     debuild -us -uc<br />
6.如果没有出现错误,下面的命令就可以帮你实现这个包的安装，<br />
     sudo dpkg -i ..&#47;*.deb</p>
