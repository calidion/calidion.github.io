define('boot', ['mobileViewportScale'], function(mvs) {
  var keyPair = {
    'userAgent': navigator.userAgent,
    'screenWidth': screen.width,
    'screenHeight': screen.height,
    'documentWidth': document.documentElement.clientWidth,
    'documentHeight': document.documentElement.clientHeight,
    'windowWidth': innerWidth,
    'windowHeight': innerHeight
  }

  for (var k in keyPair) {
    document.getElementById(k).innerHTML = keyPair[k];
  }

  function initDevice() {
    var keyPair = {
      'userAgent': navigator.userAgent,
      'screenWidth': screen.width,
      'screenHeight': screen.height,
      'documentWidth': document.documentElement.clientWidth,
      'documentHeight': document.documentElement.clientHeight,
      'windowWidth': innerWidth,
      'windowHeight': innerHeight,
      'zoomLevel': mvs.getZoomLevel
    }

    for (var k in keyPair) {
      var value = keyPair[k] instanceof Function ? keyPair[k]() : keyPair[k];
      document.getElementById(k).innerHTML = value;
    }
  }

  initDevice();
  window.onresize = function () {
    initDevice();
  }

  console.log(mvs);

  document.getElementById('submit').addEventListener('click', function () {
    console.log('clicked');

    var width = document.getElementById('width').value;
    var userScalable = document.getElementsByName('userScalable')[0].value;
    var initScale = document.getElementById('initScale').value;
    var minScale = document.getElementById('minScale').value;
    var maxScale = document.getElementById('maxScale').value;
    alert('set Viewport');
    mvs.setViewport(width, userScalable, initScale, minScale, maxScale);
    
    return false;
  });

  document.querySelector('form').addEventListener('submit', function () {
    console.log("inside submit");
    return false;
  });
});