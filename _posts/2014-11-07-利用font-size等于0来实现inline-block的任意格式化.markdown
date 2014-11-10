---
layout: post
status: publish
published: true
title: ! '利用font-size等于0来实现inline-block的任意格式化'
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
categories:
- 前端技术
tags: []
comments: []
---
通常对于inline-block元素，我们都不能在它们的中间放入空格，否则就会影响到相应的布局。
但是当你将inline-block作为结构元素来布局时，通常是不希望空格影响到你的布局。这时你可以考虑将font-size调整为0来取消空格产生的影响。

```css
ul > li {
    display: inline-block;
    vertical-align: top;
    list-style: none;
    text-align: center;
    color: #454545;
    background-color: #fff;
    width: 128px;
    font-size: 24px;
}

ul > li.active {
    border-bottom: 4px solid #4560e9;
}
```

比如在font-size=0之前，HTML代码必须是这样的。


```html
<ul><li class="active">全部</li><li>待付款</li><li>已付款</li><li>待评价</li><li class="more">更多</li></ul>
```


font-size=0之后，
代码就可以变成是这样的：


```html
        <ul>
            <li class="active">全部</li>
            <li>待付款</li>
            <li>已付款</li>
            <li>待评价</li>
            <li class="more">更多</li>
        </ul>
```

这时inline-block之间的空格就被忽略了，从而实现了通过inline-block来实现block的效果。