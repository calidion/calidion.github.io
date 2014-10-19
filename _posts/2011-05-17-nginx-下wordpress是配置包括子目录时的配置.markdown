---
layout: post
status: publish
published: true
title: Nginx 下Wordpress是配置,包括子目录时的配置
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1462
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1462
date: !binary |-
  MjAxMS0wNS0xNyAxNDowNDozNyArMDgwMA==
date_gmt: !binary |-
  MjAxMS0wNS0xNyAwNjowNDozNyArMDgwMA==
categories:
- wordpress
tags:
- nginx
- Woredpress
comments: []
---
<p>在你的其他配置项基础之上还需要添加下面的代码:</p>
<p>server {</p>
<p>#用于管理界面的处理<br />
rewrite /wp-admin$ $scheme://$host$uri/ permanent;</p>
<p>location / {</p>
<p>#/wordpress是你的子目录名字,没有子目录就可以不用写<br />
try_files $uri /wordpress$uri/ /wordpress/index.php?q=uri&amp;$args;<br />
}<br />
}</p>
