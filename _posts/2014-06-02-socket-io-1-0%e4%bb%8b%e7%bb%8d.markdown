---
layout: post
status: publish
published: true
title: socket.io 1.0介绍
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1719
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1719
date: !binary |-
  MjAxNC0wNi0wMiAwMTozODo0MSArMDgwMA==
date_gmt: !binary |-
  MjAxNC0wNi0wMSAxNzozODo0MSArMDgwMA==
categories:
- 民工翻译
tags: []
comments: []
---
<p>原文：http:&#47;&#47;socket.io&#47;blog&#47;introducing-socket-io-1-0&#47;</p>
<p>Socket.IO的第一个版本在Node.JS出现的不久就出来了。我之前很长时间里都在寻找方便地将数据从服务器端推到客户端的框架，也偿试了很多其它的服务器端的javascript方案。</p>
<p>在那个时候，主要的关注点在于实现一个与WebSocket的API相同的接口，那里的WebSocket正在标准化中并且即将完成的。我很幸运那时收获了很多来自社区（包括Node.JS的创始人）的反馈，这些反馈促进了项目的演进，也使它发生了明显的变化，变的更加好用。</p>
<p>Socket.IO慢慢的就变成了Web上的事件发生器（EventEmitter)。今天我会介绍一下1.0上取得的工作成果并展望一下未来。</p>
<p>Socket.IO 1.0里有不少需要说明的地方，如果你的时间宝贵，你可以选择一些你感兴趣的主题去了解：</p>
<p>新引擎</p>
<p>二进制的支持</p>
<p>自动测试</p>
<p>可规模化(Scalability)</p>
<p>集成</p>
<p>更好的测试</p>
<p>流水化的API（精简，高效）</p>
<p>CDN分发</p>
<p>未来的创新</p>
<p>感谢</p>
<p>#新引擎</p>
<p>Socket.IO的代码已经不再处理传输与浏览器兼容的事情了。那些工作已经并入到我们完善了几个月的新模块Engine.IO里面了，Engine.IO是一套类WebSocket风格的API实现。 这个专门的模块化处理带来的好处不能不提一下：</p>
<p>对于Socket.IO的最终用户来说，没有什么需要改变的。只要换上新的版本就可以。<br />
大量的简化，在代码规模与测试覆盖方面<br />
    Socket.IO的服务端只有1234行代码<br />
    Socket.IO的客户端只有976行代码.<br />
面向未来的灵活性<br />
    如果WebSocket是你想支持的唯一的传输方式，那你直接使用Engine.IO即可（它包括了所有兼容浏览器使用方法），他可以无缝的被替换成WebSocket接口。<br />
    其它方式的传输比如常规的Node.JS的TCP的Socket或者Google Chrome Socket也可以很方便的实现。</p>
