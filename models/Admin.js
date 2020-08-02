const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const AdminSchema = new mongoose.Schema({
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
  level: {
    type: Boolean,
    default: 1,
  },
});
module.exports = Admin = mongoose.model('Admin', AdminSchema);
