---
layout: post
status: publish
published: true
title: __autoload + singleton 改进思路
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1440
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1440
date: !binary |-
  MjAxMS0wMi0yOCAxOToyNDoyOSArMDgwMA==
date_gmt: !binary |-
  MjAxMS0wMi0yOCAxMToyNDoyOSArMDgwMA==
categories:
- WEB服务器技术
- php
tags: []
comments: []
---
<p>看到公司的Singleton实例很痛苦的每次都实现一个instance函数。我感觉很麻烦。</p>
<p>下面我基于减少instance函数的观点出发，做一个实验。</p>
<p>目标是用以实现一个可以省掉重复定义函数的基类。</p>
<p>下面是我的代码</p>
<div id="_mcePaste">文件组织：<&#47;div></p>
<div id="_mcePaste">&#47;home&#47;eric&#47;phptest&#47;<&#47;div></p>
<div id="_mcePaste">|-Application.php<&#47;div></p>
<div id="_mcePaste">|-index.php<&#47;div></p>
<div id="_mcePaste">|-Session.php<&#47;div></p>
<div id="_mcePaste">`-Singleton.php<&#47;div></p>
<div><&#47;div></p>
<div id="_mcePaste">1. Singleton文件：<&#47;div></p>
<div id="_mcePaste">所有Singleton的基类<&#47;div></p>
<div id="_mcePaste"><?php<&#47;div></p>
<div id="_mcePaste">abstract class Singleton {<&#47;div></p>
<div id="_mcePaste">static private $instances = array();<&#47;div></p>
<div id="_mcePaste">public static function getIntance($class) {<&#47;div></p>
<div id="_mcePaste">if(!array_key_exists($class, self::$instances) || !isset(self::$instances[$class])) {<&#47;div></p>
<div id="_mcePaste">self::$instances[$class] = new $class();<&#47;div></p>
<div id="_mcePaste">}<&#47;div></p>
<div id="_mcePaste">return self::$instances[$class];<&#47;div></p>
<div id="_mcePaste">}<&#47;div></p>
<div id="_mcePaste">abstract public function instance();<&#47;div></p>
<div id="_mcePaste">};<&#47;div></p>
<div id="_mcePaste">?><&#47;div></p>
<div id="_mcePaste">2. 两个Singleton模式类的测试文件：<&#47;div></p>
<div id="_mcePaste">a) Session.php<&#47;div></p>
<div id="_mcePaste"><?php<&#47;div></p>
<div id="_mcePaste">class Session extends Singleton {<&#47;div></p>
<div id="_mcePaste">public function instance() {<&#47;div></p>
<div id="_mcePaste">return self::getIntance(__CLASS__);<&#47;div></p>
<div id="_mcePaste">}<&#47;div></p>
<div id="_mcePaste">}<&#47;div></p>
<div id="_mcePaste">?><&#47;div></p>
<div id="_mcePaste">b) Application.php<&#47;div></p>
<div id="_mcePaste"><?php<&#47;div></p>
<div id="_mcePaste">class Application extends Singleton {<&#47;div></p>
<div id="_mcePaste">public function instance() {<&#47;div></p>
<div id="_mcePaste">return self::getIntance(__CLASS__);<&#47;div></p>
<div id="_mcePaste">}<&#47;div></p>
<div id="_mcePaste">}<&#47;div></p>
<div id="_mcePaste">?><&#47;div></p>
<div><&#47;div></p>
<div id="_mcePaste">3. __autoload函数文件：<&#47;div></p>
<div id="_mcePaste"><?php<&#47;div></p>
<div id="_mcePaste">function __autoload($class) {<&#47;div></p>
<div id="_mcePaste">include $class . ".php";<&#47;div></p>
<div id="_mcePaste">}<&#47;div></p>
<div id="_mcePaste">var_dump(Session::instance());<&#47;div></p>
<div id="_mcePaste">var_dump(Application::instance());<&#47;div></p>
<div id="_mcePaste">?><&#47;div></p>
<div><&#47;div></p>
<div id="_mcePaste">4.返回结果：<&#47;div></p>
<div id="_mcePaste">object(Session)#1 (0) {<&#47;div></p>
<div id="_mcePaste">}<&#47;div></p>
<div id="_mcePaste">object(Application)#2 (0) {<&#47;div></p>
<div id="_mcePaste">}<&#47;div></p>
<div><&#47;div></p>
<div id="_mcePaste">5.成功。<&#47;div></p>
<div id="_mcePaste"><&#47;div></p>
<div>说明：<&#47;div></p>
<div id="_mcePaste">通过定义Singleton父类与利用__autoload来简化一下Singleton子类的实现方式<&#47;div></p>
<div id="_mcePaste">当然我们还是可以不将Singleton写成是抽象类的。<&#47;div></p>
<div id="_mcePaste">直接通过getInstance处传入类名来实现。<&#47;div></p>
<div id="_mcePaste">这样就可以方便子类的实现。不需要每个类都定义一个相同的函数 instance();<&#47;div></p>
