---
layout: post
status: publish
published: true
title: 利用闭包实现一个javascript的Timer(定时器)
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 135
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=135
date: !binary |-
  MjAxMC0wMS0yNiAxNToyODozOSArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwNzoyODozOSArMDgwMA==
categories:
- Javascript
tags:
- Timer
- 定时器
- 闭包
comments: []
---
<pre name="code" class="js">
var Timer = function(obj){<br />
var t = null;<br />
var interval = 1000;<br />
var start = function(period, callback){<br />
     if(t) clearTimeout(t);<br />
     t = setTimeout(function(){ if(callback) callback.call(obj);}, period);<br />
}<br />
var stop = function(){<br />
    clearTimeout(t);<br />
}<br />
var repeat = function(period, callback){<br />
     if(t) clearTimeout(t);<br />
     t = setTimeout(function(){ if(callback) callback.call(obj); repeat(period, callback);}, period);<br />
}</p>
<p>this.start = start;<br />
this.stop = stop;<br />
this.repeat = repeat;<br />
}</p>
<p>var obj = {<br />
   name: "timer1"<br />
};</p>
<p>var time = new Timer(obj);<br />
&#47;&#47;time.start(1000, function(){ alert(this.name);});<br />
time.repeat(1000, function(){ alert(this.name);});<br />
<&#47;pre></p>
