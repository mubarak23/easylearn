const express = require('express');
const router = express.Router();
const { DeleteSubject } = require('../../services/AdminService');
const Admin = require('../../models/Admin');

// @route     api/deleteSubject
// @desc     remove a subject
// @access   Private (add require login as middlware)
router.get('deleteSubject/:subjectId', async (req, res) => {
  try {
    const deleteSubject = deleteSubject(req.params.subjectId);
    if (deleteSubject == false) {
      return res.status(404).json({ message: 'subject does not exist' });
    }
    return res.status(200).json({ message: 'subject does not exist' });
  } catch (err) {
    console.log(err);
    return res.status(500).send('internal server error');
  }
});

// @route    Get api/completeSubject
// @desc     complete a suject
// @access   Public
router.post('/admin_signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !name || !password) {
    return res.status(422).json({ error: 'please add all the field' });
  }
  //check user exists
  try {
    let existsUser = Admin.findOne({ email });
    if (existsUser) {
      return res
        .status(400)
        .json({ message: 'User this email address already exists' });
    }
    const newAdmin = new Admin({
      name,
      email,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    newAdmin.password = await bcrypt.hash(password, salt);
    await newAdmin.save();
    res.json({ message: 'saved successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    Post api/signin
// @desc     complete a suject
// @access   Public
router.post('/admin_signin', async (req, res) => {
  const { email, password } = req.body;
  try {
    let existsUser = Admin.findOne({ email });
    if (existsUser) {
      return res.status(400).json({ message: 'email or password is incorect' });
    }
    const isMatch = await bcrypt.compare(password, existsUser.password);
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }
    const payload = {
      user: {
        id: existsUser.id,
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
