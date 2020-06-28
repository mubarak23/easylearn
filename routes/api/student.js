const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const Student = require('../../models/Student');
const {
  takeSubject,
  completeSubject,
} = require('../../services/StudentService');

// @route    Get api/takeSubject
// @desc     student taken a suject
// @access   Private (add require login as middlware)
router.get('takeSuject/:studentId/:subjectId', async (req, res) => {
  try {
    const takesubject = takeSubject(req.params.studentId, req.params.subjectId);
    return res.status(201).json({ takesubject });
  } catch (err) {
    console.log(err);
    return res.status(500).send('internal server error');
  }
});

// @route    Get api/completeSubject
// @desc     complete a suject
// @access   Private (add require login as middlware)
router.get('takeSuject/:studentId/:subjectId', async (req, res) => {
  try {
    const takesubject = completeSubject(
      req.params.studentId,
      req.params.subjectId
    );
    return res.status(200).json({ takesubject });
  } catch (err) {
    console.log(err);
    return res.status(500).send('internal server error');
  }
});

// @route    Get api/completeSubject
// @desc     complete a suject
// @access   Private (add require login as middlware)
router.post('/signup', async (req, res) => {
  const { name, email, password, school } = req.body;
  if (!email || !name || !password || !school) {
    return res.status(422).json({ error: 'please add all the field' });
  }
  //check user exists
  try {
    let existsUser = Student.findOne({ email });
    if (existsUser) {
      return res.status(400).json({ message: 'User Exists' });
      const newStudent = new Student({
        name,
        email,
        password,
        school,
      });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }
  } catch (err) {}
});
