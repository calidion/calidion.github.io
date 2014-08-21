---
layout: post
status: publish
published: true
title: Programming PHP的PHP扩展一章节翻译（1）
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 163
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=163
date: !binary |-
  MjAxMC0wMS0yNiAxNjowMjoyMCArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwODowMjoyMCArMDgwMA==
categories:
- WEB服务器技术
- 民工翻译
- php
tags:
- PHP
- PHP扩展
comments: []
---
<p>第十四章：扩展PHP<br />
这一章展示了怎样用C语言来扩展PHP。虽然PHP可以实现大部的功能，但有时你可能还是需要由C的API带来的额外的速度与控制。C代码相对于其它解析型的脚本代码运行于一个更加魔幻的速度中，并且它也是创建间于PHP和任何其它第三方C库的瘦中间层机制。<br />
比如，与Mysql数据库服务器通讯，PHP需要实现MySQL的套接字协议。如果用PHP的fscocketopen()和fputs()直接与 MySQL直接通讯来得到这个协议的话，那么它的工作量是非常大的。所以作为代替，我们用了C写的瘦函数层来翻译MySQL的C API，也就是已经实现的libmysqlclient。那么这个瘦函数层就是我们所说的PHP扩展。当然PHP扩展也不是说一定是一个PHP和第三方类 库的中间层。一个扩展也可以是一些完全的新的功能实现（比如，FTP扩展）。<br />
在我们进入到编写扩展的细节里面去之前，有一个注意事项：如果你只是学习PHP并且没有任何C语言的背景，你可能得先忽略这一章。扩展的编写是一个高级的主题，并且它并不是为了给你带来伤心而设置的:)</p>
<p>Chapter 14. Extending PHP<br />
This chapter shows you how to write C language extensions to PHP. Although most functionality can be written in the PHP language, sometimes you need the extra speed and control you get from the C API. C code runs an order of magnitude faster than most interpreted script code, and it is also the mechanism for creating the thin middle layer between PHP and any third-party C library.<br />
For example, to be able to talk to the MySQL database server, PHP needs to implement the MySQL socket protocol. It would be a lot of work to figure out this protocol and talk to MySQL directly using fsockopen( ) and fputs( ) from a PHP script. Instead, the same goal can be accomplished with a thin layer of functions written in C that translate MySQL's C API, implemented in the libmysqlclient.so library included in MySQL, into PHP language-level function calls. This thin layer of functions is known as a PHP extension. PHP extensions do not always have to be a layer between PHP and some third-party library, however. An extension can instead completely implement some feature directly (for example, the FTP extension).<br />
Before we get into the details of writing extensions, a note of caution: If you are just learning PHP and do not have any sort of C programming background, you should probably skip this chapter. Extension writing is an advanced topic, and it is not for the faint of heart. </p>
