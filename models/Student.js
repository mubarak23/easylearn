const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: email,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  subject_taken: [
    {
      type: ObjectId,
      ref: Subject,
    },
  ],
});

module.exports = Student = mongoose.model('Student', StudentSchema);
