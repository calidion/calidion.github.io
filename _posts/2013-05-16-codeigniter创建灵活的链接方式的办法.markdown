---
layout: post
status: publish
published: true
title: Codeigniter创建灵活的链接方式的办法
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1539
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1539
date: !binary |-
  MjAxMy0wNS0xNiAxMTozNjowNSArMDgwMA==
date_gmt: !binary |-
  MjAxMy0wNS0xNiAwMzozNjowNSArMDgwMA==
categories:
- 其它
tags: []
comments: []
---
如何在CI中创建干净的链接地址以方便SEO或者直接使用index.php方便在没有配置rewrite规则的机器上调试呢？

下面我介绍一下我通过实践找到的在apache下面的办法。

1、对于所有的输出地址统一采用site_url("controller/method");这样的生成方式

2、修改config文件里的信息

```php

if ($_SERVER['PHP_SELF'] == $_SERVER['REQUEST_URI']) {

  $config['index_page'] = 'index.php';

} else {

  $config['index_page'] = '';

}

```


3、修改rewrite规则


```conf

<IfModule mod_rewrite.c>

    RewriteEngine On

    RewriteBase /</p>

    RewriteCond %{REQUEST_FILENAME} !-f

    RewriteCond %{REQUEST_FILENAME} !-d

    RewriteRule ^(.*)$ index.php?/$1 [L]

</IfModule>

````

基本上完成以上的布置就可以在多个配置下灵活的切换，而不会产生问题了。
