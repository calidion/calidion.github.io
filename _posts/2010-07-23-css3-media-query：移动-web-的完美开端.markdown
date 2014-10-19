---
layout: post
status: publish
published: true
title: CSS3 Media Query：移动 Web 的完美开端
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1255
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1255
date: !binary |-
  MjAxMC0wNy0yMyAxNjoyMToyMCArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wNy0yMyAwODoyMToyMCArMDgwMA==
categories:
- 新闻
tags: []
comments: []
---
<p>新闻来源:smashingmagazine.com<br />
移动时代，是任何 Web 设计与开发者都不能忽视的一个时代，总有一天，你设计的东西将被显示在两种屏幕上，桌面大屏幕和移动小屏幕，如何让同一个网站同时适应完全不同的两种尺寸 的屏幕，这是一个很久以来都没有完美解决方案的问题，直到有了 CSS3。</p>
<p>CSS3 的 Media Queries<br />
在 CSS2 时代，如果你曾经为你的网站设计过打印版 CSS，就会明白 CSS3 Media Queries 的作用，不过，CSS3 的 Media Queries 比 CSS2 的 Media Type 更实用，事实上，CSS2 的 Media Type 并不曾被多少设备所支持过。CSS3 的 Media Queries 可以帮你获取以下数据：</p>
<p>浏览器窗口的宽和高<br />
设备的宽和高<br />
设备的手持方向，横向还是竖向<br />
分辨率<br />
如果用户有一个支持 Media Queries 的设备，我们就可以为该设备编写专门的 CSS，让网站适应这个设备的小屏幕，英国的 Web 技术大会 dConstruct 便基于该技术推出他们的 2010 年大会网站，手机也可以轻松访问，以下是该网站的桌面版和手机版截图：</p>
<p><a href="http://media.smashingmagazine.com/cdn_smash/wp-content/uploads/2010/06/dconstruct-desktop-crop.jpg"><img src="http://media.smashingmagazine.com/cdn_smash/wp-content/uploads/2010/06/dconstruct-desktop-crop.jpg" alt="Dconstruct-desktop-crop in How To Use CSS3 Media Queries To Create  a Mobile Version of Your Website" width="480" height="350" /></a></p>
<p><a href="http://media.smashingmagazine.com/cdn_smash/wp-content/uploads/2010/06/dconstruct-iphone.jpg"><img src="http://media.smashingmagazine.com/cdn_smash/wp-content/uploads/2010/06/dconstruct-iphone.jpg" alt="Dconstruct-iphone in How To Use CSS3 Media Queries To Create a  Mobile Version of Your Website" width="320" height="480" /></a></p>
<p>这个网站在不同尺寸的设备上按不同的布局显示，并且，手机版在 iPhone，Opera Mini， Android 等设备上有完全一致的表现。</p>
<p>使用 Media Queries 为手机创建单独的 CSS<br />
我们举一个简单的两栏式结构的例子。</p>
<p><a href="http://media.smashingmagazine.com/cdn_smash/wp-content/uploads/2010/06/example-browser-crop.jpg"><img src="http://media.smashingmagazine.com/cdn_smash/wp-content/uploads/2010/06/example-browser-crop.jpg" alt="Example-browser-crop in How To Use CSS3 Media Queries To Create a  Mobile Version of Your Website" width="480" height="305" /></a></p>
<p>为了让这个布局更好地在手机上显示，我们为手机版设计一个一栏式布局，且缩小 header 部分的图片大小。</p>
<p>使用 Media Queries 最直接的方法是，在你的 CSS 代码中，加一段独立代码分支，如下：</p>
<pre class="css"  name="code">@media only screen and (max-device-width: 480px) {</p>
<p>}<br />
@media only screen and (max-device-width: 480px) {</p>
<p>}</pre><br />
接着，在这个分支中，为小屏幕编写独立的 CSS 定义，这些定义可以覆盖桌面版 CSS 中的相应定义（只要将这段分支代码放在后面），以下针对小屏幕的 CSS 将布局变成一栏式，且使用了小尺寸的 Header 图片：</p>
<pre class="css" name="code">@media only screen and (max-device-width: 480px) {<br />
div#wrapper {<br />
width: 400px;<br />
}</p>
<p>div#header {<br />
background-image: url(media-queries-phone.jpg);<br />
height: 93px;<br />
position: relative;<br />
}</p>
<p>div#header h1 {<br />
font-size: 140%;<br />
}</p>
<p>#content {<br />
float: none;<br />
width: 100%;<br />
}</p>
<p>#navigation {<br />
float:none;<br />
width: auto;<br />
}<br />
}<br />
@media only screen and (max-device-width: 480px) {<br />
div#wrapper {<br />
width: 400px;<br />
}</p>
<p>div#header {<br />
background-image: url(media-queries-phone.jpg);<br />
height: 93px;<br />
position: relative;<br />
}</p>
<p>div#header h1 {<br />
font-size: 140%;<br />
}</p>
<p>#content {<br />
float: none;<br />
width: 100%;<br />
}</p>
<p>#navigation {<br />
float:none;<br />
width: auto;<br />
}<br />
}</pre><br />
最终，我们在小屏幕设备上得到了如下显示效果：</p>
<p><a href="http://media.smashingmagazine.com/cdn_smash/wp-content/uploads/2010/06/example-phone.jpg"><img src="http://media.smashingmagazine.com/cdn_smash/wp-content/uploads/2010/06/example-phone.jpg" alt="Example-phone in How To Use CSS3 Media Queries To Create a Mobile  Version of Your Website" width="320" height="480" /></a></p>
<p>使用 Media Queries 链接单独的 CSS 文件<br />
对于小型的改动，直接在 CSS 代码中插入移动设备代码分支是很方便的，但对于大型站点，可以使用 Media Queries 链接独立的式样表文件，以便在独立的式样表文件中完全自由地为小设备编写 CSS 代码，方法如下：</p>
<p>测试 Media Queries<br />
要在不同设备上测试 Media Queries 并非易事，你要有各种设备，还要将代码上传到某个主机进行访问测试。这里有一个在线服务，ProtoFluid， 该服务允许你提供你要测试的网站的 URL，或者你本机上的 URL，然后，模拟 iPhone 等移动设备显示你的设计，下图是上文中提到的 dConstruct 网站在 ProtoFluid 的 iPhone 模拟中显示的样子。你也可以填写你自己的窗口尺寸，来模拟特定的设备。</p>
<p><a href="http://media.smashingmagazine.com/cdn_smash/wp-content/uploads/2010/06/dconstruct-protofluid-crop.jpg"><img src="http://media.smashingmagazine.com/cdn_smash/wp-content/uploads/2010/06/dconstruct-protofluid-crop.jpg" alt="Dconstruct-protofluid-crop in How To Use CSS3 Media Queries To  Create a Mobile Version of Your Website" width="480" height="350" /></a></p>
<p>在 ProtoFluid 使用 Media Queries，你需要同时加上 max-width 和 max-device-width 属性，这意味着，Media Queires 不仅可以针对不同的移动设备，还可以针对桌面系统中某些人为的小窗口情形。</p>
<pre class="css"  name="code">@media only screen and (max-width: 480px), only screen and (max-device-width: 480px) {</p>
<p>}<br />
@media only screen and (max-width: 480px), only screen and (max-device-width: 480px) {</p>
<p>}</pre></p>
<p>使用上面的代码，在桌面浏览器上，当你改变窗口尺寸到达 480 像素的时候，就会看到布局的改变。需要注意的是，上面的 max-width 部分仅仅为了测试，如果你不希望用户在桌面浏览器中因为改变了窗口大小而导致你的布局改变，可以去掉 max-width 部分，而只针对那些移动设备。</p>
<p>对现有网站的整改<br />
上面的例子为了说明问题起见都很简单，现实中的站点不可能这样，下面的例子，作者将使用他自己的公司网站，说明如何使用 Media Queries 对现有网站进行移动化整改。</p>
<p>桌面布局</p>
<p>作者自己的网站是几年前设计的，那是还没有考虑 Media Queries 问题，这是一个三栏式布局。</p>
<p><a href="http://media.smashingmagazine.com/cdn_smash/wp-content/uploads/2010/06/edgeofmyseat-browser-crop.jpg"><img src="http://media.smashingmagazine.com/cdn_smash/wp-content/uploads/2010/06/edgeofmyseat-browser-crop.jpg" alt="Edgeofmyseat-browser-crop in How To Use CSS3 Media Queries To  Create a Mobile Version of Your Website" width="480" height="350" /></a></p>
<p><strong>增加新的式样表</strong></p>
<p>为了适应移动设备，将使用 Media Queries 加载独立的式样表：</p>
<p>作者的做法是，将他站点中原来的 CSS 文件另存为 small-device.css ，在这个基础上针对移动设备进行整改。</p>
<p>压缩 Header 部分</p>
<p>第一步是让 Logo 部分能在小屏幕上显示，因为这个 Logo 是基于背景图片的，因此很好办，同时，提供一个小尺寸的背景图，以便和 Logo 搭配。</p>
<pre class="css"  name="code">body {<br />
background-image: url(/img/small-bg.png);<br />
}</p>
<p>#wrapper {<br />
width: auto;<br />
margin: auto;<br />
text-align: left;<br />
background-image: url(/img/small-logo.png);<br />
background-position: left 5px;<br />
background-repeat: no-repeat;<br />
min-height: 400px;<br />
}<br />
body {<br />
background-image: url(/img/small-bg.png);<br />
}</p>
<p>#wrapper {<br />
width: auto;<br />
margin: auto;<br />
text-align: left;<br />
background-image: url(/img/small-logo.png);<br />
background-position: left 5px;<br />
background-repeat: no-repeat;<br />
min-height: 400px;<br />
}</pre><br />
单列式布局</p>
<p>下一步主要的工作是将多栏式布局换成单栏式，桌面版使用 Float 实现多栏布局，要改成单栏，只需将 float 设置为 float:none，并将 width 设置为 width:auto，这样，就实现了单列式布局。</p>
<pre class="css"  name="code">.article #aside {<br />
float: none;<br />
width: auto;<br />
}<br />
.article #aside {<br />
float: none;<br />
width: auto;<br />
}</pre><br />
再紧凑一些</p>
<p>然后，将margin 和 padding 进行调整，使之更紧凑一些：</p>
<p><a href="http://media.smashingmagazine.com/cdn_smash/wp-content/uploads/2010/06/edgeofmyseat-protofluid-crop.jpg"><img src="http://media.smashingmagazine.com/cdn_smash/wp-content/uploads/2010/06/edgeofmyseat-protofluid-crop.jpg" alt="Edgeofmyseat-protofluid-crop in How To Use CSS3 Media Queries To  Create a Mobile Version of Your Website" width="480" height="350" /></a></p>
<p>在 iPhone 中测试</p>
<p>在 iPhone 中实际测试的时候，发现网站在单列式布局中仍然向外延伸了，从 Safari developer website 找到解决办法，在网站头，添加一个 meta tag，将网站的视窗宽度设置成何设备一致。</p>
<pre class="html" name="code">
<meta name="viewport" content="width=device-width" /><br />
<meta name="viewport" content="width=device-width" /><br />
</pre></p>
<div>
<pre><img src="http://media.smashingmagazine.com/cdn_smash/wp-content/uploads/2010/06/edgeofmyseat-phone.png" alt="Edgeofmyseat-phone in How To Use CSS3 Media Queries To Create a  Mobile Version of Your Website" /></pre><br />
</div><br />
更多资源<br />
后移动时代的 Web 设计<br />
A List Apart &ndash; Responsive Web Design （ALA - 反应灵敏的 Web 设计）<br />
Apple &ndash; Safari Web Content Guide （Apple - Safari Web 内容指引）<br />
Sitepoint CSS Reference &ndash; Media Queries （SitePoint 的 CSS 参考手册 - Media Queries）<br />
Targeting the iPhone 4 Retina Display with CSS3 Media Queries  （使用 CSS3 Media Queries 实现面向 iPhone 4 高精细显示屏的设计）<br />
Aral Balkan: How to make your web content look stunning on the iPhone 4&rsquo;s new Retina Display（Aral Balkan：如何让你的 Web 内容在 iPhone 4 的高精细屏上更好地显示）<br />
Stuff and Nonsense: Proportional leading with CSS3 Media Queries （使用 CSS3 Media Queries 实现按比例行间距）<br />
Matthew James Taylor: iPad layout with landscape and portrait modes （iPad 的水平和垂直布局模式）<br />
在旧浏览器上支持 Media Queries<br />
如果你面向的访问者是 iPhone， Opera Mini 等移动设备，这没有问题，对于那些不支持 Media Queries 的浏览器（像 IE6/7/8），以下文章或许对你有帮助。</p>
<p>Media Queries section on When Can I Use, showing which browsers have support （Media Queries 的浏览器支持情况）<br />
Media Queries jQuery plugin (only deals with max/min width) （Media Queries jQuery 插件）<br />
css3-mediaqueries-js &ndash; a library that aims to add media query support to non-supporting browsers（在不支持 Media Queries 的浏览器中实现对 Media Queries 的支持）<br />
更多示例<br />
Jon Hicks 在 Hicksdesign 基于 Media Queries 实现了非常好的浏览体验，不仅针对移动设备，还面向那些拥有小屏幕的桌面系统。另外，还可以看看 Simon Collison&rsquo;s website 以及 Ed Merritt&rsquo;s portfolio 这些网站中对这种技术的运用。</p>
<p>本文作者</p>
<p>Rachel Andrew</p>
<p>Rachel Andrew 是一名 Web 前端设计师与后端开发者，是一家英国 Web 开发顾问公司 edgeofmyseat.com 的主管，她还是一款小型 CMS 系统 Perch 的设计者。她写过多本 Web 开发与设计相关的书，包括由 SitePoint 出版的 CSS Anthology: 101 Essential Tips, Tricks and Hacks，她的个人博客是 rachelandrew.co.uk。</p>
<p>本文国际来源：Smashing Magazine How To Use CSS3 Media Queries To Create a Mobile Version of Your Website</p>
<p>中文翻译来源：锐商企业CMS 网站内容管理系统 官方网站</p>
