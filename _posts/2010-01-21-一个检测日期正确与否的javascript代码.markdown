---
layout: post
status: publish
published: true
title: 一个检测日期正确与否的javascript代码
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 25
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=25
date: !binary |-
  MjAxMC0wMS0yMSAwOTo0NjowMiArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yMSAwMTo0NjowMiArMDgwMA==
categories:
- Javascript
tags:
- javascript
comments: []
---
```

function checkData(str) {

var year = /^(19|20|21)[0-9]{2}$/;

var month = /^(0[1-9])|(1[0-2])$/;

var date = /^(0[1-9])|([1-2][0-9])|(3[0-1])$/;</p>

var ystr = str.substring(0, str.length - 4);

var mstr = str.substring(str.length - 4, str.length - 2);

var dstr = str.substring(str.length - 2, str.length);

if(mstr == '02') {

  if ((ystr - 0) % 4 == 0) {

    if(dstr - 0 > 29) return false;

  } else {

    if (dstr - 0 > 28) return false;

  }

} else if ((mstr - 0) % 2 == 0) {

  //只需要验证不大于31天的月份

  if (dstr - 0 > 30) return false;

}

return year.test(ystr) && month.test(mstr) && date.test(dstr);

}

checkData("20120229");
```
