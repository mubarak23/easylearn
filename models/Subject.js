const mongoose = require('mongoose');
const Student = require('./Student');
const { ObjectId } = mongoose.Schema.Types;

const SujectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: Text,
    required: true,
  },
  video_url: {
    type: String,
  },
  image_url: {
    type: String,
  },
  other_url: {
    type: String,
  },
  students: [
    {
      type: ObjectId,
      ref: Student,
    },
  ],
});

module.exports = Subject = mongoose.model('Subject', SujectSchema);