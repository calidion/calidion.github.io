---
layout: post
status: publish
published: true
title: Ubuntu 下重设置mysql 密码
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 122
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=122
date: !binary |-
  MjAxMC0wMS0yNiAxNTowODozNyArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwNzowODozNyArMDgwMA==
categories:
- Ubuntu
tags:
- Mysql
- Ubuntu
comments: []
---
<p>官方解决办法链接:<br />
https:&#47;&#47;help.ubuntu.com&#47;community&#47;MysqlPasswordReset<br />
主要分成下面几步:<br />
1.关掉mysql</p>
<pre name="code" class="shell">
sudo &#47;etc&#47;init.d&#47;mysql stop<br />
<&#47;pre><br />
2.开启无授权的方式</p>
<pre name="code" class="shell">
sudo &#47;usr&#47;sbin&#47;mysqld --skip-grant-tables --skip-networking &<br />
<&#47;pre><br />
3. 以root用户进入</p>
<pre name="code" class="shell">
  mysql -u root<br />
<&#47;pre><br />
4.重置密码</p>
<pre name="code" class="sql">
UPDATE mysql.user SET Password=PASSWORD('newpwd') WHERE User='root';<br />
<&#47;pre><br />
5.保存改动</p>
<pre name="code" class="sql">
FLUSH PRIVILEGES;<br />
<&#47;pre><br />
6. 重启mysql</p>
<pre name="code" class="shell">
sudo &#47;etc&#47;init.d&#47;mysql stop<br />
sudo &#47;etc&#47;init.d&#47;mysql start<br />
 <&#47;pre></p>
