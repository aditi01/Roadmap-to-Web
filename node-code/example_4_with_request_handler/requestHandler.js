//function start to handle the required request by executing this function
function start() {
	console.log("Request for the start request Handler");
}

function upload() {
	console.log("Request for the upload request Handler");
}

//exporting the above two request Handling functions so that it is available for the other modules
exports.start=start;
exports.upload=upload;