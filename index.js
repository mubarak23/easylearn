const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');
const router = express.Router();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

//setup the middlware

//route endpoints

app.get('/', function () {
  return 'Welcome Sturborn server';
});

//app.use('/api/subject', require('./routes/api/subject'));
app.use(express.json());
app.use(require('./routes/api/subject'));
app.use(require('./routes/api/student'));
app.use(require('./routes/api/admin'));

//port selection
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
