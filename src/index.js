// Require client library and private key.
const ee = require('@google/earthengine');
const express = require('express');
const privateKey = require('../privatekey.json');

const port = process.env.PORT || 3000;

// Define endpoint at /mapid.
const app = express().get('/mapid', (_, response) => {
   const srtm = ee.Image('CGIAR/SRTM90_V4');
   const slope = ee.Terrain.slope(srtm);
   slope.getMap({ min: 0, max: 60 }, ({ mapid }) => response.send(mapid));
});

console.log('Authenticating Earth Engine API using private key...');
ee.data.authenticateViaPrivateKey(
   privateKey,
   () => {
      console.log('Authentication successful.');
      ee.initialize(
         null, null,
         () => {
            console.log('Earth Engine client library initialized.');
            app.listen(port);
            console.log(`Listening on port ${port}`);
         },
         (err) => {
            console.log(err);
            console.log(
               `Please make sure you have created a service account and have been approved.
Visit https://developers.google.com/earth-engine/service_account#how-do-i-create-a-service-account to learn more.`);
         });
   },
   (err) => {
      console.log(err);
   });

document.addEventListener('DOMContentLoaded', () => {
   // const root = document.getElementById('map')
// Auth initialization -- focusing on html and css then coming back
   // Initialize client library.
   // console.log('before auth');
   // new Auth(ee);
   // console.log('after auth');

   // ee.initialize();
   // console.log('after init')

   // Run an Earth Engine script.
   // var image = new ee.Image('srtm90_v4');
   // image.getMap({ min: 0, max: 1000 }, function (map) {
   //    console.log(map);
   // });
})