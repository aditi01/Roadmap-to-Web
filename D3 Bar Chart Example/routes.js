function initialize(app){

    //These are the API end points that you can write.

    //Setting up an event listener for GET request to '/' 
    app.get('/', function(req, res){ 
        console.log('request to / received');
        res.render("Graph.html");
    });
}

exports.initialize = initialize; //exporting the initialize function from routes.js so as to let this function to be accessed by the other modules, eg., server.js