const { Schema, model } = require('mongoose');
const uuid = require('uuid');


const noteSchema = new Schema({
  _id: {
    type: String,
    default: uuid,
  },

  title: {
    type: String,
    minLength: 1,
    required: true,
  },

  text: {
    type: String,
    minLength: 1,
    required: true,
  },

  dateCreate: {
    type: Number,
    default: Date.now(),
  },

  dateUpdate: {
    type: Number,
    default: Date.now(),
  },
}, {
  versionKey: false,
});

module.exports = model('Note', noteSchema);
