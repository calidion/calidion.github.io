---
layout: post
status: publish
published: true
title: Google Map Api HTTP地址解析
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 289
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=289
date: !binary |-
  MjAxMC0wMS0yNiAxOTo0NTo1NCArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAxMTo0NTo1NCArMDgwMA==
categories:
- WEB开发
tags:
- Google Maps API
- HTTP
- 地址解析
comments: []
---
<p>1. 支持通过经纬度得到地址<br />
方式如下面的示例:<br />
http://ditu.google.cn/maps/geo?q=38.895000,-77.036667&output=xml&sensor=true&key=abcdefg<br />
http://ditu.google.cn/maps/geo?q=38.895000,-77.036667&output=json&sensor=true&key=abcdefg<br />
2.中文进行解析时,需要注意的问题编码问题.<br />
传给google的请求的编码需要是UTF-8的编码.<br />
同时当成HTTP的请求的一部分进行传送时,<br />
必须显式或者隐式的转换成URLEncode编码,<br />
比如请求:<br />
北京<br />
那么对应的URLEncode的值就是:<br />
%E5%8C%97%E4%BA%AC<br />
http://ditu.google.cn/maps/geo?q=%E5%B9%BF%E5%B7%9E%E5%B8%82%E5%B9%BF%E5%B7%9E%E4%B8%9C%E7%AB%99&output=csv&key=abcdefg</p>
