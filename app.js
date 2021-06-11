
const express = require('express');
const mongoose = require("mongoose");
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');

const app = express();

//connetct db
mongoose.connect('mongodb://localhost/smartedu_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=>{
    console.log("db connected")
});

//Template engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/', pageRoute);
app.use('/courses', courseRoute);
app.use('/categories', categoryRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
