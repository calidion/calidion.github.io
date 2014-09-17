---
layout: post
status: publish
published: true
title: JQuery 下面判断有没有当前值的Option的方法
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1569
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1569
date: !binary |-
  MjAxMy0wNy0wNCAwOToyOTo0NiArMDgwMA==
date_gmt: !binary |-
  MjAxMy0wNy0wNCAwMToyOTo0NiArMDgwMA==
categories:
- 编程技术
- WEB开发
- WEB前端技术
- Javascript
tags: []
comments: []
---

前端开发时经常需要判断是不是当前的值已经有Option了，如果有就将当前值的Option选中。

下面的代码就是让你如何找到值为val的option，并选中它。

1、如何判断是不是有当前值为val的Option?

```
    $('option[value=' + val + ']', node.__last).length > 0

```

2、如何将找到的Option选中呢？

```
$('option[value=' + val + ']', node.__last).attr('selected', 'selected');

```

3、所以合起来的代码：

```javascript
    if ($('option[value=' + val + ']', node.__last).length > 0) {
    
    $('option[value=' + val + ']', node.__last).attr('selected', 'selected');
    
    }

```

4、如何需要创建新的Option呢？

node为select对应的jquery对象

```
    var option = $('<option>');
    option.html(text);
    option.val(val);
    option.attr('selected', 'selected');
    node.append(option);

```