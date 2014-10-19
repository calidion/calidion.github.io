---
layout: post
status: publish
published: true
title: Debian/Ubuntu下Mysql数据库root账号不存在的解决办法
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 829
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=829
date: !binary |-
  MjAxMC0wNC0yOCAyMjoyMDoyNCArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wNC0yOCAxNDoyMDoyNCArMDgwMA==
categories:
- Ubuntu
tags:
- Debian
- Msyql
- root
- Ubuntu
comments: []
---
<p>在新购的VPS上安装Debian后,发现mysql root无法登陆，<br />
通过<br />
cat /etc/mysql/debian.cnf<br />
查看默认的debian-sys-maint账号.<br />
发现账号不存在。<br />
然后用google狂搜，并结合自己的实际得到了下面的解决办法：<br />
1. /etc/init.d/mysql stop #关掉mysql<br />
2. /usr/bin/mysqld_safe --skip-grant-tables & #安全模式启动<br />
3. mysql<br />
4. 在mysql下顺序执行下面的命令，并将3gcnbeta换成你自己的密码。<br />
第一次grant时会报错，但是第二次就好了，估计flush时会重建数据表.<br />
mysql> use mysql<br />
mysql> grant all privileges on *.* to root@localhost identified by '3gcnbeta' with GRANT OPTION;<br />
mysql> update user set password=password('3gcnbeta') where user='root';<br />
mysql> flush privileges;   //注意先刷新下表<br />
mysql> grant all privileges on *.* to root@localhost identified by '3gcnbeta' with GRANT OPTION;<br />
mysql> flush privileges;<br />
5.这时修复就已经完成了，然后再通过<br />
mysql> select * from user where user='root';<br />
就可以看到root账号已经创建。<br />
6.再执行<br />
/etc/init.d/mysql restart<br />
就可以登陆 root用户了</p>
