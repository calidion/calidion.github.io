---
layout: post
status: publish
published: true
title: google maps api KEY报错的原因分析与解决
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 306
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=306
date: !binary |-
  MjAxMC0wMS0yNiAyMDowNjowNiArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAxMjowNjowNiArMDgwMA==
categories:
- WEB开发
tags:
- Google Maps API
comments: []
---
<p>如果默认将google产生的api key的javascript代码复制出来， 将可能产生&ldquo;google地图服务器API服务器拒绝了你的请求，原因，本站所用的API密钥已经由另一网站抢注。&rdquo; 的错误提示。 </p>
<p>原因是确认是sensor的设置不正确。<br />
下面我把sensor的一些情况介绍一下。 sensor这个参数是新版本的API添加的功能。 旧版本的暂时没有影响。 但是新申请的还是必须要添加的。<br />
senor主要用于表明网站是不是采用包含了一些定位的硬件设备，如GPS，WIFI，手机的Cell ID来定位。 目前适用于javascript 版本的地图API与静态地图API。flash版本的暂不提供。<br />
请注意，由于最近才引入传感器参数，因此之前存在的网站不会因无法定义参数而被禁用。但是要求开发人员尽快开始报告参数。</p>
<p>所以将原来的sensor=true_or_false按下面的情况进行修改：<br />
1）如果是普通网站:sensor=false<br />
2）如果是浏览的用户带有定位功能的网站:sensor=true（如专门为IPHONE的GPS功能开发的网站)</p>
<p>直接复制注册api时生成的javascript脚本代码时需要注意这个问题。<br />
因为目前生成的脚本代码对于sensor的设置是不正确的，同时javascript的错误提示也不太对。<br />
不方便找到原因。希望这篇博客能帮你解决问题。</p>
<p>避免产生错误的方法<br />
主要的是检查得到的默认javascript代码里是否已经<br />
把里面的sensor=true_or_false修改成sensor=false<br />
其它的一般不会出什么问题。</p>
<p><script src="http://maps.google.com/maps?<br />
file=api&amp;v=2&amp;sensor=true_or_false </p>
<p>&amp;key=ABQIAAAAWiwS8Thr2h3A0aAWbsVr6RRzDPQV0_EvaIz8UiE1dD2H9vB1ZRRZP7faFH Wd1db1q7J71LkydLdwkw"<br />
type="text/javascript"><br />
</script><br />
就是这段自动生成的代码，<br />
他的sensor域的值是true_or_false<br />
这个值是不对的。<br />
原代码也是通过斜体给出来的，意思是选择true或者false里的一个.<br />
但是我们一般是直接复制，没有再修改sensor的值，<br />
所以会出来这个错误。<br />
还有一个问题是google的报错与错误的原因并不一致，<br />
导致很多时候没有让人很方便的找到这个原因。</p>
