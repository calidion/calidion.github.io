---
layout: post
status: publish
published: true
title: wordpress 解除与域名的绑定
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 944
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=944
date: !binary |-
  MjAxMC0wNS0wNSAxMToxNDowMCArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wNS0wNSAwMzoxNDowMCArMDgwMA==
categories:
- wordpress
tags:
- wordpress
comments: []
---
<p>http://www.3gcnbeta.com/wordpress 原创内容，谢绝转载。</p>
<p>默认情况下wordpress是与域名绑定的，这个设计有好处，但也给测试带来不必要的麻烦。</p>
<p>比如你安装成localhost时，你要从另外一台机器访问这个wordpress程序用来测试。结果你会发现他无法正常工作。</p>
<p>经过测试，我找到了一个很容易的办法来解决这个问题。</p>
<p>首先跑到设置-》常规选项，</p>
<p>将WordPress 安装地址 (URL)选项设置成一个相对地址：如/wordpress</p>
<p><a rel="attachment wp-att-945" href="http://www.3gcnbeta.com/wordpress/2010/05/05/wordpress-%e8%a7%a3%e9%99%a4%e4%b8%8e%e5%9f%9f%e5%90%8d%e7%9a%84%e7%bb%91%e5%ae%9a/%e6%9c%aa%e5%91%bd%e5%90%8d/"><img class="aligncenter size-full wp-image-945" title="未命名" src="http://www.3gcnbeta.com/wordpress/wp-content/uploads/2010/05/未命名.jpg" alt="" width="535" height="74" /></a></p>
<p>然后到杂项里：</p>
<p>将文件的完整URL地址设置为wp-content/uploads, 如图：</p>
<p><a rel="attachment wp-att-946" href="http://www.3gcnbeta.com/wordpress/2010/05/05/wordpress-%e8%a7%a3%e9%99%a4%e4%b8%8e%e5%9f%9f%e5%90%8d%e7%9a%84%e7%bb%91%e5%ae%9a/%e6%9c%aa%e5%91%bd%e5%90%8d1/"><img class="aligncenter size-full wp-image-946" title="未命名1" src="http://www.3gcnbeta.com/wordpress/wp-content/uploads/2010/05/未命名1.jpg" alt="" width="411" height="176" /></a></p>
<p>这时，不管你用什么方式都可以很好的访问到wordpress的内容。</p>
