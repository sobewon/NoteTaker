const notes = require('express').Router();
const fs = require('fs');


notes.get('/', (req,res) => {
    readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    console.log(req.body);

    const { title, text} =  req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
        };

        //need to append here
        fs.writeFile('../db/db.json', JSON.stringify(newNote))
        res.json('Note sucessfully added!')
    } else {
        res.errored('Error in adding note')
    }
})

module.exports = notes;