import Subject, { create } from '../models/Subject';

export const createUbject = (subject_data) => {
  const { name, content, image_url, other_url, video_url } = subject_data;
  //move to route
  //if (!name || !content || !image_url) {
  //return resizeBy.status(422).json({ error: 'Please filled all field' });
  //}
  const createSubject = new Subject({
    name,
    content,
    image_url,
    video_url,
    other_url,
  });
  return createSubject.save();
};
