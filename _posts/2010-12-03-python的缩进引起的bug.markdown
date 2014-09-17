---
layout: post
status: publish
published: true
title: Python的缩进引起的BUG
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1415
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1415
date: !binary |-
  MjAxMC0xMi0wMyAxNDo1Nzo0OSArMDgwMA==
date_gmt: !binary |-
  MjAxMC0xMi0wMyAwNjo1Nzo0OSArMDgwMA==
categories:
- Python
tags: []
comments: []
---
<pre name="code" class="py">
      if module == 'modify':<br />
        user = self.getUser()<br />
        temp = {<br />
        'name': user.username,<br />
        'contact': user.contact,<br />
        'email': user.email,<br />
        'intro': user.intro<br />
      }<br />
      self.display('user_modify.html', temp)<br />
      return<br />
<&#47;pre><br />
当我把 temp的}向外移动两格后，后面添加的两行竟然同样可以执行。<br />
导致了一些莫名其妙的结果。。<br />
而这个if又是写在最后的。<br />
python的缩进，永远的话题!</p>
