var packager = require('electron-packager');  
var config = require('./package.json');

packager({  
  dir: './',
  out: './dist',
  name: "atsumori",
  platform: 'win32',
  arch: 'x64',
  version: '1.7.5',

  'app-bundle-id': 'jp.phi.electron-app',
  'app-version': "0.0.1",

  overwrite: true,
  asar: true,
  prune: true,
  ignore: "node_modules/(electron-packager|electron-prebuilt|\.bin)|release\.js",
}, function done (err, appPath) {
  if(err) {
    console.log(err);
  }
  console.log('Done!!');
});
