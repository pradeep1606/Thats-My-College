// models/College.js
const mongoose = require('mongoose');

const branchesSchema = new mongoose.Schema({
  B_Tech: {
    type: [String],
    default: [],
  },
  M_Tech: {
    type: [String],
    default: [],
  },
  Diploma: {
    type: [String],
    default: [],
  },
  MBA: {
    type: [String],
    default: [],
  },
});

const collegeSchema = new mongoose.Schema({
  id: String,
  name: String,
  address: String,
  contact: String,
  city: String,
  state: String,
  collegeType: String,
  university: String,
  logo: String,
  image: [String],
  courses: [
    {
      courseName: String,
      fee: Number,
      eligibility: String,
    },
  ],
  branches: [branchesSchema], // Use the branchesSchema as a subdocument
  message: String,
  details: String,
  rating: Number,
  featured: Boolean,
});

const College = mongoose.model('College', collegeSchema);

module.exports = College;
