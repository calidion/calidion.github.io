---
layout: post
status: publish
published: true
title: Python实现的HTTP Server Push的代码
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1062
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1062
date: !binary |-
  MjAxMC0wNS0yMiAxOToxNToyOSArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wNS0yMiAxMToxNToyOSArMDgwMA==
categories:
- Python
- Server Push
tags:
- HTTP
- python
- Server Push
comments: []
---
<pre name="code" class="py">
#!/usr/bin/python<br />
from BaseHTTPServer import BaseHTTPRequestHandler,HTTPServer<br />
from datetime import datetime<br />
import time</p>
<p>BOUNDARY = '####DATA####'<br />
SEND_BOUNDARY = '--' + BOUNDARY + 'n'</p>
<p>class MyServer(BaseHTTPRequestHandler):<br />
  def do_GET(self):<br />
    self.send_response(200, 'OK')<br />
    self.send_header('Content-type', 'mulitpart/x-mixed-replace;boundary=' +<br />
      BOUNDARY)<br />
    self.wfile.write(SEND_BOUNDARY)<br />
    i = 0<br />
    self.send_header('Content-type', 'text/html;charset=utf-8')<br />
    self.end_headers();<br />
    self.wfile.write( "<html>")<br />
    self.wfile.write( "<head>")<br />
    self.wfile.write( "<title>Hello world</title>")<br />
    self.wfile.write( "</head>")<br />
    self.wfile.write( "<body>")<br />
    self.wfile.write( "<a> start ed </a>")<br />
    self.wfile.write( "</body>")<br />
    self.wfile.write( "</html>n")<br />
    while(True):<br />
      self.wfile.write( "<html>")<br />
      self.wfile.write( "<head>")<br />
      self.wfile.write( "<title>Hello world</title>")<br />
      self.wfile.write( "</head>")<br />
      self.wfile.write( "<body>")<br />
      self.wfile.write( "<a>hello" + datetime.now().isoformat() + "</a>")<br />
      self.wfile.write( "</body>")<br />
      self.wfile.write( "</html>n")<br />
      self.wfile.flush()<br />
      #self.wfile.write(SEND_BOUNDARY)<br />
      i += 1<br />
      print "loop = %s" % i<br />
      time.sleep(3)</p>
<p>  @staticmethod<br />
  def serve_forever(port):<br />
    HTTPServer(('', port), MyServer).serve_forever()</p>
<p>if __name__ == "__main__":<br />
  MyServer.serve_forever(9090)<br />
</pre></p>
