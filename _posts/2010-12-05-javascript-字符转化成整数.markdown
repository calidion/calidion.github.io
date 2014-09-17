---
layout: post
status: publish
published: true
title: javascript  字符转化成整数
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1427
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1427
date: !binary |-
  MjAxMC0xMi0wNSAxNTo0NDo1MiArMDgwMA==
date_gmt: !binary |-
  MjAxMC0xMi0wNSAwNzo0NDo1MiArMDgwMA==
categories:
- Javascript
tags: []
comments: []
---
<p>1. 使用函数parseInt将字符串转化成整数</p>
<p>2.转化成整数的规则</p>
<p>a) 字符开头是整数，节取开头的数字：</p>
<p>var num = parseInt('300day'); &nbsp;&#47;&#47;结果是300</p>
<p>b) 开头不是整数，返回NaN（英文Not a Number的缩写，表示不是数字）</p>
<p>var num = parseInt('apple'); &#47;&#47;结果是NaN</p>
<p>c) 能识别字面量的八进制与十六进制</p>
<p>var num = parseInt('0xF'); &nbsp;&#47;&#47;结果是15</p>
<p>var num = parseInt('034'); &#47;&#47;结果是28,而不是34</p>
<p>d)无法识别小数点</p>
<p>var num = parseInt('.5'); &#47;&#47;结果是NaN</p>
<p>var num = parseInt('2.5'); &#47;&#47;结果是2</p>
<p>f)可以指定字符串的基数（默认是10）</p>
<p>var num = parseInt('ab'); &#47;&#47;结果是NaN</p>
<p>var num = parseInt('ab', 16); &#47;&#47;结果是171</p>
