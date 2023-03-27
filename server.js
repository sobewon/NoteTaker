const express = require('express');
const path = require('path');
const api = require('./routes/notesRouter')
const htmlRoute = require('./routes/index')

const PORT = 5001;     //changed, but keeping the text to the right as a reminder for running 2 at a time //using 3002 instead of 3001 because I'm testing 2 at once
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use('/', htmlRoute); //this was the problem, it's the route for the info
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
);

//TEMP AT '/notes1'   FOR TESTING and LESS CONFUSION, CHANGE BACK TO '/notes/ WHEN DONE
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

//----NOTE-----//
// To see the info in the db, go to localhost:{port number}/api/notes

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);