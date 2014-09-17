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

```javascript

 GTFS.Data.Trip.prototype.verify = function(callback, force){

if(this.programmedShapes && !force) {

if(callback) callback(true);

return;

}

var dir = new GDirections();

if(this.programmedShapes) this.programmedShapes.hide();

this.programmedShapes = new GTFS.Data.Shape();

this.programmedShapes.addStoptimes(this.stoptimes);

var idx = 0;

var self = this;

function onDirSuccess(){

var leg = new GTFS.Data.Leg();

var start = self.stoptimes[idx].marker.getLatLng();

var end = self.stoptimes[idx + 1].marker.getLatLng();

var points = [];

var pol = this.getPolyline();

var count = pol.getVertexCount();

points.push({'lat': start.lat(), 'lng': start.lng()});

for (var i = 0; i < count - 1; i++) {

var point = pol.getVertex(i);

points.push({'lat': point.lat(), 'lng': point.lng()});

}

points.push({'lat': end.lat(), 'lng': end.lng()});

var color = GTFS.Data.Trip.colors.programmed;

leg.setData(points, color);

leg.show();

self.stoptimes[idx + 1].preVerifyLeg = leg;

self.stoptimes[idx].sufVerifyLeg = leg;

self.programmedShapes.addLeg(leg);

if(idx == self.stoptimes.length - 2) {

if(callback) callback(true, idx);

}  else {

idx++;

setTimeout(startDir, 100);  //发现不加上timeout很容易就出错

//startDir();  </p>

}

}

function onDirFailure(){

self.programmedShapes.hideLegs();

self.programmedShapes = null;

idx = 0;

if(callback) callback(false, idx);

}

function startDir(){

var start = self.stoptimes[idx];

var end = self.stoptimes[idx + 1];

var query = "from: " + start.getQuery() + " to: " + end.getQuery();

dir.load(query, {

getPolyline: true

});

}

GEvent.addListener(dir, 'load', onDirSuccess);

GEvent.addListener(dir, 'error', onDirFailure);

startDir();

}

```