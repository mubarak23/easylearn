const express = require('express');
const router = express.Router();
const { createSubject } = require('../../services/SubjectService');

// @route    POST api/posts
// @desc     Create a Subject
// @access   Private
router.post(async (req, res) => {
  const { name, content, image_url, other_url, video_url } = req.body;
  if (!name || !content || !image_url) {
    return resizeBy.status(422).json({ error: 'Please filled all field' });
  }
  try {
    const subjectdata = req.body;
    const newsubject = await createSubject(subjectdata);
    return res.status(201).json(newsubject);
  } catch (err) {
    console.log(err);
    return res.status(500).send('internal server error');
  }
});
