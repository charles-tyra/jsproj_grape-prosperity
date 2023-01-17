class Auth {
   constructor(ee) {
      this.ee = ee;
      this.authOAuth();

      // Specific use for Server-side Auth, use of private-key.json
      // this.authPrivateKey();
   }

   // authentication of OAuth v2.0 for client-side authorization
   authOAuth() {
      const clientID = '714908911037 - v3hbclsdn48e4dcvkk72jemktuh7q0h9.apps.googleusercontent.com'


      this.ee.data.authenticateViaOauth(clientID, initialize, function (e) {
         console.error('Authentication error: ' + e);
      }, null, function () {
         ee.data.authenticateViaPopup(initialize);
      });
   }

   // authentication of private-key for server-side authorization
   authPrivateKey() {
      const privateKey = require('../../private-key.json');

      this.ee.data.authenticateViaPrivateKey(
         privateKey,
         () => {
            console.log('Authentication successful.');
            ee.initialize(
               null, null,
               () => {
                  console.log('Earth Engine client library initialized.');
               },
               (err) => {
                  console.log(err);
               });
         },
         (err) => {
            console.log(err);
         });
   }
}

module.exports = Auth;