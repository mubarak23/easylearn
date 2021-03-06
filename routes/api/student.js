const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const router = express.Router();
const Student = require('../../models/Student');

// @route    Get api/takeSubject
// @desc     student taken a suject
// @access   Private (add require login as middlware)
router.get('/takeStudent/:studentId/:subjectId', async (req, res) => {
  return res.json(req.params.subjectId);
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
router.get('/completeSuject/:studentId/:subjectId', async (req, res) => {
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

// @route    Get api/student signup
// @desc     complete a suject
// @access   Public
router.post('/student/signup', async (req, res) => {
  const { name, email, password, school } = req.body;

  if (!email || !name || !password || !school) {
    return res.status(422).json({ error: 'please add all the field' });
  }
  //check user exists
  //return email;
  try {
    const newStudent = new Student({
      name,
      email,
      password,
      school,
    });
    const salt = await bcrypt.genSalt(10);
    newStudent.password = await bcrypt.hash(password, salt);
    await newStudent.save();
    return res.json({ message: 'saved successfully', data: newStudent });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    Post api/signin
// @desc     complete a suject
// @access   Public
router.post('/student/signin', async (req, res) => {
  //return res.json(req.body);

  const { email, password } = req.body;

  try {
    let student = await Student.findOne({ email });

    if (!student) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }
    const payload = {
      user: {
        id: student.id,
        email: student.email,
      },
    };

    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        return res.json({ token, student });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

//requireLogin
router.put('/take/subject/:studentId', (req, res) => {
  Student.findByIdAndUpdate(
    req.params.studentId,
    {
      $push: { subjects: req.body.subjectId },
    },
    { new: true },
    (err, result) => {
      if (err) {
        return res
          .status(422)
          .json({ error: err, message: 'This is first error' });
      }
      Student.findByIdAndUpdate(
        req.user._id,
        {
          $push: { subjects: req.body.subjectId },
        },
        { new: true }
      )
        .then((result) => {
          return res.json({ result });
        })
        .catch((err) => {
          return res.status(422).json({ error: err });
        });
    }
  );
});

module.exports = router;
