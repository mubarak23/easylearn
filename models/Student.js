const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
const Subject = require('./Subject');
const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
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
  role: {
    type: Number,
    default: 3,
  },
  status: {
    type: Number,
    default: 1,
  },
  subjects: [
    {
      type: ObjectId,
      ref: Subject,
    },
  ],

  subject_taken: [
    {
      subject: {
        id: String,
      },
      status: {
        type: Boolean,
      },
    },
  ],
});

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;
