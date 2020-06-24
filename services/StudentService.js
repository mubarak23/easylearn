import Student from '../models/Student';
import Subject from '../models/Subject';


export const takeSubject = (studentId, subjectId) => {
  const subjectTaken = {
    subject: subjectId,
    status: false,
  };

  Student.findByIdAndUpdate(
    studentId,
    {
      $push: { subject_taken: subjectTaken },
    },
    {
      new: true,
    }
  )
    .then((subject) => {
      return subject;
    })
    .catch((err) => {
      return err;
    });
};
