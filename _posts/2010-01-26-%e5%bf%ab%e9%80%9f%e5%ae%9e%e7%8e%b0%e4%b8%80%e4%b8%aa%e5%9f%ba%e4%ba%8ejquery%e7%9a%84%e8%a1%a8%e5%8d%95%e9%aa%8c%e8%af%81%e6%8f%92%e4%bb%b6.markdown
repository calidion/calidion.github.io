---
layout: post
status: publish
published: true
title: 快速实现一个基于jQuery的表单验证插件
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 56
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=56
date: !binary |-
  MjAxMC0wMS0yNiAxMDo0Mjo0NSArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwMjo0Mjo0NSArMDgwMA==
categories:
- Javascript
tags: []
comments: []
---
<p>这是一个与dom完全无关的表单验证插件。<br />
代码如下:<br />
(function($) {<br />
var patterns = {<br />
number: &#47;d+&#47;,<br />
username: &#47;^[A-Za-z_]+[A-za-z_0-9]*$&#47;,<br />
email: &#47;^w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*$&#47;,<br />
password: &#47;^[x00-x7f]+$&#47;,<br />
url: &#47;.*&#47;,<br />
ascii: &#47;^[x00-x7f]+$&#47;,<br />
string: &#47;.*&#47;,<br />
chinese: &#47;.*&#47;<br />
};</p>
<p>var validator = function(options) {<br />
options['type'] = options['type'] || 'string';<br />
options['maxLength'] = options['maxLength'] || 256;<br />
options['minLength'] = options['minLength'] || 0;<br />
options['null'] = options['null'] || false;<br />
this.options = options;<br />
}<br />
validator.prototype.validate = function(value) {<br />
if (value.length == 0 &amp;&amp; this.options['null']) return true;<br />
if (value.length > this.options['maxLength']) return false;<br />
if (value.length < this.options['minLength']) return false;<br />
return patterns[this.options['type']].test(value);<br />
}<br />
$.extend({<br />
validator: validator<br />
});<br />
})(jQuery);</p>
<p>调用办法<br />
var validator = new $.validator(options)<br />
validator.valid(dom.value);</p>
<p>目前还没有将所有的正则完成。<br />
欢迎提供正则表达式。</p>
