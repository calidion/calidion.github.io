---
layout: post
status: publish
published: true
title: mysql数据库在phpmyadmin或者任何客户端下乱码的问题解决
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 843
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=843
date: !binary |-
  MjAxMC0wNS0wMiAwMzowNzoyNiArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wNS0wMSAxOTowNzoyNiArMDgwMA==
categories:
- Mysql
tags: []
comments: []
---
<p>使用phpmyadmin上查看数据库发现是乱码的时候一般是很不爽的。</p>
<p>主要原因就是你的数据库默认字符集与你的Collate并不匹配，</p>
<p>假设你的字符集是latin1，你的Server的Collate是utf-8</p>
<p>那么你只需要执行下面的几步就可以更新的数据库字符集了。</p>
<p>1. mysqldump -uroot -p --default-character-set=latin1 table_name&nbsp;> table_name.sql</p>
<p>2. 登陆数据库执行语句:</p>
<p>CREATE DATABASE `table_name` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci</p>
<p>3.打开 table_name.sql</p>
<p>删除含有set names xxx的行。</p>
<p>3.&nbsp;mysql -uroot -p --default-character-set=utf8 table_name < table_name.sql</p>
