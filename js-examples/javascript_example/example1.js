
//console.log(feedArray);

//Print max upvote value present in the array of objects using for-loop
var i;
function arrayMaxFor() {
	var max=0;
	for(i=0; i<feedArray.length;i++){
		if(max<=feedArray[i].upvotes)
			max=feedArray[i].upvotes;
	}
	console.log(max);
}


// Printing upvotes in the array of objects using map with external function
function arrayExternalFunction() {
	function printEle(ele){
		console.log(ele.upvotes);
	}

	feedArray.map(printEle)
}


// Printing upvotes in the array of objects using map with anonymous function
function arrayMapAnon() {
	feedArray.map(function(eachElement){
		console.log(eachElement.upvotes);
	})
}


//Printing min upvote value present in the array of objects using for-loop
function arrayMinFor() {
	var min=feedArray[0].upvotes;
	for(i=0; i<feedArray.length;i++){
		if(min>feedArray[i].upvotes)
			min=feedArray[i].upvotes;
	}
	console.log(min);
}


//Printing min upvote value present in the array of objects using map
function arrayMinMap() {
	var mini=feedArray[0].upvotes;
	feedArray.map(function(singleElement) {
		if(mini>singleElement.upvotes)
			mini=singleElement.upvotes;
	})
	console.log(mini);
}

function extractFeedValues() {
	var extract = [];
	feedArray.map(function(singleElement,i) {
		extract[i] = {"name": singleElement.display_name, "channel":singleElement.channel_name};
		// extract.push({"name": singleElement.display_name, "channel":singleElement.channel_name});
	});

	// var extract = feedArray.map(function(singleElement) {
	// 	return {
	// 		"name": singleElement.display_name, 
	// 		"channel":singleElement.channel_name
	// 	}
	// });
	console.log(extract);
}


//Increasing the least upvote in the array object by 1 using for-loop
function increaseLeastFor() {
	for(i=0; i<feedArray.length;i++){
		if(min==feedArray[i].upvotes)
			feedArray[i].upvotes++;
	}

	console.log(feedArray);
}


//Increasing the least upvote in the array object by 1 using map
function increaseLeastMap() {
	feedArray.map(function(allElement){
		if(mini==allElement.upvotes)
			allElement.upvotes++;
	})

	console.log(feedArray);
}


//Using the reverse functionality on the entire array
function arrayReverse() {
	feedArray.reverse();
	console.log(feedArray);
}


//verifying if the given value in the isArrary constructor is an array or not
function isarrayMethod() {
	console.log(Array.isArray(12));
	console.log(Array.isArray(feedArray));	
}


//Concatination of the arrays with the help of the array constructors
function concatMethod() {
	var a=[1,2,4];
	var b=['a','b',['c','d']];
	var c=["hello","world"];
	var finalArray=feedArray.concat(a,b,c,[6,7]);
	console.log(finalArray);
}

//Observe functionality is a part of es6 not supported in all browsers yet

function observeMethod() {
	var testArray=[1,2,3,4]
	Array.observe(testArray, function(change){
		console.log(change);
		if(change[0].type === 'update'){
			console.log('The array element got changed')
		}
		else if(change[0].type === 'splice'){
			console.log('New element was added')
		}
	});

	testArray[0] = 'a';
	testArray[4] = 10;
}

//To verify the functionality of filter

function filterMethod() {
	var testArray=[1,4,77,12,66,101,10];
	function smallElement(smallValue) {
		return(smallValue)<10;
	}
	var filteredElement=testArray.filter(smallElement);
	console.log(filteredElement);
}

//To verify the functionality of filter using the json

function filterMethodJ() {
	var countOfNan=0;
	function findElements(num) {
		if(typeof(num.id)==='number' && !isNaN(num.id)) {
			return true;
		}
		else{
			countOfNan++;
			return false;
		}
	}
		var filterElement= feedArray.filter(findElements);
		console.log(filterElement);
		console.log("The number of NaN", countOfNan);
}

//To verify the functionality of forEach();

function foreachMethod() {
	function elementforEach(ele, index, array) {
		console.log('feedArray['+index+']='+ele);
	}
	feedArray.forEach(elementforEach);
}

//To verify the functionality of join();

function joinMethod() {
	var a=['man', 'animan', 1, 2];
	var b=a.join('*');
	console.log(b);
}

//To verify the functionality of slice();

function sliceMethod() {
	var a=['man', 'animan', 1, 2, "This is a statement", 0.505, null, NaN];
	console.log(a.slice(1,7));
}

//To verify the functionality of splice();

function spliceMethod() {
	var a=['man', 'animan', 1, 2, "This is a statement", 0.505, null, NaN];
	var b=a.splice(1,2,'parrot', 1, 3, null);
	console.log(b);	
}
//Execute the functions to see results -----

//arrayMaxFor();
//arrayExternalFunction();
//arrayMapAnon();
//concatMethod();
//isarrayMethod();
//arrayReverse();
//increaseLeastMap();
//increaseLeastFor();
//arrayMinMap();
//arrayMinFor();
//observeMethod();
// filterMethod();
// filterMethodJ();
// foreachMethod();
// joinMethod();
// sliceMethod();
// spliceMethod();
extractFeedValues();