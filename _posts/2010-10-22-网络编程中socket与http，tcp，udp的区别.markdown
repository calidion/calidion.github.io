---
layout: post
status: publish
published: true
title: 网络编程中Socket与HTTP，TCP，UDP的区别
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1404
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1404
date: !binary |-
  MjAxMC0xMC0yMiAwOTozMzozNiArMDgwMA==
date_gmt: !binary |-
  MjAxMC0xMC0yMiAwMTozMzozNiArMDgwMA==
categories:
- WEB服务器技术
tags: []
comments: []
---
<p>根据多年的经验，凡是提socket服务器的人一定是没有弄清楚网络概念的人。开口socket,闭口socket的人一定没有理解socket是什么意思的，就象作为人不断的跟别人说自己是人一样，难道别人笨到看不出来你是人吗？</p>
<p>Socket的英文意思是插座, 就是有几个孔的固定的插座, 用电器插入后就能得到电能提供他所能提供的服务了。</p>
<p>对应到网络上，Socket（插座）里包含了你所启动的服务（类似于插座对应的电能），而孔就是所对应的端口。</p>
<p>通过端口，客户端就可以访问你所提供的服务。</p>
<p>当然客户端要先找到你的服务，在TCP&#47;IP协议族下通常的办法是通过IP协议来得到, 在Unix环境下通常也可以使用 Unix domain socket</p>
<p>所以Socket是网络协议连接所使用的一种方式，不是协议, 如果你要强调你是在编写Socket服务器，那么你相当于在表示你编写的是类似于管道这样的连接方式的不同类型的服务器。 </p>
<p>HTTP，TCP，UDP都是一种协议。</p>
<p>TCP,UDP都是基于Socket的连接方式的协议。HTTP在TCP层之上，当然也是SOCKET服务器。</p>
<p>所以讲Socket编程基本就是指用TCP&#47;UDP进行编程。</p>
<p>但是这是一种不明确的说法。</p>
<p>要明确讲就要用TCP&#47;UDP&#47;HTTP。</p>
<p>Socket是大部分语言对TCP&#47;UDP封装时所使用的名字。</p>
<p>如果不明确他的意义，将很容易造成困扰。</p>
<p>比如很多程序员以为Socket编程就是TCP编程，这是根本错误的。 你跟别人说你的是Socket服务器，实质上并没有说清楚你倒底是在用那个协议。</p>
<p>无论是HTTP, TCP, UDP, Websocket都是采用SOCKET机制的服务器。</p>
<p>如果不是很明确，可以到国外的论坛上看看，看看WIKI的定义，看看Richard Stevens的Unix网络编程。</p>
<p>理解Socket的明确含义，请勿传播错误，混淆概念。</p>
