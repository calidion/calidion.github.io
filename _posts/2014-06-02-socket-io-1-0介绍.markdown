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


原文：http://socket.io/blog/introducing-socket-io-1-0/

Socket.IO的第一个版本在Node.JS出现的不久就出来了。我之前很长时间里都在寻找方便地将数据从服务器端推到客户端的框架，也偿试了很多其它的服务器端的javascript方案。
在那个时候，主要的关注点在于实现一个与WebSocket的API相同的接口，那里的WebSocket正在标准化中并且即将完成的。我很幸运那时收获了很多来自社区（包括Node.JS的创始人）的反馈，这些反馈促进了项目的演进，也使它发生了明显的变化，变的更加好用。
Socket.IO慢慢的就变成了Web上的事件发生器（EventEmitter)。今天我会介绍一下1.0上取得的工作成果并展望一下未来。
Socket.IO 1.0里有不少需要说明的地方，如果你的时间宝贵，你可以选择一些你感兴趣的主题去了解：

>新引擎
>二进制的支持
>自动测试
>可规模化(Scalability)
>集成
>更好的测试
>流水化的API（精简，高效）
>CDN分发
>未来的创新
>感谢


#新引擎

Socket.IO的代码已经不再处理传输与浏览器兼容的事情了。那些工作已经并入到我们完善了几个月的新模块Engine.IO里面了，Engine.IO是一套类WebSocket风格的API实现。 这个专门的模块化处理带来的好处不能不提一下：
对于Socket.IO的最终用户来说，没有什么需要改变的。只要换上新的版本就可以。
大量的简化，在代码规模与测试覆盖方面
Socket.IO的服务端只有1234行代码
Socket.IO的客户端只有976行代码.
面向未来的灵活性
如果WebSocket是你想支持的唯一的传输方式，那你直接使用Engine.IO即可（它包括了所有兼容浏览器使用方法），他可以无缝的被替换成WebSocket接口。
其它方式的传输比如常规的Node.JS的TCP的Socket或者Google Chrome Socket也可以很方便的实现。
这种分离让我们可以不断的改进与完善传输层。在这些改进中，我最喜欢的是引入了一个叫做传输特征检测的想法。
在Web开发上，简单的通过检测用户代理(User Agent)来确定使用什么API或者开启那些功能曾经是相当普遍的。但是随着JavaScript的基础代码变的越来越复杂且成熟，为了得到最大的可靠性，直接测试API来确实行为是否符合预期的方式将会显得越来越合理。
比如简单的检查JSON全局变量是否存在不能保证JSON.stringify就是可以用的，甚至也不能表明它一定存在。很有可能意味着用户定义了一个他们自己的JSON全局变量或者环境里存在着一个已经被破坏的JSON实现。
Socket.IO从不会假设WebSocket一定可以工作，因为在实际中它不能正常工作的机会是很大的。因此，它会首先使用XHR或者JSONP建立一个连接，然后试图升级这个连接到WebSocket上。相比于那些依靠超时来处理失败的方式，这种方式不会让你的用户有体验变差的感觉。

#二进制的支持
用户们对支持发送二进制数据的能力的要求已经有相当一段时间了，在WebSocket添加了这一个支持之后变的更加明显。
最大的问题在于如果我按WebSocket API的方式来做为我们支持二进制的模型，那么他的可用性将会大大的打折。WebSocket要求你的Socket模式要么是“字符模式”，要么是“二进字模式”。

var socket = new WebSocket('ws://localhost');
socket.binaryType = 'arraybuffer';
socket.send(new ArrayBuffer);

这对于底层的API来说是好的，这也是Engine.IO支持的方式。但是对于应用开发人员来说，很可能他们不想要一个只能发送blob（binary large object / basic large object) 的东西或者每次都要手动将数据转成blob的接口。
所以Socket.IO现在支持在任何数据结构中发送Buffer(来自于Node.JS端), Blob, ArrayBuffer甚至File：
```
var fs = require('fs');
var io = require('socket.io')(3000);
io.on('connection', function(socket){
  fs.readFile('image.png', function(err, buf){
    // it's possible to embed binary data
    // within arbitrarily-complex objects
    socket.emit('image', { image: true, buffer: buf });
  });
});
```

