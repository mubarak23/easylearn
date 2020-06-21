import Subject, { create } from '../models/Subject';

export const createSubject = (subject_data) => {
  const { name, content, image_url, other_url, video_url } = subject_data;
  //move to route

  const createSubject = new Subject({
    name,
    content,
    image_url,
    video_url,
    other_url,
  });
  return createSubject.save();
};

export const update = (subject_data, subjectId) => {
  Subject.findOne({ _id: subjectId }).then((user) => {
    if (!subject) {
      return res.status(422).json({ error: 'Subject no found' });
    }
    (subject.name = subject_data.name),
      (subject.content = subject_data.content),
      (subject.video_url = subject_data.video_url),
      (subject.other_url = subject.other_url);
    subject
      .save()
      .then((subject) => {
        return res.json({ message: 'subject details updated successfully' });
      })
      .catch((err) => {
        return res.json({ err });
      });
  });
};
