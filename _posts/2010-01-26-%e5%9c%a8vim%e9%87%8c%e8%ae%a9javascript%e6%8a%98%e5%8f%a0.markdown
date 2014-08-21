---
layout: post
status: publish
published: true
title: 在Vim里让javascript折叠
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 220
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=220
date: !binary |-
  MjAxMC0wMS0yNiAxNzoyMzo1NiArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwOToyMzo1NiArMDgwMA==
categories:
- 编程技术
tags:
- javascript
- Vim
- 折叠
comments: []
---
<p>英文源于:</p>
<p>http:&#47;&#47;verens.com&#47;archives&#47;2005&#47;04&#47;18&#47;using-javascript-folds-in-vim&#47;</p>
<p>1.修改vimrc文件, 添加下面一行:<br />
let javaScript_fold=1</p>
<p>2.de>编辑&#47;usr&#47;share&#47;vim&#47;vim(7.x)&#47;syntax&#47;javascript.vim<br />
括号里的7.x要修改成自己相应的目录。我的目录是：<br />
de>de>&#47;usr&#47;share&#47;vim&#47;vim72&#47;syntax&#47;javascript.vimde></p>
<p>找到这段话：</p>
<p>if exists("javaScript_fold")<br />
    syn match   javaScriptFunction      "<function>"<br />
    syn region  javaScriptFunctionFold  start="<function>.*[^};]$" end="^z1}.*$" transparent fold keepend</p>
<p>    syn sync match javaScriptSync       grouphere javaScriptFunctionFold "<function>"<br />
    syn sync match javaScriptSync       grouphere NONE "^}"</p>
<p>    setlocal foldmethod=syntax<br />
    setlocal foldtext=getline(v:foldstart)<br />
else<br />
    syn keyword javaScriptFunction      function<br />
    syn match   javaScriptBraces           "[{}]"<br />
endif</p>
<p>syn sync fromstart</p>
<p>syn sync maxlines=100</p>
<p>将他们替换成：</p>
<p>syn region myFold start="{" end="}" transparent fold<br />
syn sync fromstart<br />
set foldmethod=syntax<br />
set foldtext=getline(v:foldstart)<br />
syn sync maxlines=100</p>
<p>即可</p>
