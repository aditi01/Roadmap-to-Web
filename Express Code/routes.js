function initialize(app){

	//These are the API end points that you can write.

	//Setting up an event listener for GET request to '/' 
	app.get('/', function(req, res){ 
		console.log('request to / received');
        var date= new Date(); 
        var minute= date.getMinutes(); //1--> Get request
        if(minute<55){
            res.render("Graph.html",{"username": "aditi","Greeting":"Good Morning","date":date});
        }
        else
            res.render("Graph.html",{"username": "aditi","Greeting":"Good Night","date":date});
        

	});

	//Setting up an event listener for GET request to '/aditi/feed' 
	app.get('/aditi/feed', function(req, res){ //if the url is localhost:8000//aditi/feed then the feedData json is displayed--> Get request
		console.log('request to /aditi/feed received');

		var feedData = [{  
            "post_date":"Jun 20",
            "post_id":"post_01",
            "display_name":"greg",
            "location_name": "Mumbai",
            "channel_name": "Arts",
            "post_content":"xyz abc def",
            "upvotes":1,
            id: 0
        },
        {  
            "post_date":"Jun 20",
            "post_id":"post_02",
            "display_name":"ash",
            "location_name": "Mumbai",
            "channel_name": "Music",
            "post_content":"xyz abc def",
            "upvotes":2,
            id: 15
        },
        {  
            "post_date":"Jun 19",
            "post_id":"post_03",
            "display_name":"adi",
            "location_name": "Bangalore",
            "channel_name": "Lifestyle",
            "post_content":"xyz abc def",
            "upvotes":3,
            id: -1
        }];

        //This will send response back to client and will send in JSON format
        res.json({ 
        	feed: feedData
        }); //You can also use res.send
	});

	//setting up event listener for POST requests to /settings/password/save
	app.post('/settings/password/save', function(req, res){
		console.log('request to /settings/password/save');
		
		var oldPassword = 12345, message;
		if(req.body.password === oldPassword){
			message = 'Password correct';
		}else{
			message = 'Passwords do not match';
		}
		res.json({
			message: message
		});
	})
}

exports.initialize = initialize; //exporting the initialize function from routes.js so as to let this function to be accessed by the other modules, eg., server.js

/* 1. Setting a if-else condition for the handlebars variable that is defined in the HTML page within {{}}. This statement displays username, date and "Good Morning"
if the minutes of the Time displayed is less than 55, and displays username, date and "Good Evening", if the minues of the Time displayed is more than 55 minutes, which 
is being displayed in the Greeting handlebars in the HTMl page. */