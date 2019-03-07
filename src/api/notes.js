const express = require('express');

const { Note } = require('../models');


module.exports = express.Router()
  .get('/', async (req, res) => {
    res.status(200).send(await Note.find({}));
  })

  .post('/', async (req, res) => {
    const { title, text } = req.body;

    if (!title || !text) {
      res.status(400).send('Title or text is missing.');
    } else {
      await Note.create({ title, text });

      res.status(201).send();
    }
  })

  .get('/:_id', async (req, res) => {
    const { _id } = req.params;
    const note = await Note.findById(_id);

    if (!note) {
      res.status(400).send('Invalid ID.');
    } else {
      res.status(200).send(note);
    }
  })

  .put('/:_id', async (req, res) => {
    const { _id } = req.params;
    const { title, text } = req.body;
    const note = await Note.findById(_id);

    if (!note) {
      res.status(400).send('Invalid ID.');
    } else if (!title || !text) {
      res.status(400).send('Title or text is missing.');
    } else {
      await Note.updateOne({ _id }, {
        $set: {
          title,
          text,
          dateUpdate: Date.now(),
        },
      });

      res.status(200).send(await Note.findById(_id));
    }
  });
