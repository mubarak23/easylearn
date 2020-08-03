const express = require('express');
const router = express.Router();
const Subject = require('../../models/Subject');
const {
  updateSubjects,
  allSubjects,
} = require('../../services/SubjectService');

// @route    POST api/posts
// @desc     Create a Subject
// @access   Private

router.post('/subject', async (req, res) => {
  const { name, content, image_url, other_url, video_url } = req.body;
  if (!name || !content || !image_url) {
    return res.status(422).json({ error: 'Please filled all field' });
  }
  try {
    const createSubject = new Subject({
      name,
      content,
      image_url,
      video_url,
      other_url,
    });
    const newsubject = await createSubject.save();
    return res.status(201).json(newsubject);
  } catch (err) {
    console.log(err);
    return res.status(500).send('internal server error');
  }
});

// @route    Get api/subject
// @desc     Fetch all Subject
// @access   Private
router.get('/subject', async (req, res) => {
  //return res.json('this is the first point');
  try {
    const allSubjects = Subject.find()
      .then((subjects) => {
        return subjects;
      })
      .catch((err) => {
        console.log(err);
        return json({ err });
      });
    return res.status(200).json({ allSubjects });
  } catch (err) {
    console.log(err);
    return res.status(500).send('internal server error');
  }
});

// @route    PUT api/subject
// @desc     Update a Subject
// @access   Private
router.put('/subject/:id', async (req, res) => {
  const subjectId = req.params.id;
  // return res.json(subjectId);
  const subject_data = req.body;
  try {
    const updatesubject = await updateSubjects(subject_data, subjectId);
  } catch (err) {
    console.log(err);
    return res.status(500).send('internal server error');
  }
});

module.exports = router;
