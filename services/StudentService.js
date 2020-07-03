const Student = require('../models/Student');

export const takeSubject = (studentId, subjectId) => {
  const subjectTaken = {
    subject: subjectId,
    status: false,
  };

  Student.findByIdAndUpdate(
    studentId,
    {
      $push: { subject_taken: subjectTaken },
      $push: { subjects: subjectId },
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

export const completeSubject = (studentId, subjectId) => {
  const subjectTaken = {
    subject: subjectId,
    status: true,
  };

  Student.findByIdAndUpdate(studentId.subject_taken.subjectId, {
    $push: { subject_taken: subjectTaken },
  })
    .then((subject) => {
      return subject;
    })
    .catch((err) => {
      return err;
    });
};