<p>这种分离让我们可以不断的改进与完善传输层。在这些改进中，我最喜欢的是引入了一个叫做传输特征检测的想法。</p>
<p>在Web开发上，简单的通过检测用户代理(User Agent)来确定使用什么API或者开启那些功能曾经是相当普遍的。但是随着JavaScript的基础代码变的越来越复杂且成熟，为了得到最大的可靠性，直接测试API来确实行为是否符合预期的方式将会显得越来越合理。</p>
<p>比如简单的检查JSON全局变量是否存在不能保证JSON.stringify就是可以用的，甚至也不能表明它一定存在。很有可能意味着用户定义了一个他们自己的JSON全局变量或者环境里存在着一个已经被破坏的JSON实现。</p>
<p>Socket.IO从不会假设WebSocket一定可以工作，因为在实际中它不能正常工作的机会是很大的。因此，它会首先使用XHR或者JSONP建立一个连接，然后试图升级这个连接到WebSocket上。相比于那些依靠超时来处理失败的方式，这种方式不会让你的用户有体验变差的感觉。</p>
<p>&nbsp;</p>
<p>#二进制的支持</p>
<p>用户们对支持发送二进制数据的能力的要求已经有相当一段时间了，在WebSocket添加了这一个支持之后变的更加明显。</p>
<p>最大的问题在于如果我按WebSocket API的方式来做为我们支持二进制的模型，那么他的可用性将会大大的打折。WebSocket要求你的Socket模式要么是&ldquo;字符模式&rdquo;，要么是&ldquo;二进字模式&rdquo;。</p>
<pre>var socket = new WebSocket('ws:&#47;&#47;localhost');<br />
socket.binaryType = 'arraybuffer';<br />
socket.send(new ArrayBuffer);<&#47;pre><br />
这对于底层的API来说是好的，这也是Engine.IO支持的方式。但是对于应用开发人员来说，很可能他们不想要一个只能发送blob（binary large object &#47; <b>basic large object)&nbsp;<&#47;b>的东西或者每次都要手动将数据转成blob的接口。</p>
<p>所以Socket.IO现在支持在任何数据结构中发送Buffer(来自于Node.JS端), Blob, ArrayBuffer甚至File：</p>
<pre><code>var fs = require('fs');<br />
var io = require('socket.io')(3000);<br />
io.on('connection', function(socket){<br />
  fs.readFile('image.png', function(err, buf){<br />
    &#47;&#47; it's possible to embed binary data<br />
    &#47;&#47; within arbitrarily-complex objects<br />
    socket.emit('image', { image: true, buffer: buf });<br />
  });<br />
});<&#47;code><&#47;pre></p>
<h2><&#47;h2></p>
<h2 id="binary-support"><&#47;h2><br />
为了测试这种特殊的二进制支持究竟有多有用（同时作为一个喜欢将结果可视化的极客），我决定对Twitch Play Pokemon用100%Javascript进行复制的试验。通过使用基于Javascript的gameboy-emulator, node-canvas, socket.io，我们完成了一个甚至能在IE8工作的由服务器渲染的交互游戏。 可以到这里查看 <a href="http:&#47;&#47;weplay.io&#47;">http:&#47;&#47;weplay.io<&#47;a>(<a href="https:&#47;&#47;github.com&#47;guille&#47;weplay">源码在这里<&#47;a>)</p>
<p><video id="weplay-vid" width="100%" height="240" data-setup="{"autoplay":true,"loop":true, "techOrder": ["html5", "flash"], "height": 300}" class="video-js vjs-default-skin" autoplay="autoplay" loop="loop" poster="https:&#47;&#47;i.cloudup.com&#47;aNZqxnZzHv.png"><source src="https:&#47;&#47;i.cloudup.com&#47;transcoded&#47;KL-0r-E2Gj.mp4" type="video&#47;mp4" &#47;><object id="weplay-vid" width="100%" height="240" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http:&#47;&#47;download.macromedia.com&#47;pub&#47;shockwave&#47;cabs&#47;flash&#47;swflash.cab#version=6,0,40,0"><param name="src" value="http:&#47;&#47;www.3gcnbeta.com&#47;wordpress&#47;wp-includes&#47;js&#47;tinymce&#47;plugins&#47;media&#47;moxieplayer.swf" &#47;><param name="flashvars" value="url=https%3A&#47;&#47;i.cloudup.com&#47;transcoded&#47;KL-0r-E2Gj.mp4&amp;poster=https%3A&#47;&#47;i.cloudup.com&#47;aNZqxnZzHv.png" &#47;><param name="allowfullscreen" value="true" &#47;><param name="allowscriptaccess" value="true" &#47;><embed id="weplay-vid" width="100%" height="240" type="application&#47;x-shockwave-flash" src="http:&#47;&#47;www.3gcnbeta.com&#47;wordpress&#47;wp-includes&#47;js&#47;tinymce&#47;plugins&#47;media&#47;moxieplayer.swf" flashvars="url=https%3A&#47;&#47;i.cloudup.com&#47;transcoded&#47;KL-0r-E2Gj.mp4&amp;poster=https%3A&#47;&#47;i.cloudup.com&#47;aNZqxnZzHv.png" allowfullscreen="true" allowscriptaccess="true" &#47;><&#47;object><&#47;video></p>
<p>发送图片信息的相关代码：</p>
<pre><code>self.canvas.toBuffer(function(err, buf){<br />
  if (err) throw err;<br />
  io.emit('frame', buf);<br />
});<br />
<&#47;code><&#47;pre><br />
下一个试验是运行一个QEMU的实例。这个实例里运行着一个Windows XP的镜像，以此来纪念XP的退休。每个玩家可以得到15秒的机会来控制这个机器。demo在这里<a href="http:&#47;&#47;socket.computer&#47;">http:&#47;&#47;socket.computer<&#47;a>。这里有一段你通常可能会看到的场景的视频：</p>
<p><video id="computer-vid" width="100%" height="240" data-setup="{"autoplay":true,"loop":true, "techOrder": ["html5", "flash"], "height": 300}" class="video-js vjs-default-skin" autoplay="autoplay" loop="loop"><source src="https:&#47;&#47;i.cloudup.com&#47;transcoded&#47;Cuqn5OLmcl.mp4" type="video&#47;mp4" &#47;><object id="computer-vid" width="100%" height="240" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http:&#47;&#47;download.macromedia.com&#47;pub&#47;shockwave&#47;cabs&#47;flash&#47;swflash.cab#version=6,0,40,0"><param name="src" value="http:&#47;&#47;www.3gcnbeta.com&#47;wordpress&#47;wp-includes&#47;js&#47;tinymce&#47;plugins&#47;media&#47;moxieplayer.swf" &#47;><param name="flashvars" value="url=https%3A&#47;&#47;i.cloudup.com&#47;transcoded&#47;Cuqn5OLmcl.mp4&amp;poster=&#47;wordpress&#47;wp-admin&#47;" &#47;><param name="allowfullscreen" value="true" &#47;><param name="allowscriptaccess" value="true" &#47;><embed id="computer-vid" width="100%" height="240" type="application&#47;x-shockwave-flash" src="http:&#47;&#47;www.3gcnbeta.com&#47;wordpress&#47;wp-includes&#47;js&#47;tinymce&#47;plugins&#47;media&#47;moxieplayer.swf" flashvars="url=https%3A&#47;&#47;i.cloudup.com&#47;transcoded&#47;Cuqn5OLmcl.mp4&amp;poster=&#47;wordpress&#47;wp-admin&#47;" allowfullscreen="true" allowscriptaccess="true" &#47;><&#47;object><&#47;video></p>
<p>将这个DEMO放到一起的关键部分在于连接QEMU的VNC服务器和实现RFB协议。跟NODE.JS平常的方式一样，这个方案也就是在npm里搜索rfb就能搞定的。</p>
<p>实际上为了最好的性能，降低延时，最好只通知客户端屏幕变化的部分。比如，如果你移动鼠标，只有包含了鼠标的很小块屏幕会被通知。node-rfb2模块会给我们一个包含对象的矩形事件如下：</p>
<pre><code>{<br />
  x: 103,<br />
  y: 150,<br />
  width: 200,<br />
  height: 250,<br />
  data: Buffer<br />
}<&#47;code><br />
<&#47;pre></p>
<p>这时我就清楚的看到支持二进制数据的价值了。我只需要调用io.emit并将那个对象传进去，然后让Socket.IO来处理就行了。</p>
<p>出于好玩，我也安装并运行了我最喜欢的第一人称射击游戏：</p>
<p><video id="cs-vid" width="100%" height="240" data-setup="{"autoplay":true,"loop":true, "techOrder": ["html5", "flash"], "height": 300}" class="video-js vjs-default-skin" autoplay="autoplay" loop="loop"><source src="https:&#47;&#47;i.cloudup.com&#47;transcoded&#47;Ra6PJnoLBq.mp4" type="video&#47;mp4" &#47;><object id="cs-vid" width="100%" height="240" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http:&#47;&#47;download.macromedia.com&#47;pub&#47;shockwave&#47;cabs&#47;flash&#47;swflash.cab#version=6,0,40,0"><param name="src" value="http:&#47;&#47;www.3gcnbeta.com&#47;wordpress&#47;wp-includes&#47;js&#47;tinymce&#47;plugins&#47;media&#47;moxieplayer.swf" &#47;><param name="flashvars" value="url=https%3A&#47;&#47;i.cloudup.com&#47;transcoded&#47;Ra6PJnoLBq.mp4&amp;poster=&#47;wordpress&#47;wp-admin&#47;" &#47;><param name="allowfullscreen" value="true" &#47;><param name="allowscriptaccess" value="true" &#47;><embed id="cs-vid" width="100%" height="240" type="application&#47;x-shockwave-flash" src="http:&#47;&#47;www.3gcnbeta.com&#47;wordpress&#47;wp-includes&#47;js&#47;tinymce&#47;plugins&#47;media&#47;moxieplayer.swf" flashvars="url=https%3A&#47;&#47;i.cloudup.com&#47;transcoded&#47;Ra6PJnoLBq.mp4&amp;poster=&#47;wordpress&#47;wp-admin&#47;" allowfullscreen="true" allowscriptaccess="true" &#47;><&#47;object><&#47;video></p>
<p>自动测试</p>
<p>第个提交到Socket.IO的代码基线都会触发一个测试矩阵，覆盖25个浏览器，包括Android和iOS。我们通过在你的计算机上建立一个反向隧道到临时端口（这样外界就可以访问这个计算机）的方式来建立无缝的测试，然后将这些测试在Sauce Labs的云上执行，这云主要负责可视化和调用所有我们关心的环境下的浏览器。</p>
<h2 id="automated-testing"><a href="http:&#47;&#47;socket.io&#47;blog&#47;introducing-socket-io-1-0&#47;#automated-testing"><img style="color: #333333; font-size: 13px;" alt="" src="https:&#47;&#47;i.cloudup.com&#47;wuvWoEV3EH.png" &#47;><&#47;a><&#47;h2></p>
<p>规模化</p>
<p>我们对多房间与多节点规模化的处理已经作了相当程度的简化。Socket.IO不会在节点之间相互的存储或者复制数据，它现在只关心如何将事件进行传输。如果你想将Socket.IO扩大到多个节点上，那么只需要两个简单的步骤：<br />
   开启粘性负载均衡(sticky load balancing)（比如通过原始IP地址)。这样可以保证象long-polling这样的连接可以将请求路由到同一个节点，这样消息缓存就可以被保存下来 。<br />
	实现socket.io-redis适配器</p>
