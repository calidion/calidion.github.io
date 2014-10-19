---
layout: post
status: publish
published: true
title: Android的getSharedPreferences所具备的坑爹行为
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1470
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1470
date: !binary |-
  MjAxMS0wOC0yNyAxMjowMTowOSArMDgwMA==
date_gmt: !binary |-
  MjAxMS0wOC0yNyAwNDowMTowOSArMDgwMA==
categories:
- Android
tags: []
comments: []
---
<p>坑爹的SharedPreferences</p>
<p>现象描述：</p>
<p>通过提供给js的接口来读取存在SharedPreferences里的字符串。</p>
<p>在JS里调用接口读出来一个字符:</p>
<p>abc &nbsp;= 'abc';</p>
<p>在js里执行:</p>
<p>abc == 'abc'</p>
<p>返回true</p>
<p>然后用</p>
<p>switch(abc)</p>
<p>{</p>
<p>case 'abc':</p>
<p>// &nbsp;这里永远进不去</p>
<p>break;</p>
<p>}</p>
<p>如果先执行一下:</p>
<p>abc = "" + abc</p>
<p>前面的switch就能进去。</p>
<p>坑爹！</p>
<p>&nbsp;</p>
