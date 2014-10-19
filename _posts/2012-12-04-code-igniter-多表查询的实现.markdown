---
layout: post
status: publish
published: true
title: Code igniter 多表查询的实现
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1510
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1510
date: !binary |-
  MjAxMi0xMi0wNCAwMzoxOToxNyArMDgwMA==
date_gmt: !binary |-
  MjAxMi0xMi0wNCAwMzoxOToxNyArMDgwMA==
categories:
- 其它
tags: []
comments:
- id: 99
  author: Code igniter 多表查询的实现 | alaxs的家园
  author_email: ''
  author_url: http://www.hot360.net/?p=862
  date: !binary |-
    MjAxMi0xMi0wNCAwNTo0Nzo0MyArMDgwMA==
  date_gmt: !binary |-
    MjAxMi0xMi0wNCAwNTo0Nzo0MyArMDgwMA==
  content: ! '[...] 希望能对新人会有帮助。   view plaincopy to [...] '
---
<p>网上关于Code Igniter的多表查询的例子比较少。<br />
大家大部分使用的是join。</p>
<p>但是这不表示ci不能多表查询。</p>
<p>下面给一个ci的多表查询的示例代码，摘自一个函数<br />
希望能对新人会有帮助。</p>
<pre name='code' class="php">
    $this->db->select('<br />
        bu_g_l.alias as name,<br />
        bu_g_l.info as intro,<br />
        bu_g_l.code,<br />
        ');</p>
<p>    $this->db->from(<br />
        $this->_table_name . ' as u_t_g_l,' .<br />
        $this->_table_name_user_tag . ' as u_t,' .<br />
        $this->_table_name_business_unit_goods . ' as bu_g,' .<br />
        $this->_table_name_business_unit_goods_list . ' as bu_g_l,' .<br />
    );</p>
<p>    $this->db->where('u_t.user_id', $user_id);<br />
    $this->db->where('u_t.tag_id', $tag_id);<br />
    $this->db->where('(u_t_g_l.user_tag_id = u_t.user_tag_id)');<br />
    $this->db->where('(u_t_g_l.business_unit_goods_id = bu_g.id)');<br />
    $this->db->where('(bu.id = bu_g.business_unit_id)');</p>
<p>    if($limit) {<br />
      $this->db->limit($limit, $offset);<br />
    }</p>
<p>    $query = $this->db->get();<br />
    $error = $this->db->_error_message();<br />
    if ($error)<br />
      return -1;<br />
    return $query->result_array();</p>
<p></pre></p>
