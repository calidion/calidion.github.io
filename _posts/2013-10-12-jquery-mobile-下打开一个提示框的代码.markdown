---
layout: post
status: publish
published: true
title: jquery mobile 下打开一个提示框的代码
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1610
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1610
date: !binary |-
  MjAxMy0xMC0xMiAyMTo0MDowOCArMDgwMA==
date_gmt: !binary |-
  MjAxMy0xMC0xMiAxMzo0MDowOCArMDgwMA==
categories:
- Javascript
tags: []
comments: []
---
献给所有跟我一样学习jquery mobile并在api里找不到合适的dialog使用办法的同仁们。

代码如下：

对于1.4.2新版本：

```

function alert(message, time, text) {

  message = message || '';

  time = time ? time * 1000 : 1000;

  text = text || true;

  $.mobile.loading( "show", {

	  text: message,

	  textVisible: true,

	  theme: "z"

	});

  // Do your ajax call and processing here

  setTimeout(function() {

	  $.mobile.loading( "hide" );

  }, time);

}

```

对于1.3.2或者之前的版本：

```

function alert(message, time, text) {

  message = message || '';

  time = time || 1000;

  text = text || true;

  $.mobile.showPageLoadingMsg("b", message, text);</p>

  // Do your ajax call and processing here

  setTimeout(function() {

    $.mobile.hidePageLoadingMsg();

  }, time);

}

```