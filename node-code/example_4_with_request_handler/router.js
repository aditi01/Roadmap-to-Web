function route(handle, pathname) { 
	console.log("About to be routed to" +pathname);
	//condition to verify if the requested pathname has a respective requestHandler associated with it
	if(typeof handle[pathname]==='function') {
		handle[pathname]();
	}
	else {
		console.log("No request Handler exists for the pathname:" +pathname);
	}
}
//making the route function accessable to the other modules
exports.route=route;