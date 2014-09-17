var fs = require('fs');
var async = require('async');

var dir = './_posts';
console.log(process.argv);
if (process.argv.length > 2) {
  dir = process.argv[2];
}

console.log(dir);

fs.readdir(dir, function (err, files) {
  async.each(files, function (file, next) {
    var before = dir + "/" + file;
    console.log(before);
    var after = decodeURIComponent(before);
    console.log(after);
    if (after.indexOf('.markdown') != -1) {
      fs.rename(before, after, function () {
        console.log('moved:' + before);
      });
    }
  });

});
