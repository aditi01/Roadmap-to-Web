function route(handle, pathname, response, postData) {
	console.log("About to route the pathname"+pathname);
	if(typeof handle[pathname]==='function') {
		handle[pathname](response,postData);
	}
	else {
		console.log("No request handler found for the pathname"+pathname);
	}
}
//exporting the route function so that it can be used by the server function outside the router.js
exports.route=route;