---
layout: post
status: publish
published: true
title: ie6/ie7下的inline-block经典bug的解决
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 285
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=285
date: !binary |-
  MjAxMC0wMS0yNiAxOTo0MTowMCArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAxMTo0MTowMCArMDgwMA==
categories:
- WEB开发
tags:
- IE6
- IE7
- inline-block
comments: []
---
<p>1.先定义元素为<br />
#id {<br />
display: inline-block;<br />
}<br />
2.然后再定义他为<br />
#id<br />
{<br />
*display: inline;<br />
}<br />
这样IE6/IE7下的效果就是真正的inline-block了.</p>
<p>注:有时候如果在FireFox上对于所定义的块还有其它的要求的话,你可以加上红色的小点.<br />
这个小点只有IE系的浏览器能识别出来.并且不会影响到其它非IE浏览器对DOM元素的属性的修改.</p>
<p>3.对于低版本的FF,我们可以使用-moz-inline-stack</p>
<p>4.所以总共加起来就是下面这样:<br />
#id<br />
{<br />
    display: -moz-inline-stack; /*Firefox only code*/<br />
    display: inline-block;       /*some standard browsers*/<br />
    zoom: 1;                     /*IE only*/<br />
    *display: inline;            /*Only IE know this code (CSS Hack)*/<br />
}</p>
<p>注:已经将原来的//的注释修改成了/* */.</p>
