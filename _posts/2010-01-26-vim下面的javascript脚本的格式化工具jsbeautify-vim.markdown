---
layout: post
status: publish
published: true
title: Vim下面的javascript脚本的格式化工具jsbeautify.vim
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 216
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=216
date: !binary |-
  MjAxMC0wMS0yNiAxNzoyMDozMyArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwOToyMDozMyArMDgwMA==
categories:
- 编程技术
tags:
- javascript
- Vim
- 格式化
- 脚本
comments: []
---
<p>一个很强大的工具。<br />
在命令模式下打入&ldquo;ff" 就可以开始执行了。<br />
但目前的速度有点慢。<br />
你需要有耐心。<br />
下载地址：http://www.vim.org/scripts/script.php?script_id=2727<br />
目前还没有绑定到vim的expandTab设置。<br />
如果想将tab换成是空格，<br />
需要将 295行:<br />
let s:opt_indent_char = "t"<br />
换成是：<br />
let s:opt_indent_char = " "<br />
也就是用两个空格来替换t</p>
