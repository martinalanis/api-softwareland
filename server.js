const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/todoListRoutes');
routes(app); //register the route

// app.listen(port);
// Mongoose Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://softwareland:saMGrlreyR3ogN7e@cluster0.pa9ru.mongodb.net/Tododb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

app.listen(port);

console.log(`todo list RESTful API server started on: ${port}`)
