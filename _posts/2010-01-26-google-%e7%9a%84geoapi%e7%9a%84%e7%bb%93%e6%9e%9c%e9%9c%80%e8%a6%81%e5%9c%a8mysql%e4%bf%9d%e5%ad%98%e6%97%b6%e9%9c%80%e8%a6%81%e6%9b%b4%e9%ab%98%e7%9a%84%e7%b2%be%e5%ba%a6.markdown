---
layout: post
status: publish
published: true
title: Google 的GeoAPI的结果需要在Mysql保存时需要更高的精度
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 312
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=312
date: !binary |-
  MjAxMC0wMS0yNiAyMDoxMDoyMiArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAxMjoxMDoyMiArMDgwMA==
categories:
- 编程技术
tags:
- Geo
- Goolge Maps API
- Mysql
comments: []
---
<p>Google 的GeoAPI的结果需要在Mysql保存时需要更高的精度，我们使用MYSQL的FLOAT将会影响latitude与longitude的精度，将类型转化成Double类型后就可以了。</p>
