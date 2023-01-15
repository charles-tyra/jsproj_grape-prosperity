import Example from './scripts/example.js'
var ee = require('@google/earthengine');

document.addEventListener('DOMContentLoaded', () => {
   const root = document.querySelector('#root')

   new Example(root);
})