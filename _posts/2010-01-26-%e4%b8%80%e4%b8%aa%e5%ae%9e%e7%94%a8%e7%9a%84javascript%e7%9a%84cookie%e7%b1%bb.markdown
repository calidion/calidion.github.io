---
layout: post
status: publish
published: true
title: 一个实用的javascript的Cookie类
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 151
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=151
date: !binary |-
  MjAxMC0wMS0yNiAxNTo0MTo0NCArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwNzo0MTo0NCArMDgwMA==
categories:
- Javascript
tags:
- javascript
comments: []
---
<pre name="code" class="js">
var Cookie = function(name, val, expires, path, domain, secure){<br />
    path = path || null;<br />
    domain = domain || null;<br />
    secure = secure || false;<br />
    function set(key, value){<br />
      var str = key + "=" + escape(value);<br />
      if(expires > 0){<br />
        var date = new Date();<br />
        var ms = expires * 60 * 1000;<br />
        date.setTime(date.getTime() + ms);<br />
        str += ";expires=" + date.toGMTString();<br />
      }<br />
      if(path) str += ";path=" + path;<br />
      if(domain) str += ";domain=" + domain;<br />
      if(secure) str += ";true";<br />
      document.cookie = str;<br />
      return str;<br />
    }<br />
    function get(key){<br />
      key = key || name;<br />
      var strArray = document.cookie.split(';');<br />
      for(var i = 0; i < strArray.length; i++)<br />
      {<br />
        var tmp = strArray[i].split('=');<br />
        if(trim(tmp[0]) == trim(key)){<br />
          return unescape(tmp[1]);<br />
        }<br />
      }<br />
      return "";<br />
    }<br />
    function remove(key){<br />
      var date = new Date();<br />
      var ms = 1000;<br />
      date.setTime(date.getTime() - ms);<br />
      var str = name + "=nothing;expires=" + date.toGMTString();<br />
      document.cookie = str;<br />
    }<br />
    function setExt(key, value){<br />
      switch(key){<br />
        case 'path':<br />
          path = value;<br />
          break;<br />
        case 'domain':<br />
          domain = value;<br />
          break;<br />
        case 'secure':<br />
          secure = value;<br />
          break;<br />
        case 'expires':<br />
          expires = value;<br />
          break;<br />
        default:<br />
          set(key, value);<br />
          break;<br />
      }<br />
    }<br />
    return {<br />
      get: get,<br />
      set: setExt,<br />
      remove: remove<br />
    }<br />
}<br />
<&#47;pre><br />
调用方法：</p>
<pre name="code" class="js">
<p>var cookieName = 'my_cookie';<br />
var cookie = Cookie(cookieName, 1);<br />
cookie.set(cookieName, 1);<br />
cookie.remove(cookieName);<br />
cookie.get(cookieName)</p>
<p><&#47;pre></p>
