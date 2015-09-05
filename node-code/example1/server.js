
//to display "Hello World" on the terminal after executing the command nodejs example1.js
function helloWorld() {
	console.log("Hello World");
}

//Creating my first application

//Making the http present in Node available
function server1() {
	var http =require("http");

	http.createServer(function (request, response) {
		//for the http header to declare the status code
		response.writeHead(404,{"Content-Type": "text/plain"});
		//to write on the Browser
		response.write("Hello World");
		response.end();
	}).listen(8888);
	//message displayed in the terminal where the server is running
	console.log("server running on http://localhost:8888");
}

//Server with the presence of counter(1-2-3-4-5...)
function counter1() {
	var http=require("http");
	var count=0;
	http.createServer(function (request,response) {
		var resObj = {}
		switch(request.url){
			case '/india':
				resObj = {
					message: 'you requested for india'
				};
				break;
			default:
				resObj = {
					message: 'you requested for a page that does not exist'
				};

		}

		console.log(request.url);
		response.end(resObj.message);
		//response.writeHead(200,{"Content-Type":"text/plain"});
		//response.write("Counter Server\n");
		//count += 1;
		//response.end('The count is:' +count +'\n');
	}).listen(8080);
	console.log("server running on http://localhost:8888/");
}

//Server with the presence of a counter(1-3-5-7-9...)
function counter2() {
	var http=require("http");
	var count=0;
	http.createServer(function (request,response) {
		console.log('request received ');
		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write("Counter Server\n");
		count += 1;
		response.end('The count is:' +count +'\n');
	}).listen(8888,"127.0.0.1");
	console.log("server running on http://127.0.0.1:8888/");
}

//Server which displays the count of the request being sent and for what purpose
function counter3() {
	var http=require("http");
	var count=0;
	http.createServer(function (request,response) {
		response.writeHead(200, {"Content-Type":"text/plain"});
		response.write("Count request");
		count += 1;
		console.log('count-' +count+'-'+request.url);
		response.end("The count is:" +count+'\n');
	}).listen(8888,"127.0.0.1");
	console.log("Server running on http://127.0.0.1:8888/");
}

//Execute the below functions to see the result of the above
// helloWorld();
// server1();
 counter1();
//counter2();
// counter3();
