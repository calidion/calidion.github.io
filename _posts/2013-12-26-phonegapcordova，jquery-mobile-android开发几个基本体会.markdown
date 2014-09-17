---
layout: post
status: publish
published: true
title: PhoneGap/Cordova，jQuery Mobile, Android开发几个基本体会
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1658
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1658
date: !binary |-
  MjAxMy0xMi0yNiAwNDoxMjo0MSArMDgwMA==
date_gmt: !binary |-
  MjAxMy0xMi0yNSAyMDoxMjo0MSArMDgwMA==
categories:
- 移动开发技术
- Android
- Cordova/PhoneGap
tags: []
comments: []
---
关于phonegap/cordova

1、将cordova.js放在所有js代码最前面

2、对于硬件事件与DOM事件分开去响应

3、从js的模板化道路

4、cordova变快非常快，并且经常会有一些bug,不但要能提bug还要能适时的去修改bug,并提一些bug到社区，适当的时候可能需要你自己提交代码

5、cordova的node工具非常不稳定，代码质量也很差，开发时需要注意

6、插件的原理非常简单，并且有很多参照的插件，但是要注意先测试完插件的功能再使用。

关于jQuery Mobile

1、目前来讲不存在js性能差的问题，前端框架性能基本都是网络延时造成的。通过我的电子书项目可以明显的反映出来这一点，在电子书项目上所有的页面都是存在手机端的，响应在手机或者模拟器上都非常快，所以对于jquery mobile指责可以停止了，

2、现在Android的硬件动辄四核，双核，并不存在性能差的问题，性能差的原因更多的在于java性能太差了。一个好的jQuery Mobile应用，可以做到响应比原生的都快。

3、目前来讲jQuery Mobile是移动端的UI方面最强大的开源免费系统，暂时不需要考虑其它的解决方案，因为没有更好的。截止13年12月底，相信短期也不太可能出来比jQuery Mobile更好的。

4、jQuery Mobile 1.4让jQuery Mobile与其它框架的结合的可能性进一步的加大，适当的时候可以考虑结合AngularJS/EmberJS进行前端MVC的开发

5、目前来看要jQuery Mobile的事件与功能开发还需要很多js的技巧，从而在结合一些MVC框架上存在的难点，所以如果对MVC框架不是很熟悉，还是先从原生的入手会更好一些.

关于Android的基本技巧：

1、查看安装应用目录下的文件

a)adb shell

b) shell@android:/ $ run-as com.packagename.appname

c)shell@android:/data/data/com.packagename.appname $ ls

app_database

cache

databases

lib

2、调试最好直接联手机，否则调试太慢了。又占用非常多的内存。