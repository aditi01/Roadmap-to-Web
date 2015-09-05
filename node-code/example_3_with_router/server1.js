var http = require("http");
var url = require("url");
function start(route) {
	function onRequest(request, response) {
		var pathname=url.parse(request.url).pathname;
		console.log("Request recieved from"+pathname);
		route(pathname);
		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write("Server with the router module without logic");
		response.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server started");
}
exports.start=start;
