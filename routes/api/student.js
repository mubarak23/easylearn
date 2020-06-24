const express = require('express');
const router = express.Router();

const { takeSubject } = require('../../services/StudentService');

// @route    Get api/takeSubject
// @desc     student taken a suject
// @access   Private (add require login as middlware)
router.get('takeSuject/:studentId/:subjectId', async (req, res) => {
  try {
    const takesubject = takeSubject(req.params.studentId, req.params.subjectId);
    return res.status(200).json({ takesubject });
  } catch (err) {
    console.log(err);
    return res.status(500).send('internal server error');
  }
});
