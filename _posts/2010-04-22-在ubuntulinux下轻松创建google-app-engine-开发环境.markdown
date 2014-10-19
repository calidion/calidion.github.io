---
layout: post
status: publish
published: true
title: 在Ubuntu/Linux下轻松创建Google App Engine 开发环境
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 641
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=641
date: !binary |-
  MjAxMC0wNC0yMiAxMTowNjoyMyArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wNC0yMiAwMzowNjoyMyArMDgwMA==
categories:
- Ubuntu
- 编程技术
- WEB开发
tags:
- Google App Engine
- Linux
comments: []
---
<p>在控制台输入下面的命令:</p>
<pre name="code" class="sh">
#通过下面的链接或者手动下载相应的版本，或者将下面的代码保存到一个shell文件里<br />
wget http://googleappengine.googlecode.com/files/google_appengine_1.3.3.zip -O app.zip</p>
<p>mkdir ~/Sites<br />
unzip -o app.zip -d ~/Sites<br />
echo 'PATH="$HOME/Sites/google_appengine/:$PATH"' >> ~/.profile<br />
source ~/.profile<br />
</pre><br />
然后就可以在控制台下使用appengine的命令了</p>
