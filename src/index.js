// Require client library and private key.
const ee = require('@google/earthengine');
const Auth = require('./scripts/auth.js');

// ee.data.authenticateViaPrivateKey(privateKey, runAnalysis, function (e) {
//    console.error('Authentication error: ' + e);
// });

document.addEventListener('DOMContentLoaded', () => {
   console.log('before init');
   
   new Auth(ee);

   console.log('after init');

   // Run an Earth Engine script.
   var image = new ee.Image('srtm90_v4');
   image.getMap({ min: 0, max: 1000 }, function (map) {
      console.log(map);
   });

})