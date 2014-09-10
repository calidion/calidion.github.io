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
```javascript

var Cookie = function(name, val, expires, path, domain, secure){

    path = path || null;

    domain = domain || null;

    secure = secure || false;

    function set(key, value){

      var str = key + "=" + escape(value);

      if(expires > 0){

        var date = new Date();

        var ms = expires * 60 * 1000;

        date.setTime(date.getTime() + ms);

        str += ";expires=" + date.toGMTString();

      }

      if(path) str += ";path=" + path;

      if(domain) str += ";domain=" + domain;

      if(secure) str += ";true";

      document.cookie = str;

      return str;

    }

    function get(key){

      key = key || name;

      var strArray = document.cookie.split(';');

      for(var i = 0; i < strArray.length; i++)

      {

        var tmp = strArray[i].split('=');

        if(trim(tmp[0]) == trim(key)){

          return unescape(tmp[1]);

        }

      }

      return "";

    }

    function remove(key){

      var date = new Date();

      var ms = 1000;

      date.setTime(date.getTime() - ms);

      var str = name + "=nothing;expires=" + date.toGMTString();

      document.cookie = str;

    }

    function setExt(key, value){

      switch(key){

        case 'path':

          path = value;

          break;

        case 'domain':

          domain = value;

          break;

        case 'secure':

          secure = value;

          break;

        case 'expires':

          expires = value;

          break;

        default:

          set(key, value);

          break;

      }

    }

    return {

      get: get,

      set: setExt,

      remove: remove

    }

}

```

调用方法：

```

var cookieName = 'my_cookie';

var cookie = Cookie(cookieName, 1);

cookie.set(cookieName, 1);

cookie.remove(cookieName);

cookie.get(cookieName)

```