---
layout: post
status: publish
published: true
title: javascript 提示的对话框
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 141
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=141
date: !binary |-
  MjAxMC0wMS0yNiAxNTozMzo1NCArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwNzozMzo1NCArMDgwMA==
categories:
- Javascript
tags:
- javascript
comments: []
---
<pre name="code" class="js">
var iMsgBox = function(msg, dom){<br />
    var mask = document.createElement('div');<br />
    var pop = document.createElement('div');<br />
    var message = document.createElement('h4');<br />
    dom = dom || document.body;<br />
    message.innerHTML = msg;<br />
    var timed = false;<br />
    var closed = false;<br />
    var close = function(){<br />
      closed = true;<br />
      if(!timed) return;<br />
      dom.removeChild(mask);<br />
      dom.removeChild(pop);<br />
    }<br />
    var timeClose = function(){<br />
      timed = true;<br />
      if(closed) close();<br />
    };<br />
    setTimeout(timeClose, 1500);<br />
    pop.appendChild(message);<br />
    dom.appendChild(mask);<br />
    dom.appendChild(pop);<br />
    mask.style.cssText = 'position:absolute;background:#000;opacity:0.3;width:100%;*filter: Alpha(Opacity=30);top:0;left:0;z-index:10000';<br />
    mask.style.display = 'block';<br />
    mask.style.height = dom.clientHeight + dom.scrollTop+ 'px';<br />
    dom.style.overflow = 'hidden';<br />
    pop.style.cssText = 'position:absolute;width:200;padding:8px 20px;background:#fff;border:0px solid #ccc;text-align:center;z-index:10001;';<br />
    pop.style.display = 'block';<br />
    pop.style.left = dom.offsetWidth &#47; 2 - pop.offsetWidth &#47; 2 + 'px';<br />
    pop.style.top = dom.offsetHeight &#47; 2 - pop.offsetHeight &#47; 2 + 'px';<br />
    return {<br />
      close: close<br />
    };<br />
}<br />
<&#47;pre></p>
