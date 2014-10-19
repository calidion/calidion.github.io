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
<div id="_mcePaste">文件组织：</div></p>
<div id="_mcePaste">/home/eric/phptest/</div></p>
<div id="_mcePaste">|-Application.php</div></p>
<div id="_mcePaste">|-index.php</div></p>
<div id="_mcePaste">|-Session.php</div></p>
<div id="_mcePaste">`-Singleton.php</div></p>
<div></div></p>
<div id="_mcePaste">1. Singleton文件：</div></p>
<div id="_mcePaste">所有Singleton的基类</div></p>
<div id="_mcePaste"><?php</div></p>
<div id="_mcePaste">abstract class Singleton {</div></p>
<div id="_mcePaste">static private $instances = array();</div></p>
<div id="_mcePaste">public static function getIntance($class) {</div></p>
<div id="_mcePaste">if(!array_key_exists($class, self::$instances) || !isset(self::$instances[$class])) {</div></p>
<div id="_mcePaste">self::$instances[$class] = new $class();</div></p>
<div id="_mcePaste">}</div></p>
<div id="_mcePaste">return self::$instances[$class];</div></p>
<div id="_mcePaste">}</div></p>
<div id="_mcePaste">abstract public function instance();</div></p>
<div id="_mcePaste">};</div></p>
<div id="_mcePaste">?></div></p>
<div id="_mcePaste">2. 两个Singleton模式类的测试文件：</div></p>
<div id="_mcePaste">a) Session.php</div></p>
<div id="_mcePaste"><?php</div></p>
<div id="_mcePaste">class Session extends Singleton {</div></p>
<div id="_mcePaste">public function instance() {</div></p>
<div id="_mcePaste">return self::getIntance(__CLASS__);</div></p>
<div id="_mcePaste">}</div></p>
<div id="_mcePaste">}</div></p>
<div id="_mcePaste">?></div></p>
<div id="_mcePaste">b) Application.php</div></p>
<div id="_mcePaste"><?php</div></p>
<div id="_mcePaste">class Application extends Singleton {</div></p>
<div id="_mcePaste">public function instance() {</div></p>
<div id="_mcePaste">return self::getIntance(__CLASS__);</div></p>
<div id="_mcePaste">}</div></p>
<div id="_mcePaste">}</div></p>
<div id="_mcePaste">?></div></p>
<div></div></p>
<div id="_mcePaste">3. __autoload函数文件：</div></p>
<div id="_mcePaste"><?php</div></p>
<div id="_mcePaste">function __autoload($class) {</div></p>
<div id="_mcePaste">include $class . ".php";</div></p>
<div id="_mcePaste">}</div></p>
<div id="_mcePaste">var_dump(Session::instance());</div></p>
<div id="_mcePaste">var_dump(Application::instance());</div></p>
<div id="_mcePaste">?></div></p>
<div></div></p>
<div id="_mcePaste">4.返回结果：</div></p>
<div id="_mcePaste">object(Session)#1 (0) {</div></p>
<div id="_mcePaste">}</div></p>
<div id="_mcePaste">object(Application)#2 (0) {</div></p>
<div id="_mcePaste">}</div></p>
<div></div></p>
<div id="_mcePaste">5.成功。</div></p>
<div id="_mcePaste"></div></p>
<div>说明：</div></p>
<div id="_mcePaste">通过定义Singleton父类与利用__autoload来简化一下Singleton子类的实现方式</div></p>
<div id="_mcePaste">当然我们还是可以不将Singleton写成是抽象类的。</div></p>
<div id="_mcePaste">直接通过getInstance处传入类名来实现。</div></p>
<div id="_mcePaste">这样就可以方便子类的实现。不需要每个类都定义一个相同的函数 instance();</div></p>
