const express = require('express');
const router = express.Router();
const { DeleteSubject } = require('../../services/AdminService');

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
