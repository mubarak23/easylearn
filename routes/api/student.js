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
   return  res.json({ message: 'saved successfully', data: newStudent });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});



// @route    Post api/signin
// @desc     complete a suject
// @access   Public
router.post('/student/signin',  async (req, res) => {
  //return res.json(req.body);

  const { email, password } = req.body;
  
  
  try {
     
    let student = await Student.findOne({ email });

      if (!student) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

     //const existsUser = await Student.findById(id)
     //return existsUser
    //if (existsUser) {
      //return res.status(400).json({ message: 'email or why password is incorect' });
    //}
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }
    const payload = {
      user: {
        id: student.id,
        email: student.email
      },
    };

    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
