var querystring=require("querystring");
var exec = require("child_process").exec;

function initialize(app) {

	console.log("About to route the pathname"+pathname);
	app.get('/', function(req, res) {  //app.get is used for rendering the html file in the broser when the "localhost:8000/" url is loaded
        console.log('request to / received');
        res.render("Shell.html"); //command to render the html page onto the browser
    });

    app.post('/upload', function (req, res) { //app.post command is mainly used for the POST functionality to be executed by the AJAX call. This command is mainly used when user is sending data to the server
    	console.log("request for /upload recieved");
    	var command=querystring.parse(postData).text;
		console.log("The command sent is"+command);
		exec(command, function(error, stdout, stderr) {
			res.json({
				message: 'The result for the command is:',
				output: stdout
			});
			if(error) {
				res.json ({
					output: stderr
				});
			}
    	});
	}
}
exports.initialize = initialize; 