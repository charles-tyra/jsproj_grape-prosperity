// Require client library and private key.
const Auth = require('./scripts/auth.js');
const ee = require('../node_modules/@google/earthengine');


// ee.data.authenticateViaPrivateKey(privateKey, runAnalysis, function (e) {
//    console.error('Authentication error: ' + e);
// });

document.addEventListener('DOMContentLoaded', () => {
   console.log(window.location.href);

   // Initialize client library.
   new Auth(ee);

   console.log('after auth');

   ee.initialize();

   // Run an Earth Engine script.
   var image = new ee.Image('srtm90_v4');
   image.getMap({ min: 0, max: 1000 }, function (map) {
      console.log(map);
   });

})