<pre><code>var io = require('socket.io')(3000);<br />
var redis = require('socket.io-redis');<br />
io.adapter(redis({ host: 'localhost', port: 6379 }));<&#47;code><&#47;pre><br />
由于步骤简化，导致我们废弃了Sokcet#set和Socket#get这两个API。现在如果你想广播，包就可以很容易的被编码，也很容易被发布到其它节点上去，同时又不需要处理存储的问题。</p>
<p>这也方便我们进入到另一个话题：与其它的后端的集成。</p>
<p>集成<br />
很多时候，你已有应用的布署环境是由很多语言和框架写成的，并不是只有Node.JS.即使他是全部用Node.JS写的，你可能在什么时候也想将你的应用拆分成几个不同的进程。</p>
<p>比如一个进程负责提供Socket.IO的服务，接收连接，处理身份验证等，而另一个后端可能会负责生产消息。</p>
<p>对于那样的终端，我们引入了socket.io-emitter项目，他会把钩子挂进socket.io-redis里，然后你就可以很容易的在任何地方发起一个事件到浏览器了。</p>
<pre><code>var io = require('socket.io-emitter')();<br />
setInterval(function(){<br />
  io.emit('time', new Date);<br />
}, 5000);<&#47;code></p>
<p>Tony Kovanen已经创建了一个PHP的实现<&#47;pre></p>
<pre><code><?php<br />
$emitter = new SocketIOEmitter(array('port' => '6379', 'host' => '127.0.0.1'));<br />
$emitter->emit('event', 'wow');<br />
?><&#47;code><&#47;pre><br />
这样就能很方便的让现有的应用转成一个实时的应用。</p>
<p>更好的调试</p>
<p>Socket.IO现在已经完全被TJ Holowaychuk创建的简约而又无比强大的叫做debug的工具所武装。</p>
<p>过去，Socket.IO的服务器默认会将所有的事情都log到console里去。这让很多用户觉得非常不爽（当然也有很多用户觉得非常有用），同时也违反了UNIX哲学里的安静规则（Rule of Silence）</p>
<p>安静规则：开发者应该这样设计程序，他们不会打印没有必要的输出。这个规则的目标是允许其它程序和开发人员可以选出他们需要的信息，而不用分析不重要的内容。</p>
<p>基本的想法是每个被Socket.IO使用的模块都会提供不同的调试范围，这样你就可以看到内部是如何动作的。默认所有的输出都是关掉的，但是你可以调整参数来查看消息，方法是（在Node.JS端）提供一个DEBUG环境变量或者（浏览器端）提供localStorage.debug属性。</p>
<p>你可以到我们的主页上看到实际的使用情况：</p>
<p><video id="debugging-vid" width="100%" height="240" data-setup="{"autoplay":true,"loop":true, "techOrder": ["html5", "flash"], "height": 300}" class="video-js vjs-default-skin" autoplay="autoplay" loop="loop"><source src="https:&#47;&#47;i.cloudup.com&#47;transcoded&#47;IL9alTr0eO.mp4" type="video&#47;mp4" &#47;><object id="debugging-vid" width="100%" height="240" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http:&#47;&#47;download.macromedia.com&#47;pub&#47;shockwave&#47;cabs&#47;flash&#47;swflash.cab#version=6,0,40,0"><param name="src" value="http:&#47;&#47;www.3gcnbeta.com&#47;wordpress&#47;wp-includes&#47;js&#47;tinymce&#47;plugins&#47;media&#47;moxieplayer.swf" &#47;><param name="flashvars" value="url=https%3A&#47;&#47;i.cloudup.com&#47;transcoded&#47;IL9alTr0eO.mp4&amp;poster=&#47;wordpress&#47;wp-admin&#47;" &#47;><param name="allowfullscreen" value="true" &#47;><param name="allowscriptaccess" value="true" &#47;><embed id="debugging-vid" width="100%" height="240" type="application&#47;x-shockwave-flash" src="http:&#47;&#47;www.3gcnbeta.com&#47;wordpress&#47;wp-includes&#47;js&#47;tinymce&#47;plugins&#47;media&#47;moxieplayer.swf" flashvars="url=https%3A&#47;&#47;i.cloudup.com&#47;transcoded&#47;IL9alTr0eO.mp4&amp;poster=&#47;wordpress&#47;wp-admin&#47;" allowfullscreen="true" allowscriptaccess="true" &#47;><&#47;object><&#47;video></p>
<p>流线行的API</p>
<p>socket.io模块现在已经直接输出绑定函数了（之前是.listen）。</p>
<p>现在绑定socket.io到一个HTTP服务器更加容易了。</p>
<p>&nbsp;</p>
<pre><code>var srv = require('http').Server();<br />
var io = require('socket.io')(srv);<&#47;code></p>
<p>或者让它侦听某个端口。<&#47;pre></p>
<pre><code>var io = require('socket.io')(8080);<&#47;code><&#47;pre></p>
<p>之前，为了表达所有的连接，你不得不用io.sockets.现在你可以直接在io上调用：<br />
<&#47;code><&#47;pre></p>
<pre><code>io.on('connection', function(socket){<br />
  socket.emit('hi');<br />
});<br />
io.emit('hi everyone');</p>
<p>CDN发布</p>
<p>我们之前做出得最好的决定就是要实现一个Socket.IO服务器不但要让你能用上实时协议，同时自己也要服务好客户端。</p>
<p>通常，你们所有人都会包含一个这样的代码片段：</p>
<pre><code><script src="&#47;socket.io&#47;socket.io.js"><&#47;script><&#47;code><&#47;pre></p>
<h2 id="streamlined-apis"><&#47;h2><br />
如果你想优化你的客户端体验，让你的用户访问离他最近的文件，同时提供最大的级别的gzip压缩（感谢Google的zopfli）和适当的缓存支持，你现在可以使用我们的CDN了。他是免费的，永久，同时原生支持SSL。</p>
<pre><code><script src="https:&#47;&#47;cdn.socket.io&#47;socket.io-1.0.0.js"><&#47;script></p>
<p><&#47;code><&#47;pre></p>
<p>未来的创新</p>
<p>Socket.IO项目的核心将会继续通过很多经常的发布来改进，主要的目标是提供可靠性，速度，降低代码量，更易维护。Socket.IO 2.0将可能会看到我们放弃支持一些老的浏览器，并去除一些模块，比如JSON串行化模块。</p>
<p>大部分的改进将在核心代码外进行。下面是一些我会重点关注的项目：</p>
<p>#socket.io-stream</p>
<p>通过添加这个插件，你可以发送流对象，这样你可以编写一些内存高效的程序。在第一个例子中，我们在发送前加载了一个文件到内存中，但是下面的代码是可以工作的：</p>
<pre><code>var fs = require('fs');<br />
var io = require('socket.io')(3000);<br />
require('socket.io-stream')(io);<br />
io.on('connection', function(socket){<br />
  io.emit(fs.createReadStream('file.jpg'));<br />
});<br />
<&#47;code><&#47;pre></p>
<p>这样在客户端你就会收到一个流对象并触发数据事件。</p>
<p>#工具</p>
<p>当你使用 Socket.IO时，你不用关心传输，包，帧，TCP或者WebSocket。你关心的是什么事件被发送，什么事件会过来。<br />
<img alt="" src="https:&#47;&#47;i.cloudup.com&#47;_Jsiiabyfr.png" &#47;></p>
<p>我们的目标是提供Web Inspector或者 Firefox Developer Tools插件，让你可以很容易的查到什么事件被发送了，在什么时候，用了什么参数。</p>
<p>这个项目现在正由Nick LaGrow (<a href="https:&#47;&#47;github.com&#47;nlagrow">Github<&#47;a>), Samaan Ghani (<a href="https:&#47;&#47;github.com&#47;samaanghani">Github<&#47;a>) and David Cummings (<a href="https:&#47;&#47;twitter.com&#47;dece">Twitter<&#47;a>)这些天才们领导开发中。</p>
<p>&nbsp;</p>
<p>#对新语言和框架的支持</p>
<h2 id="future-innovation"><a href="http:&#47;&#47;socket.io&#47;blog&#47;introducing-socket-io-1-0&#47;#future-innovation">&nbsp;<&#47;a><&#47;h2><br />
现在已经有很多精力投入到了精确化的文档化Engin.IO协议和Socket.IO协议当中。</p>
<p>这样做的主要目标是让Node.JS的服务器与客户端成为其它语言与框架的参考实现。</p>
<p>能够在更大的生态系统中提供这种互操作性是我们2014年以及之后的最大的目标。</p>
<p>感谢<br />
这个版本是一个大团队的成果。特别感谢我们新的核心团队：</p>
<ul>
<li>Tony Kovanen (<a href="http:&#47;&#47;github.com&#47;rase-">Github<&#47;a>&nbsp;&#47;&nbsp;<a href="http:&#47;&#47;twitter.com&#47;TonyKovanen">Twitter<&#47;a>) &nbsp;Engine.IO上的优异的工作以及对iOS和IE各版本支持的方案，同时帮忙建立了这个网站和组织文档<&#47;li>
<li>Kevin Roark (<a href="http:&#47;&#47;github.com&#47;kevin-roark">Github<&#47;a>) 在引擎之上的新Socket.IO分析器的所有的开发工作，Socket.IO Computer的Demo，在文档，问题，请求上的帮助<&#47;li>
<li>Roman Shtylman (<a href="http:&#47;&#47;github.com&#47;defunctzombie">Github<&#47;a>&nbsp;&#47;&nbsp;<a href="http:&#47;&#47;twitter.com&#47;defunctzombie">Twitter<&#47;a>) &nbsp;zuul和localtunnel上的工作，我们测试架构的核心和我们稳定使命的核心<&#47;li><br />
<&#47;ul><br />
&nbsp;</p>
<p>然后是不分排名的感谢：</p>
<ul>
<li>Jay Borenstein (<a href="http:&#47;&#47;www.linkedin.com&#47;in&#47;jayborenstein">LinkedIn<&#47;a>) for selecting Socket.IO as one of the projects to mentor students on Open Source engineering as part of the&nbsp;<a href="https:&#47;&#47;www.facebook.com&#47;notes&#47;facebook-engineering&#47;facebook-open-academy-bringing-open-source-to-cs-curricula&#47;10151806121378920">Open Academy<&#47;a>&nbsp;project.<&#47;li>
<li>Michael Srb (<a href="https:&#47;&#47;github.com&#47;xixixao">Github<&#47;a>), Mark Mokryn (<a href="https:&#47;&#47;github.com&#47;mokesmokes">Github<&#47;a>), Eugen Dueck (<a href="http:&#47;&#47;github.com&#47;eugendueck">Github<&#47;a>), Afshin Mehrabani (<a href="http:&#47;&#47;github.com&#47;afshinm">Github<&#47;a>), Christoph Dorn (<a href="https:&#47;&#47;github.com&#47;cadorn">Github<&#47;a>) and Mikito Takada (<a href="http:&#47;&#47;github.com&#47;mixu">Github<&#47;a>) for several key Engine.IO patches.<&#47;li>
<li>Grant Timmerman (<a href="http:&#47;&#47;github.com&#47;grant">Github<&#47;a>&nbsp;&#47;&nbsp;<a href="https:&#47;&#47;twitter.com&#47;granttimmerman">Twitter<&#47;a>) for his outstanding work on the new Socket.IO&nbsp;<a href="http:&#47;&#47;new.socket.io&#47;demos&#47;chat&#47;">example chat application<&#47;a>, and multiple patches and issues investigation.<&#47;li>
<li>Jxck (<a href="http:&#47;&#47;github.com&#47;jxck">Github<&#47;a>&nbsp;&#47;&nbsp;<a href="https:&#47;&#47;twitter.com&#47;Jxck_">Twitter<&#47;a>) for his work on translation, documentations and patches. ありがとう<&#47;li>
<li>Arnout Kazemier (<a href="http:&#47;&#47;github.com&#47;3rdEden">Github<&#47;a>&nbsp;&#47;&nbsp;<a href="https:&#47;&#47;twitter.com&#47;3rdEden">Twitter<&#47;a>) for his multiple contributions to Engine.IO and Socket.IO<&#47;li>
<li>Sauce Labs (<a href="https:&#47;&#47;github.com&#47;saucelabs">Github<&#47;a>&nbsp;&#47;&nbsp;<a href="https:&#47;&#47;twitter.com&#47;saucelabs">Twitter<&#47;a>) for supporting open source projects with free testing infrastructure.<&#47;li>
<li>Shihui Song (<a href="https:&#47;&#47;github.com&#47;sweetiesong">Github<&#47;a>), Qiming Fang (<a href="https:&#47;&#47;github.com&#47;qimingfang">Github<&#47;a>) and Erluo Li for their work on testing infrastructure.<&#47;li>
<li>Julian Salazar (<a href="https:&#47;&#47;github.com&#47;j-salazar">Github<&#47;a>) and Tianyiu Liu (<a href="https:&#47;&#47;github.com&#47;poohlty">Github<&#47;a>) for their work on reconnection and ongoing research into resource sharing between browser tabs and messages synchronization.<&#47;li>
<li>Gal Koren (<a href="https:&#47;&#47;github.com&#47;get">Github<&#47;a>) for his fantastic work into modularization of the codebases.<&#47;li>
<li>Matt Walker (<a href="https:&#47;&#47;twitter.com&#47;mcfwalker">Twitter<&#47;a>) for the beautiful Socket.IO logo.<&#47;li><br />
<&#47;ul><br />
最后我非常感谢我的公司<a href="http:&#47;&#47;automattic.com&#47;">Automattic<&#47;a>，它是一个开源创新的大家庭。</p>
<p>&nbsp;</p>
