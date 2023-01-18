// Require client library and private key.
// const Auth = require('./scripts/auth.js');
const ee = require('../node_modules/@google/earthengine');


// ee.data.authenticateViaPrivateKey(privateKey, runAnalysis, function (e) {
//    console.error('Authentication error: ' + e);
// });

document.addEventListener('DOMContentLoaded', () => {
   console.log(window.location.href);


   // Initialize client library and run analysis.
   ee.data.authenticateViaOauth('714908911037-v3hbclsdn48e4dcvkk72jemktuh7q0h9.apps.googleusercontent.com');

   console.log(ee);

   ee.initialize();

   // Run an Earth Engine script.
   var image = new ee.Image('srtm90_v4');
   image.getMap({ min: 0, max: 1000 }, function (map) {
      console.log(map);
   });

})