// const ee = require('@google/earthengine');
// const privateKey = require('./.privatekey.json');

// // Define endpoint at /mapid.
// const image = new ee.Image('srtm90_v4');
// image.getMap({ min: 0, max: 1000 }, function (map) {
//    console.log(map);
// });

// console.log('Authenticating Earth Engine API using private key...');
// ee.data.authenticateViaPrivateKey(
//    privateKey,
//    () => {
//       console.log('Authentication successful.');
//       ee.initialize(
//          null, null,
//          () => {
//             console.log('Earth Engine client library initialized.');
//             app.listen(port);
//             console.log(`Listening on port ${port}`);
//          },
//          (err) => {
//             console.log(err);
//             console.log(
//                `Please make sure you have created a service account and have been approved.
// Visit https://developers.google.com/earth-engine/service_account#how-do-i-create-a-service-account to learn more.`);
//          });
//    },
//    (err) => {
//       console.log(err);
//    });
