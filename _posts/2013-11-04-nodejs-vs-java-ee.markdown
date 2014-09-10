---
layout: post
status: publish
published: true
title: Nodejs vs JAVA EE
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1615
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1615
date: !binary |-
  MjAxMy0xMS0wNCAyMzozNDozMCArMDgwMA==
date_gmt: !binary |-
  MjAxMy0xMS0wNCAxNTozNDozMCArMDgwMA==
categories:
- 民工翻译
- Javascript
tags: []
comments: []
---
原文： http://java.dzone.com/articles/performance-comparison-between

Node.js和Java EE从CouchDB读取JSON数据的性能比较

Node.js出现以来已经给过我几次性能高的印象了。在我上一个Node.js项目中，它的表现一如继往：我们直接超过了设定的性能目标而没有对应用做任何的调整。这是我在Java EE里从未有过的体验。假设这个项目确实是一个为Node.js量身定作的项目：一个主要是从CouchDB读取JSON文档的小项目。但是我还是想知道：JAVA EE在这个案例中跟Node.js比会是一个怎样的表现呢？

这个项目需要达成下面的几个性能目标： 150 请求/秒并具备200毫秒的平均影响时间。 我不是一个性能优化高手，200毫秒的平均影响时间听起来很快，我的感觉是我们可能必须要调节程序以达到些目标。

一个独立的团队针对我们的程序进行了性能测试。测试成绩出来了，结果是程序性能实际上超过了所有设计的性能目标，而是达到到了：200请求/秒， 100毫秒的响应时间。比目标成绩好很多。我相当惊讶,Node.js竟然超于性能需求这么多，并且所有这些不需要任何性能优化。

我又想：这性能对于这种程度的程序来说已经算是好性能了吗？还是Node.js真的就神一样的快？如果我们用Java EE这种成熟的平台来做性能会怎样？

我实在无法回答这个问题。我做过的JAVA EE应用的响应时间感觉更象是在1000毫秒，当然他们比我们这个Node.js应用有更加复杂的功能。我们这个应用的核心只是通过一个ID从CouchDB数据库的一个表里取出JSON数据。没有复杂的SQL,没有表的连接，也没有数据的处理。我不知道一个这样需要的Java EE应用的性能会怎样。所以我继续寻找问题的答案：我所感受到的Node.js对比传统JAVA EE系统的性能是不是可以通过一个严格的性能测试来得到支持呢？

为了回答这个问题，我设计了一套性能测试用例用来对Java EE和Nodejs进行测试，后端采用相同的数据库，并考虑如何去比较这两个系统。

准备

我用同样的性能测试用例来测试Node.js程序和Java Servlet程序。两个程序都使用了与原Node.js程序一样的后端：CouchDB.我使用CouchBase 单机服务器1.1.3版，并创建10，000个样例文档，每个4KB的随机文本。测试机是一台iMac，2.4G赫兹的Intel Core 2 Duo， 4GB内在，和Mac OS X的系统。

我将一台独立的机器当测试机，并使用Apache JMeter进行测试。JMeter脚本采用不同程度的并发数，向各个程序发起请求，并抓取随机文档。

JAVA EE

JAVA servlet运行在版本为7.0.21的Apache Tomcat之上，默认配置运行在Java 1.6之上。数据库的驱动是CouchDB4J，版本0.30。这个驱动没有缓存选项，所以没有做配置。

下面的Java代码是一个通过ID从CouchDB攻取一个文档并以JSON对象进行转发的servlet。

```
package com.shinetech.couchDB;

import java.io.IOException;

import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;

import javax.servlet.http.HttpServletRequest;

import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.fourspaces.couchdb.Database;

import com.fourspaces.couchdb.Document;

import com.fourspaces.couchdb.Session;

@SuppressWarnings("serial")

public class MyServlet extends HttpServlet {

  Logger logger = Logger.getLogger(this.getClass());

  Session s = new Session("localhost",5984);

  Database db = s.getDatabase("testdb");

  public void doGet(HttpServletRequest req, HttpServletResponse res)

    throws IOException {

    String id = req.getPathInfo().substring(1);

    PrintWriter out = res.getWriter();

    Document doc = db.getDocument(id);

    if (doc==null){

      res.setContentType("text/plain");

      out.println("Error: no document with id " + id +" found.");

    } else {

      res.setContentType("application/json");

      out.println(doc.getJSONObject());

    }

    out.close();

  }

}
```

我运行JMeter对这个servlet进行了不同并发的测试。下面的表示显示了并发数，平均影响时间，每秒请求数。

