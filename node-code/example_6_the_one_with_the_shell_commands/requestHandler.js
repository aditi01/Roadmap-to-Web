var querystring=require("querystring");
var exec = require("child_process").exec;

function start(response, postData) {
	console.log("Request Handler handling the start function");
	//to define the html body of the code
	var body=	'<html>' +
	'<head>' +
	'<meta http-equiv="Content-Type" content="text/html; '+
	'charset=UTF-8" />'+
	'</head>' +
	'<body>'+
	'<form action="/upload" method="post">' +
	'<div style="font-weight:bold; font-size:0.3in; color:rgba(20,20,100,0.8);"><p>Welcome to Aditi\'s first App! :)</p>'+
	'<textarea name="text" style="color:black;"> </textarea>' +
	'<input type="submit" value="Submit text"/>' +
	'</form>'+
	'</body>'+
	'</html>';
	//end of html which is going to display a text area and a submit button in the front end once index.js is run in the terminal

	response.writeHead(200, {"Content-Type":"text/html"});
	response.write(body);//reffering to the body variable which consists of the html code
	response.end();
}

function upload(response, postData) {
	console.log("Request Handler handling the upload function");
	/*command variable consists of the shell command that is typed in the textbox of the html page in the browser which is then processed by the exec function which is written 
	later in the code which then after processing displayes the result on the browser, stdout*/
	var command=querystring.parse(postData).text;
	console.log("The command sent is"+command);

	exec(command, function(error, stdout, stderr) {
		response.writeHead(200, {"Content-Type":"text/plain"});
		response.write("The command requested for is"+command+"\n");
		response.write(stdout);
		if(error) {
			response.write(stderr);
		}
		response.end();
	});
}

exports.start=start;
exports.upload=upload;