为了测试这种特殊的二进制支持究竟有多有用（同时作为一个喜欢将结果可视化的极客），我决定对Twitch Play Pokemon用100%Javascript进行复制的试验。通过使用基于Javascript的gameboy-emulator, node-canvas, socket.io，我们完成了一个甚至能在IE8工作的由服务器渲染的交互游戏。 可以到这里查看 http://weplay.io(源码在这里)
发送图片信息的相关代码：
```
self.canvas.toBuffer(function(err, buf){
  if (err) throw err;
  io.emit('frame', buf);
});
```
下一个试验是运行一个QEMU的实例。这个实例里运行着一个Windows XP的镜像，以此来纪念XP的退休。每个玩家可以得到15秒的机会来控制这个机器。demo在这里http://socket.computer。这里有一段你通常可能会看到的场景的视频：
将这个DEMO放到一起的关键部分在于连接QEMU的VNC服务器和实现RFB协议。跟NODE.JS平常的方式一样，这个方案也就是在npm里搜索rfb就能搞定的。
实际上为了最好的性能，降低延时，最好只通知客户端屏幕变化的部分。比如，如果你移动鼠标，只有包含了鼠标的很小块屏幕会被通知。node-rfb2模块会给我们一个包含对象的矩形事件如下：
```
{
  x: 103,
  y: 150,
  width: 200,
  height: 250,
  data: Buffer
}
```
这时我就清楚的看到支持二进制数据的价值了。我只需要调用io.emit并将那个对象传进去，然后让Socket.IO来处理就行了。
出于好玩，我也安装并运行了我最喜欢的第一人称射击游戏：

#自动测试
第个提交到Socket.IO的代码基线都会触发一个测试矩阵，覆盖25个浏览器，包括Android和iOS。我们通过在你的计算机上建立一个反向隧道到临时端口（这样外界就可以访问这个计算机）的方式来建立无缝的测试，然后将这些测试在Sauce Labs的云上执行，这云主要负责可视化和调用所有我们关心的环境下的浏览器。

#规模化
我们对多房间与多节点规模化的处理已经作了相当程度的简化。Socket.IO不会在节点之间相互的存储或者复制数据，它现在只关心如何将事件进行传输。如果你想将Socket.IO扩大到多个节点上，那么只需要两个简单的步骤：
开启粘性负载均衡(sticky load balancing)（比如通过原始IP地址)。这样可以保证象long-polling这样的连接可以将请求路由到同一个节点，这样消息缓存就可以被保存下来 。
实现socket.io-redis适配器
```
var io = require('socket.io')(3000);
var redis = require('socket.io-redis');
io.adapter(redis({ host: 'localhost', port: 6379 }));
```
由于步骤简化，导致我们废弃了Sokcet#set和Socket#get这两个API。现在如果你想广播，包就可以很容易的被编码，也很容易被发布到其它节点上去，同时又不需要处理存储的问题。
这也方便我们进入到另一个话题：与其它的后端的集成。
集成
很多时候，你已有应用的布署环境是由很多语言和框架写成的，并不是只有Node.JS.即使他是全部用Node.JS写的，你可能在什么时候也想将你的应用拆分成几个不同的进程。
比如一个进程负责提供Socket.IO的服务，接收连接，处理身份验证等，而另一个后端可能会负责生产消息。
对于那样的终端，我们引入了socket.io-emitter项目，他会把钩子挂进socket.io-redis里，然后你就可以很容易的在任何地方发起一个事件到浏览器了。
```
var io = require('socket.io-emitter')();
setInterval(function(){
  io.emit('time', new Date);
}, 5000);
```
Tony Kovanen已经创建了一个PHP的实现
```
<?php
$emitter = new SocketIOEmitter(array('port' => '6379', 'host' => '127.0.0.1'));
$emitter->emit('event', 'wow');
?>
```
这样就能很方便的让现有的应用转成一个实时的应用。
更好的调试
Socket.IO现在已经完全被TJ Holowaychuk创建的简约而又无比强大的叫做debug的工具所武装。
过去，Socket.IO的服务器默认会将所有的事情都log到console里去。这让很多用户觉得非常不爽（当然也有很多用户觉得非常有用），同时也违反了UNIX哲学里的安静规则（Rule of Silence）
安静规则：开发者应该这样设计程序，他们不会打印没有必要的输出。这个规则的目标是允许其它程序和开发人员可以选出他们需要的信息，而不用分析不重要的内容。
基本的想法是每个被Socket.IO使用的模块都会提供不同的调试范围，这样你就可以看到内部是如何动作的。默认所有的输出都是关掉的，但是你可以调整参数来查看消息，方法是（在Node.JS端）提供一个DEBUG环境变量或者（浏览器端）提供localStorage.debug属性。
你可以到我们的主页上看到实际的使用情况：
流线行的API
socket.io模块现在已经直接输出绑定函数了（之前是.listen）。
现在绑定socket.io到一个HTTP服务器更加容易了。
```
var srv = require('http').Server();
var io = require('socket.io')(srv);
```
或者让它侦听某个端口。
var io = require('socket.io')(8080);
之前，为了表达所有的连接，你不得不用io.sockets.现在你可以直接在io上调用：

