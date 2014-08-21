---
layout: post
status: publish
published: true
title: 在iPhone一代机上安装android，iphone双系统
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 686
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=686
date: !binary |-
  MjAxMC0wNC0yMiAxNToxMDo0MCArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wNC0yMiAwNzoxMDo0MCArMDgwMA==
categories:
- 新闻
tags: []
comments: []
---
<p>iDroid: Android on your first-generation iPhone<br />
===============================================<br />
These instructions describe how to build an Android system for iPhone 2G from<br />
sources. These instructions are currently just notes and are being gradually<br />
worked into a more readable form. Please submit questions and suggestions for<br />
clarification to #iphonelinux on irc.osx86.hu.<br />
The essential pieces for booting Android are:<br />
1. Linux kernel<br />
2. Wi-Fi and touchscreen firmware<br />
3. Boot initrd<br />
4. Android ramdisk.img<br />
5. Android system.img<br />
6. Android userdata.img<br />
7. Android cache.img<br />
8. openiboot<br />
Instructions for pre-built images<br />
---------------------------------<br />
If you have a prebuilt android.img.gz, ramdisk.img, system.img, userdata.img<br />
and cache.img, you still need to follow the directions in the "Firmware"<br />
section and add all the firmware files to<br />
&#47;lib&#47;firmware in android.img.gz (it's a compressed ext2 image)<br />
&#47;etc&#47;firmware in system.img (it's an uncompressed ext2 image)<br />
After this, you can skip down to "Installation".<br />
Linux kernel<br />
------------<br />
1. Check out commit e27f17b5318851395a66cbaf1524ea89ff8f0cb9 of the<br />
android-2.6.32 branch of git:&#47;&#47;android.git.kernel.org&#47;kernel&#47;common<br />
2. Apply the patches from android&#47;kernel<br />
3. Fix the Makefile for your system (you may need to use Google's repo to<br />
check out your own copy of the Android toolchain).<br />
4. Use something based on android&#47;kernel&#47;.config as your .config<br />
5. Build<br />
Firmware<br />
--------<br />
These can't be redistributed due to copyright laws. The multitouch firmware<br />
will need to be extracted from your ioreg tree. Install iokittools from Cydia<br />
and perform ioreg -l -w 0 and pipe the result to some file. Read this file and<br />
look for entries under AppleMultitouchSPI for Firmware and A-Speed Firmware.<br />
These contain a simple hexadecimal encoding for the bytes of the firmware<br />
files. Convert and keep "Firmware" as zephyr_main.bin and "A-Speed Firmware"<br />
as zephyr_aspeed.bin.<br />
The firmware for the wi-fi can be found on Marvell's site at<br />
<a href="http:&#47;&#47;www.marvell.com&#47;support.html" target="_blank">http:&#47;&#47;www.marvell.com&#47;support.html<&#47;a> Under "Choose a platform", select "Linux<br />
2.6 - Fedora" and click the Search button under the drop down box. The<br />
SD-8686-* zip archive will contain the files. Rename helper_sd.bin to<br />
sd8686_helper.bin and keep that and sd8686.bin.<br />
So, you have zephyr_main.bin, zephyr_aspeed.bin, sd8686_helper.bin, and<br />
sd8686.bin.<br />
It's also possible to cut a more recent version of the Marvell firmware from<br />
the iPhone kernel. Can someone create a firmware cutter utility for this<br />
stuff?<br />
Boot initrd<br />
-----------<br />
The Android initrd was created under a Debian installation of iPhone Linux<br />
(which is not currently available) using the create-initrd-android.sh script.<br />
However, if you read it, you can figure out generally how it's done.<br />
YOU WILL NEED TO COPY ALL THE FIRMWARE *.bins TO &#47;lib&#47;firmware on this<br />
ramdisk!<br />
You end up with android.img.gz<br />
Android images<br />
--------------<br />
First, checkout 1.6 (Donut) using Google's repo tool. Copy vendor&#47;apple to<br />
vendor&#47;apple in their tree. Rename data&#47;sounds&#47;AudioPackage2.mk to<br />
data&#47;sounds&#47;Android.mk (if you want the built-in sounds).<br />
Copy all the firmware *.bins to vendor&#47;apple&#47;firmware as well.<br />
Then, apply android&#47;android.patch provided. Then, do the following to create a<br />
"generic" image:<br />
. build&#47;envsetup.sh<br />
choosecombo<br />
[Select device, debug, generic, engineering]<br />
export TARGET_USERIMAGES_USE_EXT2=true<br />
make -j4 PRODUCT-generic-eng<br />
Now wait forever for Android to build. You'll get ramdisk.img and system.img<br />
in out&#47;debug&#47;target&#47;product&#47;generic&#47;. Ignore the other .img files, we won't be<br />
using them.<br />
Android ramdisk.img<br />
-------------------<br />
Create a blank 1 MB file and make a ext2 filesystem on it. Mount it as a<br />
loopback device. Rename the ramdisk.img from Android to ramdisk.img.gz. Use<br />
gunzip on ramdisk.img.gz. Use cpio -i -F ramdisk.img as root with the current<br />
directory in the new ext2 filesystem to extract the ramdisk files onto the<br />
ramdisk.<br />
Apply android&#47;init.rc.patch to init.rc<br />
Make a directory called &#47;cache<br />
Unmount and you have your ramdisk.img<br />
Android system.img<br />
------------------<br />
You can just use the system.img Android compiled.<br />
Android userdata.img<br />
--------------------<br />
You can start with a perfectly empty userdata.img (as long as its properly<br />
formatted). However, without the Dalvik caches, the boot will hang the first<br />
couple of times until those can be generated. This is some strange timeout<br />
issue.<br />
After the initial boot, you have to do<br />
INSERT INTO secure (name, value) VALUES ('device_provisioned', 1);<br />
Using sqlite3 in the database<br />
&#47;data&#47;data&#47;com.android.providers.settings&#47;databases&#47;settings.db<br />
If the device is not "provisioned", it will automatically reject all incoming<br />
calls. Very stupid.<br />
Can someone please show me how this can be made less aggravating?<br />
Android cache.img<br />
-----------------<br />
This can just be an empty 50 MB ext2 filesystem.<br />
openiboot<br />
---------<br />
See the instructions in the openiboot folder in the iphonelinux repo.<br />
Installation<br />
------------<br />
0. Jailbreak your iPhone.<br />
1. Under the jailbroken environment, put ramdisk.img, system.img, ramdisk.img,<br />
userdata.img, cache.img, android.img.gz, and zImage in &#47;private&#47;var.<br />
2. Follow the instructions for installing openiboot.<br />
- Essentially:<br />
1. sudo .&#47;loadibec openiboot.img3<br />
2. Use Hold button to select Console<br />
3. Push Home button<br />
4. sudo .&#47;oibc<br />
5. Type install<br />
- loadibec and oibc are compiled for x86 Linux.<br />
- Need librickrb, pthreads, readline.<br />
Running<br />
-------<br />
In the openiboot bootloader, it should be enough to select Console with Hold<br />
and hold the Home button for more than two seconds to trigger the boot of<br />
Android.</p>
<p>附件在上传或者<a href="http:&#47;&#47;www.mediafire.com&#47;?xqjzn12igfn" target="_blank">http:&#47;&#47;www.mediafire.com&#47;?xqjzn12igfn<&#47;a>(需要Fanq1ang)</p>
