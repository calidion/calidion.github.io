---
layout: post
status: publish
published: true
title: 在Ubuntu 9.04下安装stardict字典
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 249
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=249
date: !binary |-
  MjAxMC0wMS0yNiAxNzo0NTowOSArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwOTo0NTowOSArMDgwMA==
categories:
- Ubuntu
tags:
- stardict
- Ubuntu
comments: []
---
<p>1.sudo apt-get install stardict<br />
3.<br />
wget http://219.239.26.10/download/789555/820211/1/bz2/152/13/1252567657112_781/stardict-oxford-gb-2.4.2.tar.bz2<br />
wget http://219.239.26.10/download/930887/971907/2/bz2/117/150/1253579520629_406/stardict-langdao-ec-gb-2.4.2.tar.bz2</p>
<p>tar -xvjf stardict-oxford-gb-2.4.2.tar.bz2<br />
tar -xvjf stardict-langdao-ec-gb-2.4.2.tar.bz2<br />
4. mkdir ~/.stardict ~/.stardict/dic<br />
5. cp stardict-oxford-gb-2.4.2/* ~/.stardict/dic<br />
6. cp stardict-langdao-ec-gb-2.4.2/* ~/.stardict/dic<br />
7. stardict &<br />
这样就可以在离线是查找单词了。<br />
更多字典可以自已下载。</p>
<p>如果想保持系统的文件的干净,可以将多出来的文件与目录删除.<br />
8. 然后删除安装目录:<br />
 rm -rf stardict-oxford-gb-2.4.2/<br />
 rm -rf stardict-langdao-ec-gb-2.4.2/<br />
9. 如果想删除下载的文件,可以直接执行下面的代码:<br />
 rm -rf stardict-*</p>
