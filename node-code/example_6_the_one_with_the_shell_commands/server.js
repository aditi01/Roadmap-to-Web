var http=require("http");
var url=require("url");

function start(route, handle) {

	function onRequest(request, response) {
		var postData = "";
		var pathname=url.parse(request.url).pathname;

		console.log("Request for the pathname"+pathname+"recieved");
		request.setEncoding("utf8");

		request.addListener("data", function(postDataChunck) {
			postData=postData+postDataChunck;
			console.log("The present recieved chuck of data is:"+postDataChunck);
		});

		request.addListener("end", function() {
			route(handle, pathname, response, postData);
		});
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server has started");
}

exports.start=start;