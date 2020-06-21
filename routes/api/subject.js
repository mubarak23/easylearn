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


// @route    PUT api/subject
// @desc     Update a Subject
// @access   Private
router.put('/subject/:id', (req, res) =>{
  const subjectId = req.params.id,
  const subject_data = req.body
  try{
    const updatesubject = await updatesubject(subject_data, subjectId);
  }catch (err) {
    console.log(err);
    return res.status(500).send('internal server error');
  }
})



