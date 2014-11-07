---
layout: post
status: publish
published: true
title: 利用grunt给使用requirejs的前端代码打包
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 1679
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=1679
date: !binary |-
  MjAxNC0wMS0yNyAxNjowMzoyMyArMDgwMA==
date_gmt: !binary |-
  MjAxNC0wMS0yNyAwODowMzoyMyArMDgwMA==
categories:
- WEB开发
- WEB前端技术
- Javascript
tags: []
comments: []
---
javascript技术是最近几年最活跃的技术之一，不但创造了非常好用的nodejs,

还基于nodejs产生了一堆非常好用的包机制，类库，web框架，还有就是项目集成与管理工具。

本文要介绍的是如何使用grunt 给前端代码打包。

这里的前端代码包括javascript代码，css代码，html代码。

grunt是基于nodejs的，所以在使用gruntjs之前，一定要确定你的nodejs环境已经可以工作。

grunt打包的机制非常的简单，主要是分成以下几步：

1、全局安装gruntjs

```
npm install -g grunt-cli
```

2、创建基于nodejs npm的package.json文件，用以明确当前目录下的打包信息：

```
{

  "name": "projectname",   //你的项目名

  "version": "0.1.0",      //给这个项目一个版本

  "description": "Open E-book project", //项目描述

  "homepage": "http://book.t1bao.com",   //项目的主页

  "repository": {                        //代码库的位置

    "type": "git",

    "url": "https://github.com/user/projectname"

  },

  "author": "北漂IT民工",    //作者名称

  "devDependencies": {      //依赖关系

  }

}
```

2、在package.json目录下安装grunt组件</p>
```
npm install grunt --save-dev
```

注意：一定要加上--save-dev，这样在package.json里就能自动的更新grunt的最新版本到devDependencies里面

3、安装相关的grunt插件
```
npm install grunt-contrib-cssmin --save-dev

npm install grunt-contrib-requirejs --save-dev

npm install grunt-contrib-htmlmin --save-dev

```

执行完这些命令后：

package.json的devDependencies将会变成是这样的：

```
  "devDependencies": {

    "grunt": "~0.4.2",

    "grunt-contrib-cssmin": "~0.7.0",

    "grunt-contrib-htmlmin": "~0.1.3",

    "grunt-contrib-requirejs": "~0.4.1"

  }
```

4、编写Gruntfile.js文件

```
module.exports = function(grunt) {

  grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),      //指定包的信息

      htmlmin: {                                     // html打包

        dist: {                                      //

          options: {                                 // Target options

            removeComments: true,

            collapseWhitespace: true

          },

          files: {                                   // 文件

            'dest/index.html': 'index.html',     // '目标html': '源html'

          }

        },

      },

      cssmin: {                                        //css打包

        styles: {

            src: ["a/b.css", 'styles/*.css'],

            dest: 'dest/styles/<%= pkg.name %>.min.css'

        },

      },

      requirejs: {

        compile: {

          options: {

              baseUrl: "scripts",                     //js根目录

              name: 'main',                           //执行的第一个requirejs包

              optimize: 'uglify',

              mainConfigFile: "scripts/config/global.js",                 //requirejs的配置文件

              out: "dest/scripts/<%= pkg.name %>.min.js",                 //输出的压缩文件

              findNestedDependencies: true,                               //必须指定让requirejs能找到嵌套的文件

              include: ['../Library/require.js']                          //指定requirejs所在的位置。

          }

        }

      }

  });

  //加载所需要的库

  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.loadNpmTasks("grunt-contrib-cssmin");

  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  //注册相应的类库

  grunt.registerTask('default', ['requirejs', 'cssmin', 'htmlmin']);

```

5、在真正打包前，hmlt文件也是需要有所变化的。

在打包前的开发版的js里，可能会存在很多的css,在打包的版本里只有一个css文件了。

js也是一样的。所以发布的html也需要做相应的调整。

变化如下：

css:

前

```html

<link rel="stylesheet" href="styles/a.css" />
<link rel="stylesheet" href="styles/b.css" />
<link rel="stylesheet" href="styles/c.css" />

```

后

```html

<link rel="stylesheet" href="styles/packagename.min.css" />

```

js:

前

```html
<script data-main="scripts/config/global" src="Library/require.js"></script>
```

后

```html
<script src="scripts/packagename.min.js"></script>
```

6、完成上述步骤，我们的环境与配置就已经写好了，现在就可以通过在控制台下面执行以下代码实现打包了。


```bash
>grunt

```

正常情况下，会出现如下的图片：

![](http://res.cloudinary.com/dawjytvkn/image/upload/v1390809495/QQ%E5%9B%BE%E7%89%8720140127155722_zf7wwo.jpg)

注意最后的:

Done, without errors.

如果没有出现这个，表明你的程序出错了。需要进一步的调试。

成功后，在你指定的对应的文档路径下面就会出现html, css, js, 在js一定要注册打包前后，css与他所使用的资源的位置文化，一定要将资源（如图片也复制到对应的目录下，保持相对位置的不变）。