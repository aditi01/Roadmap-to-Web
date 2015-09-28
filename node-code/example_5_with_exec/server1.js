var url=require("url");
var http=require("http");
function start(route, handle) {
	function onRequest(request, response) {
		var pathname=url.parse(request.url).pathname;	
		console.log("Request for the pathname"+pathname);
		route(handle, pathname, response);
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server has started");
}
exports.start=start;