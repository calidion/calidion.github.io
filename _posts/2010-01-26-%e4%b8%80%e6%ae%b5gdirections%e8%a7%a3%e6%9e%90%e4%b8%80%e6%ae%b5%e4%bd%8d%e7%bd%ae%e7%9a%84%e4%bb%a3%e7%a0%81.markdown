---
layout: post
status: publish
published: true
title: 一段GDirections解析一段位置的代码
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 131
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=131
date: !binary |-
  MjAxMC0wMS0yNiAxNToyMDoyMiArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwNzoyMDoyMiArMDgwMA==
categories:
- Javascript
tags:
- GDirections
- Google Map API
comments: []
---
<pre name="code" class="javascript">
 GTFS.Data.Trip.prototype.verify = function(callback, force){<br />
if(this.programmedShapes && !force) {<br />
if(callback) callback(true);<br />
return;<br />
}<br />
var dir = new GDirections();<br />
if(this.programmedShapes) this.programmedShapes.hide();<br />
this.programmedShapes = new GTFS.Data.Shape();<br />
this.programmedShapes.addStoptimes(this.stoptimes);<br />
var idx = 0;<br />
var self = this;<br />
function onDirSuccess(){<br />
var leg = new GTFS.Data.Leg();<br />
var start = self.stoptimes[idx].marker.getLatLng();<br />
var end = self.stoptimes[idx + 1].marker.getLatLng();<br />
var points = [];<br />
var pol = this.getPolyline();<br />
var count = pol.getVertexCount();<br />
points.push({'lat': start.lat(), 'lng': start.lng()});<br />
for (var i = 0; i < count - 1; i++) {<br />
var point = pol.getVertex(i);<br />
points.push({'lat': point.lat(), 'lng': point.lng()});<br />
}<br />
points.push({'lat': end.lat(), 'lng': end.lng()});<br />
var color = GTFS.Data.Trip.colors.programmed;<br />
leg.setData(points, color);<br />
leg.show();<br />
self.stoptimes[idx + 1].preVerifyLeg = leg;<br />
self.stoptimes[idx].sufVerifyLeg = leg;<br />
self.programmedShapes.addLeg(leg);<br />
if(idx == self.stoptimes.length - 2) {<br />
if(callback) callback(true, idx);<br />
}  else {<br />
idx++;<br />
setTimeout(startDir, 100);  &#47;&#47;发现不加上timeout很容易就出错<br />
&#47;&#47;startDir();  </p>
<p>}<br />
}</p>
<p>function onDirFailure(){<br />
self.programmedShapes.hideLegs();<br />
self.programmedShapes = null;<br />
idx = 0;<br />
if(callback) callback(false, idx);<br />
}</p>
<p>function startDir(){<br />
var start = self.stoptimes[idx];<br />
var end = self.stoptimes[idx + 1];<br />
var query = "from: " + start.getQuery() + " to: " + end.getQuery();<br />
dir.load(query, {<br />
getPolyline: true<br />
});</p>
<p>}</p>
<p>GEvent.addListener(dir, 'load', onDirSuccess);<br />
GEvent.addListener(dir, 'error', onDirFailure);<br />
startDir();<br />
}<br />
<&#47;pre></p>
