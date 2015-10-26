function initialize(app) {

	console.log("Request about to be routed");
	app.get('/', function(req, res) {
		console.log("Request to / has been recieved");
		res.render('index.html');
	});
}

exports.initialize = initialize;