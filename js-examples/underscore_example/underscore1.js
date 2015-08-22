//to verify the functionality of _.select()

function selectMethod() {
	var numberset=[1,6,33,25,99,100,85,76,93,92,98];
	var maxnumbers=[];
	var numberlimit=90;
	maxnumbers=_.select(numberset,function(num) {
		return num>numberlimit;
	});
	console.log(maxnumbers);
}

//to verify the functionality of _.each()

function eachMethod() {
	var testarray=[1,2,3,4,5,6,7,8,9,10];
	_.each(testarray,alert);
}

//to verify the functionality of _.map()

function mapMethod() {
	var testarray=[1,2,3,4];
	var result=_.map(testarray, function(num) {
		return num*3;
	});
	console.log(result);
}

//to verify the map funtionality using objects and verifying the functionality of _.first

function mapobjMethod() {
	var obj={key1:2, key2:3,key3:5};
	var result=_.map(obj, function(num, key) {
		return num+3;
	});
	console.log(result);
	var testarray=[[1,2],[3,4],[7,8]];
	var result1=_.map(testarray,_.first);
	console.log(result1);
}

//to verify the functionality of uniq()

function uniqMethod() {
	var testarray=[1,2,2,1,2,3,1,1,1,4,4,4,4,3,3,5,6,6,7,7];
	var result=_.uniq(testarray);
	console.log(result);
}

//to verify the functionality of find()

function findMethod() {
	var testarray=[1,2,3,4,5,6,7,8,9,10];
	var result=_.find(testarray,function(num) {
		return num%3==0;
	});
	console.log(result);
}

//to verify the functionality of filter()

function filterMethod() {
	var testarray=[1,2,3,4,5,6,7,8,9,10];
	var result=_.filter(testarray, function(num) {
		return num%2==0;
	});
	console.log(result);
}

//tp verify the functionality of reject()

function rejectMethod() {
	var testarray=[11,12,13,14,15,16,17,18,19,20];
	var result=_.reject(testarray, function(num) {
		return num%3==0;
	});
	console.log(result);
}

//to verify the functonality of pluck()

function pluckMethod() {
	var testarray= [{name: "Ashwin", age:22},
	{name: "Aditi", age: 23},
	{name: "Ram", age:25},
	{name: "Aditya", age:28}];
	var result=_.pluck(testarray, 'name');
	console.log(result);
}

//to verify the functionality of max()

function maxFunction() {
	var userDetails= [
		{name: "Ashwin", age:22},
		{name: "Aditi", age: 23},
		{name: "Ram", age:25},
		{name: "Aditya", age:28}];
	var result = _.max(userDetails, function(userDetail) {
		return userDetail.age;
	});
	console.log(result);
}
//Execute the below functions to view the results-----------------

// selectMethod();
// eachMethod();
// mapMethod();
// mapobjMethod();
// uniqMethod();
// findMethod();
// filterMethod();
// rejectMethod();
// pluckMethod();
maxFunction();