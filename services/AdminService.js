//import { json } from 'body-parser';

const Subject = require('../models/Subject');

export const DeleteSubject = (id) => {
  Subject.findById({ _id: id }).then((subject) => {
    if (!subject) {
      return false;
    }
    subject.remove().then((result) => {
      return json(result);
    });
  });
};
