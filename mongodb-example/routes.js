function initialize(app, db) {

	console.log("Request about to be routed");
	app.get('/', function(req, res) { // GET ajax request for Requesting to display of the HTML page
		console.log("Request to / has been recieved");
		res.render('index.html'); //renders the html page onto the browser
	});

	app.get('/posts', function(req, res) { // GET ajax request to display the database items that are stored in the mongodb
		console.log("Getting data from the database");
		var collection = db.collection('postTable'); //referring to the table name-postTable. database-->collection--> documents
		  collection.find({}).toArray(function(err, docs) { //find({}) displays all the records that are stored in the database.s
		    console.log("Found the following records");
		    console.log(docs);
		    res.json({
		    	message: "The data is:",
		    	output: docs
		    });
		  });

	});

	app.post('/post/save', function(req, res) { //POST ajax request to send the data from the browser to the server and stored in the database.
		console.log(req.body);
		var obj = {
			post: req.body.post,
			date: new Date()
		};
		var collection = db.collection('postTable');
  	 	collection.insert(obj, function(err, result) {
    		console.log("Inserted 3 documents into the document collection");
    		console.log(result);
    		res.json({
    			message: "Data successfully saved in the database"
    		});
  		});
	});
}

exports.initialize = initialize;