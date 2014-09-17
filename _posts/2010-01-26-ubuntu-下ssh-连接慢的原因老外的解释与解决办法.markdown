---
layout: post
status: publish
published: true
title: Ubuntu 下ssh 连接慢的原因老外的解释与解决办法
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 275
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=275
date: !binary |-
  MjAxMC0wMS0yNiAxODowMjowNiArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAxMDowMjowNiArMDgwMA==
categories:
- Ubuntu
tags:
- ssh
- Ubuntu
comments: []
---
<p>默认情况下<br />
&#47;etc&#47;ssh&#47;ssh_config文件里的GSSAPIAuthentication被设置成了yes,这样会导致一个连接_kerberos.<hostname>的DNS请求。<br />
除非对外界的请求被中断，否则ssh的会话直到DNS请求超时才会继续下去。不是一个什么问题，<br />
只是会对内网访问造成一定的痛苦。</p>
<p>所以解决的办法是把这个 GSSAPIAuthentication默认设置成 no就可以了。<br />
ssh_config and GSSAPIAuthentication</p>
<p>The default Fedora ssh_config file comes with GSSAPIAuthentication set<br />
to "yes".  This causes a DNS query in an attempt to resolve<br />
_kerberos.<hostname> whenever ssh is invoked.  During periods when<br />
connectivity to the outside world is interrupted for whatever reason,<br />
the ssh session won't proceed until the DNS query times out.  Not really<br />
a problem, just more of an annoyance when trying to ssh to another<br />
machine on the LAN.</p>
<p>Is there a reason why the default ssh_config comes with<br />
GSSAPIAuthentication set to yes?</p>
<p>Thanks,<br />
Jay</p>
