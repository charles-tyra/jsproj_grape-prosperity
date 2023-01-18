// Require client library and private key.
// const Auth = require('./scripts/auth.js');
const ee = require('@google/earthengine');


// ee.data.authenticateViaPrivateKey(privateKey, runAnalysis, function (e) {
//    console.error('Authentication error: ' + e);
// });

document.addEventListener('DOMContentLoaded', () => {
   console.log('before init');

   // Initialize client library and run analysis.
   var initialize = function () {
      ee.initialize(null, null, function () {
         // ... run analysis ...
      }, function (e) {
         console.error('Initialization error: ' + e);
      });
   };

   // Authenticate using an OAuth pop-up.
   ee.data.authenticateViaOauth('714908911037-v3hbclsdn48e4dcvkk72jemktuh7q0h9.apps.googleusercontent.com', initialize, function (e) {
      console.error('Authentication error: ' + e);
   }, null, function () {
      ee.data.authenticateViaPopup(initialize);
   });

   console.log('after init');

   // Run an Earth Engine script.
   var image = new ee.Image('srtm90_v4');
   image.getMap({ min: 0, max: 1000 }, function (map) {
      console.log(map);
   });

})