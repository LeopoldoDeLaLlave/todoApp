

var express = require('express');

var todoController  =require('./controllers/todoController.js');

var app = express();

//set up template engines
app.set('view engine', 'ejs');
 
//static files
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//fire controllers 
 
todoController(app);
 
//listen to port
app.listen(3000);
console.log("port 3000");