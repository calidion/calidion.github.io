---
layout: post
status: publish
published: true
title: 一个Google App Engine的请求分派框架
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 180
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=180
date: !binary |-
  MjAxMC0wMS0yNiAxNjo0Nzo0NiArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwODo0Nzo0NiArMDgwMA==
categories:
- 新闻
- WEB开发
tags:
- Google App Engine
- 框架
comments: []
---
<p>作了一个APPENGINE的请求分派框架<br />
这样就可以将不同的请求分派到不同的类里面去了。<br />
很容易修改与维护</p>
<pre name="code" class="py">
#encoding=UTF-8<br />
import wsgiref.handlers<br />
import os</p>
<p>from os import environ<br />
from google.appengine.ext import webapp<br />
from google.appengine.ext import db<br />
from google.appengine.ext.webapp import template</p>
<p>from appengine_utilities.sessions import Session</p>
<p>import User<br />
import PhoneBook</p>
<p>class MainPage(webapp.RequestHandler):<br />
tpath = os.path.dirname(__file__)<br />
def get(self):<br />
    self.response.out.write(template.render(os.path.dirname(__file__) + "&#47;template&#47;index.html",{'register': '&#47;user?act=register', 'login': '&#47;user?act=login'}))</p>
<p>def post(self):<br />
    self.response.out.write('Hello, webapp World! Post')<br />
class UnaryPage(webapp.RequestHandler):<br />
    def get(self, module):<br />
      s = Session()<br />
      if module == "user":<br />
        user = User(self, "get", s)<br />
      if module == "phonebook":<br />
        phonebook = PhoneBook(self, "get", s)<br />
    def post(self, module):<br />
      s = Session()<br />
      if module == "user":<br />
        user = User(self, 'post', s)<br />
      if module == "phonebook":<br />
        phonebook = PhoneBook(self, "post", s)</p>
<p>class BinaryPage(webapp.RequestHandler):<br />
    def get(self, module, act):<br />
      return<br />
    def post(self, module, act):<br />
      return<br />
class TernaryPage(webapp.RequestHandler):<br />
    def get(self, module, act, param):<br />
      return<br />
    def post(self):<br />
      return<br />
def main():<br />
application = webapp.WSGIApplication(<br />
    [<br />
    ('&#47;', MainPage),<br />
    ('&#47;(.*)&#47;(.*)&#47;(.*)', MainPage.TernaryPage),<br />
    ('&#47;(.*)&#47;(.*)', MainPage.BinaryPage),<br />
    ('&#47;(.*)', MainPage.UnaryPage),<br />
    ],<br />
      debug=True)<br />
wsgiref.handlers.CGIHandler().run(application)</p>
<p>if __name__ == "__main__":<br />
main()<br />
<&#47;pre></p>
