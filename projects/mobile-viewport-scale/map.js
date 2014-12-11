define('map', function () {

  var oses = [
    {
      'pattern': /android/,
      'name': 'android'
    }, {
      'pattern': /iphone/
    }
  ]

  var browsers = [{
    'pattern': /micromessager/,
    'name': 'wechat'
  }, {
    'pattern': /chrome/,
    'name': 'chrome'
  }];

  var devices = [{
    'pattern': /sm-n9008s/,
    'name': 'android'
  }];

  var viewports =
      {
        'smn9008s': {
          width: 'device-width',
          'init-scale': 0
        },
        'android': {
          width: 'device-width',
          'init-scale': 0
        },
        'iphone': {
          width: 'device-width',
          'init-scale': 0.5,
          'maximum-scale': 1.0
        }
      };

  function parse(userAgent) {
    userAgent = userAgent.toLowerCase();

    var i = 0;

    for (i = 0; i < devices.length; i++) {
      if (devices[i].pattern.test(userAgent)) {
        return devices[i].pattern.name;
      }
    }
    for (i = 0; i < oses.length; i++) {
      if (oses[i].pattern.test(userAgent)) {
        return oses[i].pattern.name;
      }
    }
    return 'android';
  }

  return {
    parse: parse
  }
});