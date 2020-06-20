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
