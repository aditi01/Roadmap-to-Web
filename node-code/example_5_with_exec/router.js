function route(handle, pathname, response) {
	console.log("About to route the pathname"+pathname);
	if(typeof handle[pathname]==='function') {
		handle[pathname](response);
	}
	else {
		console.log("Pathname requested for is not found");
		response.writeHead(404, {"Content-Type":"text/plain"});
		response.write("404 Not Found");
		response.end();
	}
}
exports.route=route;