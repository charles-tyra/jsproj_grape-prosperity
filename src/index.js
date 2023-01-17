// Require client library and private key.
const ee = require('@google/earthengine');
const privateKey = require('../grape-prosperity-2dcd1d44c0bb.json');

// Initialize client library and run analysis.
const runAnalysis = function () {
   ee.initialize(null, null, function () {
      // ... run analysis ...
   }, function (e) {
      console.error('Initialization error: ' + e);
   });
};

document.addEventListener('DOMContentLoaded', () => {
   const root = document.querySelector('#root')

   ee.data.authenticateViaPrivateKey(privateKey, runAnalysis, function (e) {
      console.error('Authentication error: ' + e);
   });

   var image = new ee.Image('srtm90_v4');
   image.getMap({ min: 0, max: 1000 }, function (map) {
      console.log(map);
   });

   // initialize google earth stuff

   // // Load Landsat 8 data, filter by date, month, and bounds.
   // var collection = ee.ImageCollection('LANDSAT/LC08/C02/T1_TOA')
   //    .filterDate('2015-01-01', '2018-01-01')  // Three years of data
   //    .filter(ee.Filter.calendarRange(11, 2, 'month'))  // Only Nov-Feb observations
   //    .filterBounds(ee.Geometry.Point(25.8544, -18.08874));  // Intersecting ROI

   // // Also filter the collection by the CLOUD_COVER property.
   // var filtered = collection.filter(ee.Filter.eq('CLOUD_COVER', 0));

   // // Create two composites to check the effect of filtering by CLOUD_COVER.
   // var badComposite = collection.mean();
   // var goodComposite = filtered.mean();

   // // Display the composites.
   // Map.setCenter(25.8544, -18.08874, 13);
   // Map.addLayer(badComposite,
   //    { bands: ['B3', 'B2', 'B1'], min: 0.05, max: 0.35, gamma: 1.1 },
   //    'Bad composite');
   // Map.addLayer(goodComposite,
   //    { bands: ['B3', 'B2', 'B1'], min: 0.05, max: 0.35, gamma: 1.1 },
   //    'Good composite');
})