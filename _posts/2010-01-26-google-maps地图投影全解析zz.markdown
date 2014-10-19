---
layout: post
status: publish
published: true
title: Google Maps地图投影全解析zz
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 291
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=291
date: !binary |-
  MjAxMC0wMS0yNiAxOTo1MDoxNiArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAxMTo1MDoxNiArMDgwMA==
categories:
- WEB开发
tags:
- Google Maps API
- 投影
comments: []
---
<p><strong>出处：<a href="http://www.gisempire.com/bbs/dispbbs.asp?boardID=23&amp;ID=71998&amp;page=2" target="_blank">http://www.gisempire.com/bbs/dispbbs.asp?boardID=23&amp;ID=71998&amp;page=2</a></p>
<p></strong></p>
<p>Google Maps地图投影全解析(1)：Web墨卡托投影</p>
<p>Google Maps、Virtual Earth等网络地理所使用的地图投影，常被称作Web Mercator或Spherical Mercator，它与常规墨卡托投影的主要区别就是把地球模拟为球体而非椭球体。建议先对地图投影知识做一个基本的了解，《<a href="../../liongg/blog/item/3e016e06c5ceea7f0208810e.html" target="_blank">地图投影为什么</a>》。</p>
<p><strong>什么是墨卡托投影？</strong></p>
<p>墨 卡托(Mercator)投影，又名&ldquo;等角正轴圆柱投影&rdquo;，荷兰地图学家墨卡托（Mercator）在1569年拟定，假设地球被围在一个中空的圆柱里， 其赤道与圆柱相接触，然后再假想地球中心有一盏灯，把球面上的图形投影到圆柱体上，再把圆柱体展开，这就是一幅标准纬线为零度（即赤道）的&ldquo;墨卡托投影&rdquo; 绘制出的世界地图。从球到平面，有个转换公式，这里就不再罗列。</p>
<p><strong>Google</strong><strong>们为什么选择墨卡托投影？</strong></p>
<p>墨卡托投影的&ldquo;等角&rdquo;特性，保证了对象的形状的不变行，正方形的物体投影后不会变为长方形。&ldquo;等角&rdquo;也保证了方向和相互位置的正确性，因此在航海和航空中常常应用，而Google们在计算人们查询地物的方向时不会出错。</p>
<p>墨卡托投影的&ldquo;圆柱&rdquo;特性，保证了南北（纬线）和东西（经线）都是平行直线，并且相互垂直。而且经线间隔是相同的，纬线间隔从标准纬线（此处是赤道，也可能是其他纬线）向两级逐渐增大。</p>
<p>但是，&ldquo;等角&rdquo;不可避免的带来的面积的巨大变形，特别是两极地区，明显的如格陵兰岛比实际面积扩大了N倍。不过要是去两极地区探险或科考的同志们，一般有更详细的资料，不会来查看网络地图的，这个不要紧。</p>
<div><img title="Google Maps地图投影全解析zz - 糊涂虫3000 - 糊涂虫3000的博客" src="http://h.imagehost.org/0248/1_13.jpg" border="0" alt="Google Maps地图投影全解析zz - 糊涂虫3000 - 糊涂虫3000的博客" /></div></p>
<div>（图片来源，Nelson Jhon）</div><br />
<strong>为什么是圆形球体，而非椭球体？</strong></p>
<p>这说来简单，仅仅是由于实现的方便，和计算上的简单，精度理论上差别0.33%之内，特别是比例尺越大，地物更详细的时候，差别基本可以忽略。</p>
<p><strong>Web</strong><strong>墨卡托投影坐标系</strong>：</p>
<p>以整个世界范围，赤道作为标准纬线，本初子午线作为中央经线，两者交点为坐标原点，向东向北为正，向西向南为负。</p>
<p>X轴：由于赤道半径为6378137米，则赤道周长为2*PI*r = 2*20037508.3427892，因此X轴的取值范围：[-20037508.3427892,20037508.3427892]。</p>
<p>Y轴：由墨卡托投影的公式可知，同时上图也有示意，当纬度&phi;接近两极，即90&deg;时，y值趋向于无穷。这是那些&ldquo;懒惰的工程师&rdquo;就把Y轴的取值范围也限定在[-20037508.3427892,20037508.3427892]之间，搞个正方形。</p>
<p>懒 人的好处，众所周知，事先切好静态图片，提高访问效率云云。俺只是告诉你为什么会是这样子。因此在投影坐标系（米）下的范围是：最小 (-20037508.3427892, -20037508.3427892 )到最大 (20037508.3427892, 20037508.3427892)。</p>
<p><strong>对应的地理坐标系</strong><strong>:</strong></p>
<p>按道理，先讲地理坐标系才是，比如球体还是椭球体是地理坐标系的事情，和墨卡托投影本关联不大。简单来说，投影坐标系(PROJCS)是平面坐标系，以米为单位；而地理坐标系(GEOGCS)是椭球面坐标系，以经纬度为单位。具体可参考《<a href="../../liongg/blog/item/81d7b48f8bdfb0ebf01f36fd.html" target="_blank">坐标系、坐标参照系、坐标变换、投影变换</a>》。</p>
<p>经度：这边没问题，可取全球范围：[-180,180]。</p>
<p>纬 度：上面已知，纬度不可能到达90&deg;，懒人们为了正方形而取的-20037508.3427892，经过反计算，可得到纬度 85.05112877980659。因此纬度取值范围是[-85.05112877980659，85.05112877980659]。其余的地区怎 么办？没事，企鹅们不在乎。</p>
<p>因此，地理坐标系（经纬度）对应的范围是：最小(-180,-85.05112877980659)，最大(180, 85.05112877980659)。至于其中的Datum、坐标转换等就不再多言。</p>
<p><strong>Google Maps地图投影全解析(2)：相关坐标计算</strong></p>
<p>关于Google Maps等的组织方式&mdash;&mdash;地图瓦片金字塔，估计我在这里重复一遍这玩意，怕也是没人看了。尽管原理都一样，但具体到写不同厂商不同数据源的代码时，你会发 现，可缩放级别数不一样，最小级别不一样，编码方式不一样，比如Google的QRST，微软的四*树，OSGeo的TMS等。</p>
<p>然而，你或许也不必这么麻烦，因为这些算法在网络上早已遍布朝野，你尽可从他人博客中获取，或是从开源软件里学习。这本身都不是秘密，微软自己也是公布的。</p>
<p>《<a href="http://www.maptiler.org/google-maps-coordinates-tile-bounds-projection/" target="_blank">Tiles &agrave; la Google Maps</a>》 用交互性地方式可得到任一Tile的边界范围，各种流行编码方式等。该页面的链接都非常有价值，部分也是本文写作的重要参考。作者用python完成了下 列坐标之间转换算法：经纬度（出现在KML中的坐标，WMS的BBOX参数等），平面坐标XY（米，Web Mercator投影坐标系），金字塔的XYZ（即X轴的位置，Y轴的位置，和缩放级别ZoomLevel），每个Tile的编码Key值（QRST或 0123等）。转换时，还需要注意两个概念，Ground Resolution和Map Scale。</p>
<div><img title="Google Maps地图投影全解析zz - 糊涂虫3000 - 糊涂虫3000的博客" src="http://h.imagehost.org/0967/2_8.gif" alt="Google Maps地图投影全解析zz - 糊涂虫3000 - 糊涂虫3000的博客" /></div></p>
<div>（图片来源：Tiles &agrave; la Google Maps）</div><br />
Ground Resolution，地面分辨率，类似Spatial Resolution（空间分辨率），我们这里主要关注用象元(pixel size)表示的形式：一个像素(pixel)代表的地面尺寸(米)。以Virtual Earth为例，Level为1时，图片大小为512*512（4个Tile），那么赤道空间分辨率为：赤道周长/512。其他纬度的空间分辨率则为 纬度圈长度/512，极端的北极则为0。Level为2时，赤道的空间分辨率为 赤道周长/1024，其他纬度为 纬度圈长度1024。很明显，Ground Resolution取决于两个参数，缩放级别Level和纬度latitude ，Level决定像素的多少，latitude决定地面距离的长短。地面分辨率的公式为，单位：米/像素：</p>
<p>ground resolution =&nbsp;&nbsp;(cos(latitude * pi/180) * 2 * pi * 6378137 meters) / (256 * 2level pixels)</p>
<p>Map Scale，即地图比例尺，小学知识，图上距离比实地距离，两者单位一般都是米。在Ground Resolution的计算中，由Level可得到图片的像素大小，那么需要把其转换为以米为单位的距离，涉及到DPI（dot per inch），暂时可理解为类似的PPI（pixelper inch），即每英寸代表多少个像素。256 * 2level / DPI 即得到相应的英寸inch，再把英寸inch除以0.0254转换为米。实地距离仍旧是：cos(latitude * pi/180) * 2 * pi * 6378137 meters; 因此比例尺的公式为，一般都化为1：XXX，无单位：</p>
<p>map scale = 256 * 2level / screen dpi / 0.0254 / (cos(latitude * pi/180) * 2 * pi * 6378137)</p>
<p>= 1 : (cos(latitude * pi/180) * 2 * pi * 6378137 * screen dpi) / (256 * 2level * 0.0254)</p>
<p>其实，Map Scale 和 Ground Resolution存在对应关系，毕竟都和实地距离相关联，两者关系：map scale = 1 : ground resolution * screen dpi / 0.0254 meters/inch</p>
<p>《<a href="http://msdn.microsoft.com/en-us/library/bb259689.aspx" target="_blank">Virtual Earth Tile System</a>》列举了Virtual Earth在赤道上，Level、像素数、地面分辨率、地图比例尺的对应关系，同时本文也简单介绍了Mercator投影和上述两个概念，推荐。</p>
<p>此外，《<a href="http://intepid.com/stuff/gmkh/" target="_blank">Addressing Google Maps image tiles</a>》应用程序，输入经纬度和缩放级别，即可缩放到相应的Google Maps位置，而且可以显示出查找过程的QRST。JavaScript实现的算法，也可以抓下来和《Tiles &agrave; la Google Maps》对比下，从经纬度到Tile编码的转换。</p>
<p><img title="Google Maps地图投影全解析zz - 糊涂虫3000 - 糊涂虫3000的博客" src="http://www.gisempire.com/bbs/Skins/Default/topicface/face0.gif" border="0" alt="发贴心情" align="absmiddle" /> <strong>Google Maps地图投影全解析(3)：WKT形式表示</strong></p>
<p>update20090601：EPSG对该投影的编号设定为EPSG：3857，对应的WKT也发生了变化，下文不再修改，相对来说格式都是那样，可以到<a href="http://www.epsg-registry.org/" target="_blank">http://www.epsg-registry.org</a> 网站输入SRID进行查询。</p>
<p>Google Maps和Virtual Earth等的流行程度不用多讲，然而他们所使用的Web Mercator或Spherical Mercator在很长一段时间内并没有被EPSG的投影数据库所接纳。EPSG认为它不能算作科学意义上的投影，所以只是给了一个 EPSG：900913的标号（SRID），这个标号游离在EPSG常规标号范围之外。（EPSG、SRID是什么？参见《<a href="../../liongg/blog/item/5a311f30dc1fc69ca9018e2e.html" target="_blank">EPSG 、SRID</a>》。）</p>
<p>到了2008年5月（据SharpGIS同学）， EPSG恍然明白，不管椭球体还是球体，其实都是对地球的模拟，只是精确程度上的差别，没有本质上的不同。或者是不得不接受广泛的事实标准，接纳了这个投影，定义<strong>投影坐标系</strong><strong>PROJCS</strong>的名字为&ldquo;Popular Visualisation CRS / Mercator&rdquo;，SRID为EPSG:3785；<strong>地理坐标系</strong><strong>GEOGCS</strong>的名字为&ldquo;Popular Visualisation CRS&rdquo;，SRID为&ldquo;EPSG:4055&rdquo;。这些标号已经进入&ldquo;正常范围&rdquo;。（PS：这个Visualisation 是英式英语写法？）</p>
<p>PROJCS 的WKT《<a href="../../liongg/blog/item/a60e35fa1900078c9e5146b8.html" target="_blank">Well Known Text</a>》写法如下，GEOGCS、Datum等的WKT表示参见《<a href="http://www.sharpgis.net/post/2008/05/SphericalWeb-Mercator-EPSG-co<wbr>de-3785.aspx" target="_blank">Spherical/Web Mercator: EPSG code 3785》</a>。附带说一句，Web Mercator在ESRI公司的编号（ESRI叫它Well Known ID？）暂时是102113，或许偶尔用得到。<br />
PROJCS["Popular Visualisation CRS / Mercator",</p>
<p>GEOGCS["Popular Visualisation CRS",</p>
<p>DATUM["Popular_Visualisation_Datum",</p>
<p>SPHEROID["Popular Visualisation Sphere",6378137,0,</p>
<p>AUTHORITY["EPSG","7059"]],</p>
<p>TOWGS84[0,0,0,0,0,0,0],</p>
<p>AUTHORITY["EPSG","6055"]],</p>
<p>PRIMEM["Greenwich",0,</p>
<p>AUTHORITY["EPSG","8901"]],</p>
<p>UNIT["degree",0.01745329251994328,</p>
<p>AUTHORITY["EPSG","9122"]],</p>
<p>AUTHORITY["EPSG","4055"]],</p>
<p>UNIT["metre",1,</p>
<p>AUTHORITY["EPSG","9001"]],</p>
<p>PROJECTION["Mercator_1SP"],</p>
<p>PARAMETER["central_meridian",0],</p>
<p>PARAMETER["scale_factor",1],</p>
<p>PARAMETER["false_easting",0],</p>
<p>PARAMETER["false_northing",0],</p>
<p>AUTHORITY["EPSG","3785"],</p>
<p>AXIS["X",EAST],</p>
<p>AXIS["Y",NORTH]] </p>
