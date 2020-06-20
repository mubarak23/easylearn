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
  role: {
    type: Integer,
    default: 3,
  },
  status: {
    type: Integer,
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
        type: Integer,
      },
    },
  ],
});

module.exports = Student = mongoose.model('Student', StudentSchema);
