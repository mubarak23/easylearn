const mongoose = require('mongoose');

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
});

module.exports = Subject = mongoose.model('Subject', SujectSchema);
