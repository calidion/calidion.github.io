---
layout: post
status: publish
published: true
title: nodejs发送HTTS请求
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1755
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1755
date: !binary |-
  MjAxNC0wNi0yMyAxNDowMjozOCArMDgwMA==
date_gmt: !binary |-
  MjAxNC0wNi0yMyAwNjowMjozOCArMDgwMA==
categories:
- WEB服务器技术
- nodejs
tags: []
comments: []
---
nodejs的https请求如何不加以配置会出来很多错误。

下面是经过测试的一段nodejs发送HTTPS请求的代码，主要是要注意Options里的几个参数的内容。

```javascript
    var data = {

    };

    var options = {

      host: serverHost,

      port: serverPort,

      method: 'POST',

      path: "/",

      headers: {

      },

      rejectUnauthorized: false,

      requestCert: true,

      agent: false,

      secureProtocol: 'SSLv3_method'

    };

    var https = require('https');

    var req = https.request(options, function (res) {

      console.log("init request");

      console.log(res.statusCode);

      res.on('data', function (data) {

        try {

          console.log(data);

        } catch(e) {

          console.log(e)

        }

      });

    });

    req.write(JSON.stringify(data));

    req.end();

    req.on('error', function (e) {

      console.error(e);

    });
```