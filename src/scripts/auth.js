
class Auth {
   constructor(ee) {
      this.ee = ee;
      // Specific use for Client-side Auth, use of OAuth v2.0
      this.authOAuth();

      // Specific use for Server-side Auth, use of private-key.json
      // this.authPrivateKey();
   }

   // authentication of OAuth v2.0 for client-side authorization
   authOAuth() {
      this.ee.data.authenticateViaOauth('714908911037-v3hbclsdn48e4dcvkk72jemktuh7q0h9.apps.googleusercontent.com');
   }

   // authentication of private-key for server-side authorization
   authPrivateKey() {
      const privateKey = require('../../privatekey.json');

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