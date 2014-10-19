---
layout: post
status: publish
published: true
title: 那些相见恨晚的 JavaScript 技巧
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 763
wordpress_url: http://3gcnbeta.ap01.aws.af.cm/wordpress/?p=763
date: !binary |-
  MjAxMC0wNC0yNSAwMDowNjowMSArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wNC0yNCAxNjowNjowMSArMDgwMA==
categories:
- WEB开发
tags: []
comments: []
---
<p>新闻来源:Smashing Magazine<br /><br />
JavaScript 的成功让人津津乐道，为 Web 网页编写 JavaScript 代码已经是所有 Web 设计师的基本功，这门有趣的语言蕴藏着许多不为人熟知的东西，即使多年的 JavaScript 程序员，也未能完全吃透。本文从7个方面讲述 JavaScript 中那些你不很熟知但非常实用的技巧。</p></p>
<p>简略语句<br /><br />
<strong>JavaScript 可以使用简略语句快速创建对象和数组，比如下面的代码：</strong></p></p>
<p><img src="http://www.comsharp.com/Writable/Resource/_Random_/2010-04-24/p1.gif" alt="" /></p></p>
<p>可以使用简略语句如下：</p></p>
<p><img src="http://www.comsharp.com/Writable/Resource/_Random_/2010-04-24/p2.gif" alt="" /></p></p>
<p>对象 car 就此创建，不过需要特别注意，结束花括号前一定不要加 ";" 否则在 IE 会遇到很大麻烦。</p></p>
<p><strong>创建数组的传统方法是：</strong></p></p>
<p><img src="http://www.comsharp.com/Writable/Resource/_Random_/2010-04-24/p3.gif" alt="" /></p></p>
<p>使用简略语句则：</p></p>
<p><img src="http://www.comsharp.com/Writable/Resource/_Random_/2010-04-24/p4.gif" alt="" /></p></p>
<p><strong>另一个可以使用简略语句的地方是条件判断语句：</strong></p></p>
<p><strong><img src="http://www.comsharp.com/Writable/Resource/_Random_/2010-04-24/p5.gif" alt="" /><br /><br />
</strong></p></p>
<p>可以简略为：</p></p>
<p><img src="http://www.comsharp.com/Writable/Resource/_Random_/2010-04-24/p6.gif" alt="" /><br /><br />
JSON 数据格式<br /><br />
<a href="http://json.org/">JSON</a> 是 "JavaScript Object Notation" 的缩写，由 Douglas Crockford 设计，JSON 改变了 JavaScript 在缓存复杂数据格式方面的困境，如下例，假如你要描述一个乐队，可以这样写：</p></p>
<p><img src="http://www.comsharp.com/Writable/Resource/_Random_/2010-04-24/p8.gif" alt="" /></p></p>
<p>你可以在 JavaScript 中直接使用 JSON，甚至作为某些 API 的返回数据对象，以下代码调用著名书签网站&nbsp;<a href="http://delicious.com/">delicious.com</a> 的一个 API，返回你在该网站的所有书签，并显示在你自己的网站：</p></p>
<p><img src="http://www.comsharp.com/Writable/Resource/_Random_/2010-04-24/p9.gif" alt="" /><br /><br />
JavaScript 本地函数 (Math, Array 和 String)<br /><br />
JavaScript 有很多内置函数，有效的使用，可以避免很多不必要的代码，比如，从一个数组中找出最大值，传统的方法是：</p></p>
<p><img src="http://www.comsharp.com/Writable/Resource/_Random_/2010-04-24/p10.gif" alt="" /></p></p>
<p>使用内置函数可以更容易实现：</p></p>
<p><img src="http://www.comsharp.com/Writable/Resource/_Random_/2010-04-24/p11.gif" alt="" /></p></p>
<p>另一个方法是使用 Math.max() 方法：</p></p>
<p><img src="http://www.comsharp.com/Writable/Resource/_Random_/2010-04-24/p12.gif" alt="" /></p></p>
<p>你可以用这个方法帮助探测浏览器</p></p>
<p><img src="http://www.comsharp.com/Writable/Resource/_Random_/2010-04-24/p13.gif" alt="" /></p></p>
<p>这解决了 IE 浏览器的一个问题，通过这种方法，你总是可以找到那个正确的值，因为浏览器不支持的那个值会返回 undefined。</p></p>
<p>还可以使用 JavaScript 内置的 split() 和 join() 函数处理 HTML 对象的 CSS 类名，如果 HTML 对象的类名是空格隔开的多个名字，你在为它追加或删除一个 CSS 类名的时候需要特别注意，如果该对象还没有类名属性，可以直接将新的类名赋予它，如果已经存在类名，新增的类名前必须有一个空格，用传统的 JavaScript 方法是这样实现的：</p></p>
<p><img src="http://www.comsharp.com/Writable/Resource/_Random_/2010-04-24/p14.gif" alt="" /></p></p>
<p>使用 split 和 join 方法则直观优雅得多：</p></p>
<p><img src="http://www.comsharp.com/Writable/Resource/_Random_/2010-04-24/p15.gif" alt="" /><br /><br />
事件代理<br /><br />
与其在 HTML 文档中设计一堆事件，不如直接设计一个事件代理，举例说明，假如你有一些链接，用户点击后不想打开链接，而是执行某个事件，HTML 代码如下：</p></p>
<p><img src="http://www.comsharp.com/Writable/Resource/_Random_/2010-04-24/p16.gif" alt="" /></p></p>
<p>传统的事件处理是遍历各个链接，加上各自的事件处理：</p></p>
<p><img src="http://www.comsharp.com/Writable/Resource/_Random_/2010-04-24/p17.gif" alt="" /></p></p>
<p>使用事件代理，可以直接处理，无需遍历：</p></p>
<p><img src="http://www.comsharp.com/Writable/Resource/_Random_/2010-04-24/p18.gif" alt="" /><br /><br />
匿名函数与 Module 模式<br /><br />
JavaScript 的一个问题是，任何变量，函数或是对象，除非是在某个函数内部定义，否则，就是全局的，意味着同一网页的别的代码可以访问并改写这个变量（<a href="http://www.comsharp.com/GetKnowledge/zh-CN/It_News_K875.aspx">ECMA 的 JavaScript 5 已经改变了这一状况</a> - 译者），使用匿名函数，你可以绕过这一问题。</p></p>
<p>比如，你有这样一段代码，很显然，变量 name, age, status 将成为全局变量</p></p>
<p><img src="http://www.comsharp.com/Writable/Resource/_Random_/2010-04-24/p19.gif" alt="" /></p></p>
<p>为了避免这一问题，你可以使用匿名函数：</p></p>
<p><img src="http://www.comsharp.com/Writable/Resource/_Random_/2010-04-24/p20.gif" alt="" /></p></p>
<p>如果这个函数不会被调用，可以更直接为：</p></p>
<p><img src="http://www.comsharp.com/Writable/Resource/_Random_/2010-04-24/p21.gif" alt="" /></p></p>
<p>如果要访问其中的对象或函数，可以：</p></p>
<p><img src="http://www.comsharp.com/Writable/Resource/_Random_/2010-04-24/p22.gif" alt="" /></p></p>
<p>这就是所谓 Module 模式或单例模式（Singleton），该模式为 Douglas Crockford 所推崇，并被大量应用在&nbsp;<a href="http://developer.yahoo.com/yui">Yahoo User Interface Library YUI</a>。</p></p>
<p>假如你想在别的地方调用里面的方法，又不想在调用前使用 myApplication 这个对象名，可以在匿名函数中返回这些方法，甚至用简称返回：</p></p>
<p><img src="http://www.comsharp.com/Writable/Resource/_Random_/2010-04-24/p23.gif" alt="" /><br /><br />
代码配置<br /><br />
别人使用你编写的 JavaScript 代码的时候，难免会更改某些代码，但这会很困难，因为不是每个人都很容易读懂别人的代码，与其这样，不如创建一个代码配置对象，别人只需要在这个对象中更改某些配置即可实现代码的更改。这里有一篇&nbsp;<a href="http://www.wait-till-i.com/2008/05/23/script-configuration/">JavaScript 配置对象详解</a>的文章，简单说：</p></p>
<ul>
<li>在代码中创建一个叫做 configuration 的对象</li>
<li>里面保存所有可以更改的配置，如 CSS ID 和类名，按钮的标签文字，描述性文字，本地化语言设置</li>
<li>将该对象设置为全局对象，以便别人直接访问并改写</li><br />
</ul></p>
<p>你应当在最后一步做这项工作，这里有一个文章，<a href="http://www.wait-till-i.com/2008/02/07/five-things-to-do-to-a-script-before-handing-it-over-to-the-next-developer/">交付代码前的5件事</a>值的参考。<br /><br />
同后台交互<br /><br />
JavaScript 是一门前台语言，你需要别的语言同后台交互，并返回数据，使用 AJAX，你可以让 JavaScript 直接使用同后台的交互，将复杂的数据处理交由后台处理。<br /><br />
JavaScript 框架<br /><br />
自己编写适应各种浏览器的代码是完全浪费时间，应当选择一个 JavaScript 框架，让这些复杂的事情交给框架处理。<br /><br />
更多资源</p></p>
<ul>
<li><a href="http://yuiblog.com/crockford/">Douglas Crockford on JavaScript</a><br /><br />
JavaScript 深度视频教程</li></p>
<li><a href="http://dev.opera.com/articles/wsc/">The Opera Web Standards Curriculum</a><br /><br />
JavaScript 详解</li><br />
</ul></p>
<p>延伸阅读</p></p>
<ul>
<li><a href="http://www.comsharp.com/GetKnowledge/zh-CN/It_News_K902.aspx">有关 JavaScript 的 10 件让人费解的事情</a></li>
<li><a href="http://www.comsharp.com/GetKnowledge/zh-CN/It_News_K869.aspx">新 API 寻求让 JavaScript 操作本地文件</a></li>
<li><a href="http://www.comsharp.com/GetKnowledge/zh-CN/TeamBlogTimothyPage_K804.aspx">让 JavaScript 拯救 HTML5 的离线存储</a></li>
<li><a href="http://www.comsharp.com/GetKnowledge/zh-CN/It_News_K833.aspx">开源项目越来越青睐 JavaScript</a></li>
<li><a href="http://www.comsharp.com/GetKnowledge/zh-CN/TeamBlogTimothyPage_K474.aspx">Javascript 是一个错误吗？</a></li>
<li><a href="http://www.comsharp.com/GetKnowledge/zh-CN/It_News_K463.aspx">Javascript 2 前途尘埃落定</a></li>
<li><a href="http://www.comsharp.com/GetKnowledge/zh-CN/CMS_K866.aspx">Google 排名中的 10 个最著名的 JavaScript 库</a></li>
<li><a href="http://www.comsharp.com/GetKnowledge/zh-CN/It_News_K875.aspx">ECMA 推出 JavaScript 5</a></li><br />
</ul></p>
<p>本文国际来源：Smashing Magazine&nbsp;<a href="http://www.smashingmagazine.com/2010/04/20/seven-javascript-things-i-wish-i-knew-much-earlier-in-my-career/">Seven JavaScript Things I Wish I Knew Much Earlier In My Career</a> （原文作者：<a href="http://www.smashingmagazine.com/author/christian-heilmann/">Christian Heilmann</a>）</p></p>
