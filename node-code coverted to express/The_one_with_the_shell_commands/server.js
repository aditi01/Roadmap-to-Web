var http=require("http");
var url=require("url");
var express = require("express");
var consolidate=require("consolidate");//1
var handlebars=require("handlebars");//2
var bodyParser = require('body-parser');

var router = require('./router');

var app = express();
app.use(bodyParser.urlencoded({
                extended: true,
            }));
             
            app.use(bodyParser.json({limit: '5mb'}));

app.set('views', 'views');
app.use(express.static('./public')); 
app.set('view engine','html');  //Set the folder-name from where you serve the html page.
app.engine('html',consolidate.handlebars);
var portNumber = 8000; //for locahost:8000

http.createServer(app).listen(portNumber, function(){
	console.log('Server listening at port '+ portNumber);
	router.initialize(app); //function defined in routes.js which is exported to be accessed by other modules
});

/* 1. Not all the template engines work uniformly with express, hence this library in js, (consolidate), is used to make the template engines work uniformly. Altough it doesn't have any 
modules of its own and any template engine to be used should be seprately installed!*/

/*2. Handlebars is a library in js, which is a template engine. In this code we use handlebars to declare variables in the HTML page of this code and defining its value in the routes.js.
Here the variable is declared in {{}} in the HTML page*/