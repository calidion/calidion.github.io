---
layout: post
status: publish
published: true
title: Ubuntu 9.10 下通过ffmpeg实现MKV提取音频到MP3
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 29
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=29
date: !binary |-
  MjAxMC0wMS0yMSAwOTo1NDowNyArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yMSAwMTo1NDowNyArMDgwMA==
categories:
- Ubuntu
tags: []
comments: []
---
```shell
  
  sudo apt-get build-dep ffmpeg</p>

  sudo apt-get install build-essential checkinstall

  sudo apt-get install liblame-dev libfaad-dev libfaac-dev

  libxvidcore-dev liba52-*  libx264-dev libopenjpeg-dev

  sudo apt-get source ffmpeg

  cd ffmpeg-*

  sudo ./configure --enable-gpl --enable-nonfree --enable-libdc1394 --enable-libdirac --enable-libfaac --enable-libfaad --enable-libfaadbin --enable-libgsm --enable-libmp3lame --enable-libopenjpeg --enable-libschroedinger --enable-libspeex  --enable-libtheora --enable-libvorbis --enable-libx264

sudo make

sudo make install

sudo ffmpeg -i input.ac3 -acodec libmp3lame -ar 44100 -ab 192k -ac 2 out.mp3

```