---
layout: post
status: publish
published: true
title: Hadoop不是什么(What Hadoop is Not)?
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1514
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1514
date: !binary |-
  MjAxMi0xMi0xMiAxMzoxOTozMCArMDgwMA==
date_gmt: !binary |-
  MjAxMi0xMi0xMiAxMzoxOTozMCArMDgwMA==
categories:
- WEB服务器技术
- 民工翻译
- noSQL
tags: []
comments: []
---
<p>原文：<br />
http://wiki.apache.org/hadoop/HadoopIsNot</p>
<p><strong>Hadoop不是什么？</strong></p>
<p>我们现在可以从很多电子邮件(西方人在互联网上的交流很多是基于邮件的)获取关于Hadoop的信息,从而会认为hadoop可以解决所有的应用/数据中心的问题。但是，事实不是这样的。他为一些公司和组织解决了特定的问题，但是只是在他们理解了这项技术之后，并且是在适当的地方。如果你是抱着替换你的数据库或者SAN文件系统的思路来开始使用Hadoop的话，你将会失望。</p>
<p><strong>Apache Haddop不是对数据库的替换</strong></p>
<p>数据库是伟大的东西。发起一个SELECT的SQL调用，就可以利用数据库的索引/优化产生毫秒级的响应。想改变数据？执行一个UPDATE然后数据就变了。但是Hadoop并不是做这个的。</p>
<p>Hadoop保存数据在文件里面，并且不建立索引。如果你想要查找一些东西，你必须运行一个MapReduce的作业来跑完所有的数据。这个需要花费一些时间，也就是说，你不能直接用Hadoop来替换database。Hadoop工作的地方是那些对于数据来讲，数据太大的地方(比如：你达到了技术的极限，而不是你不想为数据库付费)。对于非常大的数据库来说，产生索引的代价太大以至于你不能简单的对变更数据产生索引。当很多机器在向这个数据库执行写操作时，你就无法对这个数据库进行锁操作。但这个时候一个关联不直接的分布式文件系统的思路是可行的。</p>
<p>这里有一个运行在Hadoop HDFS之上的高性能的基于列表的数据库：Apache HBase。这是一个很好的将你抽取出来的数据保存下来的地方。</p>
<p><strong>MapReduce并不总是最好的算法</strong></p>
<p>MapReduce是一个深奥的想法：通过一个简单的函数式编程的操作，然后应用它，用并行计算的方式，针对Gb或者Tb级的数据。但是这是有代价的。对于那个并行性来说，你需要让所有的MR操作与其它的操作是独立的。如果你需要知道之前所有的事情的进行情况，你就会遇到问题。这些问题可以通过使用：<br />
Iteration(迭代): 运行多个MR作业，前一个的输出，作为下一个的输入。<br />
共享状态信息: Hbase在这里一个可以考虑的选项，或者一些象memcache这样的也是一个选项。<br />
得到帮助。</p>
<p>不要试图记住共享变量里的信息，因为他们是只记录在一个JVM里的。在大量并行计算的环境下，这是一种错误的方式。</p>
<p><strong>Hadoop和MapReduce不是一个学习java编程的地方</strong></p>
<p>现在的Hadoop API和文档里有很多的预设条件，假设你有java编程的基础，与解决Hadoop不能工作时的常见的错误消息的基础。如果你不懂classpath, 怎么编译与调试java代码，先从hadoop里抽出来，回去学习一些关于java的更多的知识后再跟进。</p>
<p><strong>Hadoop 不是一个学习网络错误消息的理想场所。</strong></p>
<p>如果你对网络与相关的错误消息已经很熟悉，你会发现事情就会更加容易的工作。比如：&ldquo;连接拒绝&rdquo;是什么意思，和它与&ldquo;没有连接到主机的路由&rdquo;的差别怎样的。</p>
<p>很多人发送了与&ldquo;连接拒绝&rdquo;、&ldquo;没有连接到主机的路由&rdquo;和其它常见的TCP-IP层次相关的问题到用户列表上。这些通常是由无效的集群配置引起的现象，集群的某些部分没有运行或者机器不能在内网互相通讯。邮件列表上的人不能帮助你调试你的网络配置，因为这是你的网络，不是他们的。他们可以帮你点出一些工具和测试方法，但是因为每个邮件的来回时间可能会花上一天，所以你会发现这并不是一个很快的得到帮助的方法。</p>
<p>Hadoop小组的人员并不会故意的让事情变的困难，只是一个大型的分布式系统如果不能很好的工作，你肯定会得到一些有意思的错误信息。如果你可以帮助改进这些网络消息或者诊断方法，我们会很想得到这些代码。</p>
<p><strong>Hadoop集群不是一个学习Unix/Linux系统管理的地方</strong></p>
<p>你自己需要知道在Unix/Linux系统下怎么玩。怎么装？在/etc/下面的各种文件是做什么用的？怎么建立网络？什么样的hosts配置是好的？如何调试DNS的问题？为什么把日志放在独立的盘上，而不是根盘？等等。如果你一个单机都照顾不过来，你不可能处理由80个这种机器组成的一个集群。也就是说不要试图用手动编辑/etc/hosts那样的方法来维护80个以上这样的单元，因为这种方法是不能规模化的。</p>
<p>你需要了解的事情：</p>
<p>SSH，他是什么，怎么样搭建authorized_keys,怎样使用ssh/scp命令<br />
ifconfig, nslookup和其它一些网络配置/诊断工具<br />
你的平台是如何保持他的更新的。<br />
你的机器产生的各种日志文件，以及他们的意义。<br />
如果建立原生的文件系统，并且挂载他们。</p>
<p>这个是非常重要的。如果你不懂这些，说明你的程度还不够。在你对如何让Linux系统启动和运行有一些基本的了解前，在你能用ssh不输入密码就可以相互登陆不同的机器前，在这些机器能相互找到各自的主机名等等问题解决前，你不应该开始安装Hadoop。Hadoop的文档默认你是能做这些事情的，并且也不会解释他们是如何动作的。</p>
<p><strong>HDFS并不是POSIX文件系统</strong></p>
<p>POSIX文件系统模型的文件可以追加，得到调用时的位置，锁定的文件等信息。但是你不能无缝的将针对所有的POSIX兼容的文件系统的代码直接映射到HDFS上。</p>
