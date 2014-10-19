---
layout: post
status: publish
published: true
title: nodejs 下post代码
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1475
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1475
date: !binary |-
  MjAxMS0xMC0xOCAxNjoxOToxOSArMDgwMA==
date_gmt: !binary |-
  MjAxMS0xMC0xOCAwODoxOToxOSArMDgwMA==
categories:
- 新闻
tags: []
comments:
- id: 91
  author: 熊佳斌
  author_email: totty.xiong@gmail.com
  author_url: ''
  date: !binary |-
    MjAxMS0xMi0xNyAxNzo0MjozNiArMDgwMA==
  date_gmt: !binary |-
    MjAxMS0xMi0xNyAwOTo0MjozNiArMDgwMA==
  content: ! '强烈建议别写 ''Content-Length'': params.length这句，如果params中包含中文，这个length是错误的，会导致发送的报文不完整。'
- id: 92
  author: admin
  author_email: calidion@gmail.com
  author_url: http://www.3gcnbeta.com
  date: !binary |-
    MjAxMS0xMi0xOCAyMTo1NDoxNiArMDgwMA==
  date_gmt: !binary |-
    MjAxMS0xMi0xOCAxMzo1NDoxNiArMDgwMA==
  content: ! "看来你没有理解：'Content-Type': 'application/x-www-form-urlencoded', \n这句的含义。\nurlencoded后的字符，是不可能存在中文字符的，全部是ascii码的字符。\n所以params.length不会有错误的。"
---
<pre class="js" name="code">
	var options = {<br />
		host: 'www.yourdomain.com',<br />
		post: 80,<br />
		method: 'POST',<br />
		path: '/',<br />
		headers: {<br />
			'Content-Type': 'application/x-www-form-urlencoded',<br />
			'Content-Length': params.length<br />
		}<br />
	};</p>
<p>	var request = http.request(options, function(response) {<br />
		response.setEncoding('utf8');<br />
		response.on('data', function(chunk) {<br />
			console.log(chunk);<br />
		});<br />
	});</p>
<p> request.write(params);<br />
 request.end();<br />
</pre></p>
