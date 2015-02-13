---
layout: post
status: publish
published: true
title: ! 'Ubuntu非root安装软件(mysql篇)'
author:
  display_name: 北漂IT民工
author_email: calidion@gmail.com
categories:
- 数据库技术
tags: ['数据库', 'MYSQL', 'root', 'UBUNTU']
comments: []
---

对于任何的非系统软件的安装，本人都是比较推荐非root权限安装的。
所以虽然ubuntu的apt包管理机制很方便，但是对于大部分软件，特别是开发软件最好还是通过源码安装，方便修改安装。
下面是在Ubuntu下面非root安装mysql-server的步骤：


```bash
#保证必要的库文件包
sudo apt-get install cmake libcurses-ocaml-dev

#得到mysql-server源代码
apt-get source mysql-server

cd mysql-x.x.xx     #我的是mysql-5.5.41/

#生成makefile，同时需要指定的连接库与库文件头的位置
#同时指定好安装的位置，个人一般比较喜欢安装在~/local下面。
cmake  -DCMAKE_INSTALL_PREFIX=~/local/mysql -DMYSQL_DATADIR=~/local/mysql/data -DSYSCONFDIR=~/local/mysql/etc -DCURSES_LIBRARY=/usr/lib/libncurses.so -DCURSES_INCLUDE_PATH=/usr/include

#编译代码
make

#安装
make install

#进入安装好的MYSQL目录
cd ~/local/mysql

#复制配置文件
#选择一个support-files目录下面的配置文件，这里选择medium
cp support-files/my-medium.cnf etc/my.cnf

#安装MYSQL数据库
scripts/mysql_install_db --user=$USER --basedir=. --datadir=data --defaults-file=etc/my.cnf





```
