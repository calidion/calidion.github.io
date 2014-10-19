---
layout: post
status: publish
published: true
title: 用javascript里创建select的通用办法
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 139
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=139
date: !binary |-
  MjAxMC0wMS0yNiAxNTozMjowNyArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwNzozMjowNyArMDgwMA==
categories:
- Javascript
tags:
- javascript
comments: []
---
<p>搜索互联网上，看到的创建select的办法五花八门，但是都认为无法实现firefox与ie的通用创建办法。<br />
我查了一下犀牛书。讲解了一个简单的通用的创建的方法。<br />
我将这个方法抄下来，就成了下面的函数。<br />
只要传进去相应的两个数组，就可以创建出来一个完整的select节点。<br />
其中，<br />
val:<br />
option的可能的值的数组，<br />
name:<br />
显示出来的文字的数组，<br />
def:<br />
默认的val的值。</p>
<pre name="code" class="js">
var createSelect = function(val, name, def){<br />
var select = document.createElement('select');<br />
for(var i = 0; i < val.length; i++){<br />
select.options[select.options.length] = new Option(name[i], val[i], def == val[i], def == val[i]);<br />
}<br />
return select;<br />
}<br />
</pre><br />
示例：</p>
<pre name="code" class="js">
var vals = [1, 2, 3, 4];<br />
var names = ['春&lsquo;， &rsquo;夏', '秋&lsquo;， &rsquo;冬'];<br />
var select = createSelect(vals, names, 1);<br />
document.appendChild(select);<br />
</pre><br />
非常实用的创建select的办法。<br />
绝对简单实用。不搞一些乱七八糟的花样。<br />
一目了解，轻松使用。兼容性倍棒！<br />
显示的兼容性问题不大，<br />
具体在IE6下面有一个javascript的兼容性问题，会导致selectedIndex的值有所不同。<br />
需要注意。</p>
