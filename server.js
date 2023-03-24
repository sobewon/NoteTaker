const express = require('express');
const path = require('path');
const fs = require('fs');
const api = require('./routes/index.js')

const PORT = 3002;      //using 3002 instead of 3001 because I'm testing 2 at once
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);

app.use(express.static('public'));
//----NOTE-----//
// To see the info in the db, go to localhost:{port number}/api/notes

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);

/*

*/