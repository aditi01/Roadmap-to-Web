function retrievePost() {
	$.ajax({ //1.
		type: 'GET',
		url: '/posts',
		dataType: "json",
		success: function(result) {
			console.log(result);
			document.getElementById("output").innerHTML = JSON.stringify(result.output);
		},
		error: function(err) {
			console.log(err);
			document.getElementById("output").innerHTML = "Data not retrieved";
		}
	});
}

function savePost() {
	var obj = {post: document.getElementById("input").value, date: new Date()} //variable which stores the database items along with the date of its entry.

	$.ajax({ //2.
		type: "POST",
		url: "/post/save",
		data: obj,
		success: function(result) {
			console.log(result);
			retrievePost();
		},
		dataType: "json",
		error: function(err) {
			console.log(err);
		}
	});
}

/* 1. This is a ajax GET request which is used to get data from the server to the url: /posts and has the datatype as JSON. Here there are 2 functions defined, success and error.
If the ajax call is successful then the data which is fetched from the database is displayed in the DOM. JSON.stringify is the function which is used to display the onject in the 
form of a string.

2. This is a ajax POST request where the user sends data to the server so that it is stored in the database. The data typed in the textarea is stored in the variable obj. Even here
there is a success which is executed if the POST request is successful then it calls the retrievePost function, and the error is executed  if the ajax call is unsuccessful.