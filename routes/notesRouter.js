const notes = require('express').Router();


notes.get('/', (req,res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    console.log(req.body);

    const { title, text} =  req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
        };

        //need to read/append here
    }
})