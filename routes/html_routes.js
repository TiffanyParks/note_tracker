// const router = require('express').Router();
// //Import built-in Node.js package 'path' to resolve path of files that are located on the server
// const path = require('path');

// // Below route sends 'index.html' as a response to a client when a GET request is made
// router.get('/', (req, res) => 
//     res.sendFile(path.join(__dirname, '../public/index.html'))
// );
// // Below route sends 'notes.html" as a response to a client when a GET request is made 
// router.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/notes.html'))
// });

module.exports = router;