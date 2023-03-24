const express = require('express');
const path = require('path');
const fs = require('fs');
const api = require('./')

const PORT = 3002;      //using 3002 instead of 3001 because I'm testing 2 at once
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, './public/notes.html'))
);
//----NOTE-----//
// To see the info in the db, go to localhost:{port number}/api/notes




app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);

