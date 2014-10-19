---
layout: post
status: publish
published: true
title: 将javascript对象属性排序与遍历javascript属性的方法
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 137
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=137
date: !binary |-
  MjAxMC0wMS0yNiAxNTozMDozMyArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwNzozMDozMyArMDgwMA==
categories:
- Javascript
tags:
- javascript
- 属性
- 排序
- 遍历
comments: []
---
<pre name="code" class="javascript">
var myobj = {'2007': {<br />
                  '5': {<br />
                                    '01' : [{'tit':'abc','mon':123,'typ':2},{'tit':'abc','mon':123,'typ':2}],<br />
                                        '03' : [{'tit':'abc','mon':123,'typ':2},{'tit':'abc','mon':123,'typ':2}],<br />
                                        '02' : [{'tit':'abc','mon':123,'typ':2},{'tit':'abc','mon':123,'typ':2}]<br />
                                        },</p>
<p>                                '6' : {<br />
                                    '04' : [{'tit':'abc','mon':123,'typ':2},{'tit':'abc','mon':123,'typ':2}],<br />
                                        '08' : [{'tit':'dd','mon':123,'typ':2},{'tit':'abc','mon':123,'typ':2}],<br />
                                        '02' : [{'tit':'abc','mon':123,'typ':2},{'tit':'abc','mon':123,'typ':2}]<br />
                                        }<br />
                                    },<br />
                            '2006': {<br />
                  '3': {<br />
                                    '01' : [{'tit':'abc','mon':123,'typ':2},{'tit':'abc','mon':123,'typ':2}],<br />
                                        '03' : [{'tit':'abc','mon':123,'typ':2},{'tit':'abc','mon':123,'typ':2}],<br />
                                        '02' : [{'tit':'abc','mon':123,'typ':2},{'tit':'abc','mon':123,'typ':2}]<br />
                                        },</p>
<p>                                '4': {<br />
                                    '04' : [{'tit':'abc','mon':123,'typ':2},{'tit':'abc','mon':123,'typ':2}],<br />
                                        '08' : [{'tit':'abc','mon':123,'typ':2},{'tit':'abc','mon':123,'typ':2}],<br />
                                        '02' : [{'tit':'abc','mon':123,'typ':2},{'tit':'abc','mon':123,'typ':2}]<br />
                                        }<br />
                                    }<br />
                    };</p>
<p>//delete obj['2009']['5']['1'];</p>
<p>var sortObject = function(obj){<br />
var tmpArr = [];</p>
<p>    for(var key in obj){<br />
        if(obj[key].constructor == Object){<br />
            obj[key] = sortObject(obj[key]);<br />
        }<br />
        tmpArr.push(key);<br />
    }<br />
    tmpArr.sort();<br />
    var o = {}<br />
    for( var i = 0; i <tmpArr.length ; i ++){<br />
        o[tmpArr[i]] = obj[tmpArr[i]];<br />
    }<br />
    return o;<br />
}</p>
<p>var newobj = sortObject(myobj);<br />
var listObject = function(obj){<br />
for(var i in obj){<br />
    alert(i);<br />
}<br />
for(var i in obj){<br />
if(obj[i].constructor == Object){<br />
    listObject(obj[i]);<br />
}<br />
}<br />
}<br />
listObject(newobj);<br />
</pre></p>
