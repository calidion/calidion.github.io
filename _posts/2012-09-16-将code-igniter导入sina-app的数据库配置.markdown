---
layout: post
status: publish
published: true
title: 将Code Igniter导入sina app的数据库配置
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1498
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1498
date: !binary |-
  MjAxMi0wOS0xNiAxMjowMToxNyArMDgwMA==
date_gmt: !binary |-
  MjAxMi0wOS0xNiAxMjowMToxNyArMDgwMA==
categories:
- php
tags: []
comments: []
---
<p>这个东西要是没有弄好，还真愁人.</p>
<pre name='code' class="php">
$db['default']['hostname'] = SAE_MYSQL_HOST_M;<br />
$db['default']['username'] = SAE_MYSQL_USER;<br />
$db['default']['password'] = SAE_MYSQL_PASS;<br />
$db['default']['database'] = SAE_MYSQL_DB;<br />
$db['default']['dbdriver'] = 'mysqli';<br />
$db['default']['port'] = SAE_MYSQL_PORT;<br />
$db['default']['pconnect'] = FALSE;<br />
</pre></p>
