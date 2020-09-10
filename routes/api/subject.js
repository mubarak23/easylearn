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
router.get('/subject', (req, res) => {
  //return res.json('this is the first point');
    Subject.find().then(subjects =>{
      return res.json({ subjects });
    }).catch((err) => {
      console.log(err);
    });
  
});

// @route    PUT api/subject
// @desc     Update a Subject
// @access   Private
router.put('/subject/:id', async (req, res) => {
  const subjectId = req.params.id;
  res.json(subjectId);
  const subject_data = req.body;
  try {
    const update_subject = await Subject.findOne({ _id: subjectId });
    (update_subject.name = subject_data.name),
      (update_subject.content = subject_data.content),
      (update_subject.video_url = subject_data.video_url),
      (update_subject.other_url = subject_data.other_url);
    const update = await update_subject.save();
    return res.status(500).send({ update });
  } catch (err) {
    console.log(err);
    return res.status(500).send('internal server error');
  }
});

module.exports = router;
