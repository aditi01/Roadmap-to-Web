var url=require("url");
var http=require("http");
function start(handle, route) {
	function onRequest(request, response) {
		var pathname=url.parse(request.url).pathname;
		console.log("Request is recieved from the pathname:" +pathname);
		route(handle, pathname);
		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write("Server with request Handler");
		response.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server started");
}
exports.start=start;