<table>
    <tr>
        <td>并发数</td>
        <td>平均影响时间(ms)</td>
        <td>每秒请求数</td>
    </tr>
    <tr>
        <td>10</td>
        <td>23</td>
        <td>422</td>
    </tr>
    <tr>
        <td>50</td>
        <td>119</td>
        <td>416</td>
    </tr>
    <tr>
        <td>100</td>
        <td>243</td>
        <td>408</td>
    </tr>
    <tr>
        <td>150</td>
        <td>363</td>
        <td>411</td>
    </tr>
</table>


我们可以看到响应时间随着并发数的增长不断的恶性延长。在10个并发时是23毫秒，而在100个并发时变成是243毫秒。

一个有意思的情况是平均响应时间几乎与并发数是呈线性相关的，所以一次10倍增长的并发请求会导致一个10倍增长的响应时间的增长。这样就说明每秒能处理的请求数是一个相当固定的值，不管我们有10个并发请求，还是150个并发请求。不管是什么样的并发情况，服务器每秒钟处理的请求数大约是420个。

Node

Node.js程序运行在Node.js 0.10.20之上，使用Cradle的CouchDB驱动，版本是0.57，并为了环境的一致缓存被并掉。

下面的Node.js代码实现对于一个给定的ID给从CouchDB里取出的同样的JSON文档的功能：

```

var http = require ('http'),

  url = require('url'),

  cradle = require('cradle'),

  c = new(cradle.Connection)('127.0.0.1',5984,{cache: false, raw: false}),

  db = c.database('testdb'),

  port = 8081;

process.on('uncaughtException', function (err) {

  console.log('Caught exception: ' + err);

});

http.createServer(function(req,res) {

  var id = url.parse(req.url).pathname.substring(1);

  db.get(id,function(err, doc) {

    if (err) {

      console.log('Error'+err.message);

      res.writeHead(500,{'Content-Type': 'text/plain'});

      res.write('Error' + err.message);

      res.end();

    } else {

      res.writeHead(200,{'Content-Type': 'application/json'});

      res.write(JSON.stringify(doc));

      res.end();

    }

  });

}).listen(port);

```

Node.js下得到的数字如下：

<table>
    <tbody>
    <tr>
        <td>并发数</td>
        <td>平均影响时间(ms)</td>
        <td>每秒请求数</td>
    </tr>
    <tr>
        <td>10</td>
        <td>19</td>
        <td>509</td>
    </tr>
    <tr>
        <td>50</td>
        <td>109</td>
        <td>453</td>
    </tr>
    <tr>
        <td>100</td>
        <td>196</td>
        <td>507</td>
    </tr>
    <tr>
        <td>150</td>
        <td>294</td>
        <td>506</td>
    </tr>
    </tbody>
</table>

同之前的平均响应时间一样，它与并发数有一个线性的关系，证实了每分钟可以处理的请求数是一个相当恒定的值。Node.js约快出20%。 如在10个并发时，每秒请求数分别为509 vs 422。

结论

Node.js对于当前的任务来说，相比于JAVA EE要快出20%。这对我来说很震惊。一个解释型语言与一个建立在历经多年优化的VM之上的编译弄语言相比竟然速度能保持在一个水平上。相当的赞！

但是我们必须要认识到这个结论是受条件限制的：这种类型的程序是Node.js所擅长的。我担心将这个结论应用到其它类型的程序上可能会不成立。我认为由于Javascript是解释型语言，并且缺少成熟的面向大型Node.js应用的开发模式，所以Javascript程序最好保持较小的规模。

Node.js与Java EE的服务能力是超过正常的服务器需求的。400~500每秒的请求数是相当大的。世界上最大的网站Google有大约50亿次请求每天。如果你用24小时，60分钟，50秒来分这些请求，那么它的结果是57870个请求每秒。这就是Google全球所有域名的请求数。所以如果你有一个请求在400每秒种的网站在一台机器上，那么你的网站已经非常大了。100万请求每天平均下来就是11.5请求每秒。请牢记。

在这个测试中，不同的并发模型，不管是单线程的Node.js还是多线程的Java EE，差别不大。为了测试Node.js在更大的并发量时的表现--这个通常会被认为强于多线程的地方，象打开的文件数限制之类的问题是需要被考虑到的。我不能产生150个以上的用户来并发测试是因为OS已经因为打开文件过多而报错了。这个可以通过配置解决，但已经不在本文的讨论之内了。