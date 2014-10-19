---
layout: post
status: publish
published: true
title: 在Ubuntu 9.04下使用T43的触摸板 touchpad
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 60
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=60
date: !binary |-
  MjAxMC0wMS0yNiAxMDo0NTo0MyArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwMjo0NTo0MyArMDgwMA==
categories:
- Ubuntu
tags:
- T43
- TrackPoint
- Ubuntu
- 驱动
comments: []
---
<p>步骤<br />
1.创建新文件<br />
de style="white-space: nowrap; color: rgb(73, 89, 136); background-color: white;">sudo gedit /etc/hal/fdi/policy/shmconfig.fdide><br />
2.<br />
在里面添加下面的内容：<br />
<?xml version="1.0" encoding="ISO-8859-1"?><br />
<deviceinfo version="0.2"><br />
 <device><br />
  <match key="input.x11_driver" string="synaptics"><br />
   <merge key="input.x11_options.SHMConfig" type="string">True</merge><br />
  </match><br />
 </device><br />
</deviceinfo></p>
<p>Enabling Touchpad on/off key<br />
Source: [1] The SHMConfig is now controlled through hal. In the past this was done through xorg.conf</p>
<p>You have to add the file</p>
<p>de style="white-space: nowrap; color: rgb(73, 89, 136); background-color: white;">$ sudo gedit /etc/hal/fdi/policy/shmconfig.fdide><br />
with the following content:</p>
<p><?xml version="1.0" encoding="ISO-8859-1"?><br />
<deviceinfo version="0.2"><br />
 <device><br />
  <match key="input.x11_driver" string="synaptics"><br />
   <merge key="input.x11_options.SHMConfig" type="string">True</merge><br />
  </match><br />
 </device><br />
</deviceinfo><br />
After this change please reboot. Restarting hal doesn't help.</p>
<p>Disabling Touchpad while typing<br />
Enable SHMConfig as described above under Enabling Touchpad on/off key and add the command</p>
<p>de style="white-space: nowrap; color: rgb(73, 89, 136); background-color: white;">$ syndaemon -S -dde><br />
under System -> Preferences -> Sessions -> Startup Programs.</p>
