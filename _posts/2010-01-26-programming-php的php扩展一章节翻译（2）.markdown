---
layout: post
status: publish
published: true
title: Programming PHP的PHP扩展一章节翻译（2）
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 166
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=166
date: !binary |-
  MjAxMC0wMS0yNiAxNjozMTo0OSArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwODozMTo0OSArMDgwMA==
categories:
- WEB服务器技术
- 民工翻译
- php
tags:
- PHP
comments: []
---
<p>结构总览</p>
<p>你可以写的PHP扩展有两种：PHP扩展和Zend扩展。这里我们主要介绍PHP扩展。Zend扩展是一个更加底层的扩展，并在某种程度上修改了语言的核 心。Opcode缓存系统象APC和Zend的Accelerator是Zend扩展。PHP扩展只是向PHP脚本提供函数或者对象。 MySQL,Oracle, LDAP, SNMP, EXIF, GB,以及Ming都是PHP的扩展的例子。</p>
<p>14-1图展示了一个包含PHP的WEB服务器的图表。WEB服务器处于最上层处理来自HTTP的请求，然后将请求通过服务抽象API（SAPI）传递给 PHP。&ldquo;mysql","ldap"和"snmp"这些小方块表示可以装入的PHP扩展，这也是本章你将学习的怎样去建立的扩展。TSRM是线程安全资源管理层，它用于帮助简化线程安全编程。PHP核心包含了一些不可定制的PHP特性，同时PHP的API包含了PHP特定的API函数，这些函数在核心与PHP扩展里都会被用到。最后一层是Zend引擎，它通过一个两段机制运行脚本，首先它产生一个操作码的集合，然后再执行它们。一个PHP扩展使用Zend扩展API来接收函数调用的参数和返回函数。</p>
<p>英汉对照：</p>
<p>Architectural Overview<br />
结构总览</p>
<p>There are two kinds of extensions that you can write: PHP extensions and Zend extensions. We will focus on PHP extensions here. Zend extensions are lower-level extensions that somehow modify the very core of the language. Opcode cache systems such as APC and Zend's Accelerator are Zend extensions. PHP extensions simply provide functions or objects to PHP scripts. MySQL, Oracle, LDAP, SNMP, EXIF, GD, and Ming are all examples of PHP extensions.</p>
<p>你可以写的PHP扩展有两种：PHP扩展和Zend扩展。这里我们主要介绍PHP扩展。Zend扩展是一个更加底层的扩展，并在某种程度上修改了语言的核心。Opcode缓存系统象APC和Zend的Accelerator是Zend扩展。PHP扩展只是向PHP脚本提供函数或者对象。MySQL,Oracle, LDAP, SNMP, EXIF, GB,以及Ming都是PHP的扩展的例子。<br />
<a href="http://www.3gcnbeta.com/wordpress/wp-content/uploads/2010/01/4229724475032747824.jpg"><img class="aligncenter size-full wp-image-167" title="4229724475032747824" src="http://www.3gcnbeta.com/wordpress/wp-content/uploads/2010/01/4229724475032747824.jpg" alt="" width="342" height="191" /></a><br />
Figure 14-1 shows a diagram of a web server with PHP linked in. The web server layer at the top handles incoming HTTP requests and passes them to PHP via the Server Abstraction API (SAPI). The "mysql," "ldap," and "snmp" boxes represent loadable PHP extensions, the kind you'll learn how to build in this chapter. TSRM is the Thread Safe Resource Manager layer, which helps simplify thread-safe programming. The PHP core contains many of the non-optional core features of PHP, and the PHP API contains the PHP-specific API functions used by both the core and the PHP extensions. Finally, there is the Zend Engine, which runs scripts through a two-pass mechanism, first generating a set of opcodes and then executing them. A PHP extension uses the Zend extension API to receive arguments from function calls and return values back.</p>
<p>14-1图展示了一个包含PHP的WEB服务器的图表。WEB服务器处于最上层处理来自HTTP的请求，然后将请求通过服务抽象API（SAPI）传递结PHP。这些&ldquo;mysql","ldap"和"snmp"这些小方块表示可以装入的PHP扩展，这也是本章你将会学到的怎样建立的扩展。TSRM是线程安全资源管理层，它用于帮助简化线程安全编程。PHP核心包含了一些不可定制的PHP特性，同时PHP的API包含了PHP特定的API函数，这些函数在核心与PHP扩展里都会被用到。最后一层是Zend引擎，它通过一个两段机制运行脚本，首先它产生一个操作码的集合，然后再执行它们。一个PHP扩展使用Zend扩展API来接收函数调用的参数和返回函数。<br />
Figure 14-1. Structure of a PHP-linked web server</p>