```
io.on('connection', function(socket){
  socket.emit('hi');
});
io.emit('hi everyone');
```

#CDN发布

我们之前做出得最好的决定就是要实现一个Socket.IO服务器不但要让你能用上实时协议，同时自己也要服务好客户端。

通常，你们所有人都会包含一个这样的代码片段：

```
<script src="/socket.io/socket.io.js"></script>
```
如果你想优化你的客户端体验，让你的用户访问离他最近的文件，同时提供最大的级别的gzip压缩（感谢Google的zopfli）和适当的缓存支持，你现在可以使用我们的CDN了。他是免费的，永久，同时原生支持SSL。
```
<script src="https://cdn.socket.io/socket.io-1.0.0.js"></script>
```

#未来的创新

Socket.IO项目的核心将会继续通过很多经常的发布来改进，主要的目标是提供可靠性，速度，降低代码量，更易维护。Socket.IO 2.0将可能会看到我们放弃支持一些老的浏览器，并去除一些模块，比如JSON串行化模块。

大部分的改进将在核心代码外进行。下面是一些我会重点关注的项目：

#socket.io-stream

通过添加这个插件，你可以发送流对象，这样你可以编写一些内存高效的程序。在第一个例子中，我们在发送前加载了一个文件到内存中，但是下面的代码是可以工作的：
```
var fs = require('fs');
var io = require('socket.io')(3000);
require('socket.io-stream')(io);
io.on('connection', function(socket){
  io.emit(fs.createReadStream('file.jpg'));
});
```

这样在客户端你就会收到一个流对象并触发数据事件。

#工具

当你使用 Socket.IO时，你不用关心传输，包，帧，TCP或者WebSocket。你关心的是什么事件被发送，什么事件会过来。

我们的目标是提供Web Inspector或者 Firefox Developer Tools插件，让你可以很容易的查到什么事件被发送了，在什么时候，用了什么参数。

这个项目现在正由Nick LaGrow (Github), Samaan Ghani (Github) and David Cummings (Twitter)这些天才们领导开发中。

#对新语言和框架的支持

现在已经有很多精力投入到了精确化的文档化Engin.IO协议和Socket.IO协议当中。

这样做的主要目标是让Node.JS的服务器与客户端成为其它语言与框架的参考实现。

能够在更大的生态系统中提供这种互操作性是我们2014年以及之后的最大的目标。

#感谢

这个版本是一个大团队的成果。特别感谢我们新的核心团队：

Tony Kovanen (Github / Twitter)  Engine.IO上的优异的工作以及对iOS和IE各版本支持的方案，同时帮忙建立了这个网站和组织文档

Kevin Roark (Github) 在引擎之上的新Socket.IO分析器的所有的开发工作，Socket.IO Computer的Demo，在文档，问题，请求上的帮助

Roman Shtylman (Github / Twitter)  zuul和localtunnel上的工作，我们测试架构的核心和我们稳定使命的核心

然后是不分排名的感谢：

Jay Borenstein (LinkedIn) for selecting Socket.IO as one of the projects to mentor students on Open Source engineering as part of the Open Academy project.

Michael Srb (Github), Mark Mokryn (Github), Eugen Dueck (Github), Afshin Mehrabani (Github), Christoph Dorn (Github) and Mikito Takada (Github) for several key Engine.IO patches.

Grant Timmerman (Github / Twitter) for his outstanding work on the new Socket.IO example chat application, and multiple patches and issues investigation.

Jxck (Github / Twitter) for his work on translation, documentations and patches. ありがとう

Arnout Kazemier (Github / Twitter) for his multiple contributions to Engine.IO and Socket.IO

Sauce Labs (Github / Twitter) for supporting open source projects with free testing infrastructure.

Shihui Song (Github), Qiming Fang (Github) and Erluo Li for their work on testing infrastructure.

Julian Salazar (Github) and Tianyiu Liu (Github) for their work on reconnection and ongoing research into resource sharing between browser tabs and messages synchronization.

Gal Koren (Github) for his fantastic work into modularization of the codebases.

Matt Walker (Twitter) for the beautiful Socket.IO logo.

最后我非常感谢我的公司Automattic，它是一个开源创新的大家庭。