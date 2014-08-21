---
layout: post
status: publish
published: true
title: 使用kill -9来强行杀死进程
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 279
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=279
date: !binary |-
  MjAxMC0wMS0yNiAxODowNDoyOSArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAxMDowNDoyOSArMDgwMA==
categories:
- Ubuntu
tags:
- kill
- Linux
comments: []
---
<p>在Linux系统下面有一些进程无法用kill直接杀死。<br />
这时你可以试一下kill -9 pid的方式来杀死进程<br />
这里9实际上对应的是进程消息里的KILL消息。<br />
会无阻塞的杀死一个LINUX进程。<br />
Kill参数的对照表：<br />
       Name     Num   Action    Description<br />
       0          0   n&#47;a       exit code indicates if a signal may be sent<br />
       ALRM      14   exit<br />
       HUP        1   exit<br />
       INT        2   exit<br />
       KILL       9   exit      this signal may not be blocked<br />
       PIPE      13   exit<br />
       POLL           exit<br />
       PROF           exit<br />
       TERM      15   exit<br />
       USR1           exit<br />
       USR2           exit<br />
       VTALRM         exit<br />
       STKFLT         exit      may not be implemented<br />
       PWR            ignore    may exit on some systems<br />
       WINCH          ignore<br />
       CHLD           ignore<br />
       URG            ignore<br />
       TSTP           stop      may interact with the shell<br />
       TTIN           stop      may interact with the shell<br />
       TTOU           stop      may interact with the shell<br />
       STOP           stop      this signal may not be blocked<br />
       CONT           restart   continue if stopped, otherwise ignore<br />
       ABRT       6   core<br />
       FPE        8   core<br />
       ILL        4   core<br />
       QUIT       3   core<br />
       SEGV      11   core<br />
       TRAP       5   core<br />
       SYS            core      may not be implemented<br />
       EMT            core      may not be implemented<br />
       BUS            core      core dump may fail<br />
       XCPU           core      core dump may fail<br />
       XFSZ           core      core dump may fail</p>
