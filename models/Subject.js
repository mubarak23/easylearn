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
  video_link: {
    type: String,
  },
  image_link: {
    type: String,
  },
  other_links: {
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
