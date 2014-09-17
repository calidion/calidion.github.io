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

作了一个APPENGINE的请求分派框架
这样就可以将不同的请求分派到不同的类里面去了。
很容易修改与维护

```python

#encoding=UTF-8

import wsgiref.handlers

import os</p>

from os import environ

from google.appengine.ext import webapp

from google.appengine.ext import db

from google.appengine.ext.webapp import template

from appengine_utilities.sessions import Session

import User

import PhoneBook

class MainPage(webapp.RequestHandler):

tpath = os.path.dirname(__file__)

def get(self):

    self.response.out.write(template.render(os.path.dirname(__file__) + "/template/index.html",{'register': '/user?act=register', 'login': '/user?act=login'}))

def post(self):

    self.response.out.write('Hello, webapp World! Post')

class UnaryPage(webapp.RequestHandler):

    def get(self, module):

      s = Session()

      if module == "user":

        user = User(self, "get", s)

      if module == "phonebook":

        phonebook = PhoneBook(self, "get", s)

    def post(self, module):

      s = Session()

      if module == "user":

        user = User(self, 'post', s)

      if module == "phonebook":

        phonebook = PhoneBook(self, "post", s)

class BinaryPage(webapp.RequestHandler):

    def get(self, module, act):

      return

    def post(self, module, act):

      return

class TernaryPage(webapp.RequestHandler):

    def get(self, module, act, param):

      return

    def post(self):

      return

def main():

application = webapp.WSGIApplication(

    [

    ('/', MainPage),

    ('/(.*)/(.*)/(.*)', MainPage.TernaryPage),

    ('/(.*)/(.*)', MainPage.BinaryPage),

    ('/(.*)', MainPage.UnaryPage),

    ],

      debug=True)

wsgiref.handlers.CGIHandler().run(application)

if __name__ == "__main__":

main()
```