
var exec = require("child_process").exec;

function initialize(app, db) {

	console.log("About to route the pathname");
	//Setting up an event listener for GET request to '/' 
	app.get('/', function(req, res) {  //app.get is used for rendering the html file in the broser when the "localhost:8000/" url is loaded
        console.log('request to / received');
        res.render("Shell.html"); //command to render the html page onto the browser
    });

    app.post('/upload', function (req, res) { //app.post command is used for the POST functionality to be executed by the AJAX call. It is also used when user is sending data to the server
    	console.log("request for /upload recieved"); 

		console.log(req.body); //1.
		exec(req.body.input, function(error, stdout, stderr) { //exec function that processes the input by the user and outputs stdout or stderr 
			res.json({ //the response that is sent from the server to the browser in the form of JSON, the result in the data.js file displays the message and the output
				message: 'The result for the command is:',
				output: stdout
			});
			if(error) {	
				res.json ({
					output: stderr
				});
			}
    	});
	});
}
exports.initialize = initialize; //exporting the initialize function from routes.js so as to let this function to be accessed by the other modules, eg., server.js

/*1. console.log to display the input that is sent as a request by the user in the form as an object which is displayed in the terminal. req.body is used to fetch the input that is 
entered by the user, which is sent to the server as a request and the command is stored in the res.body*/