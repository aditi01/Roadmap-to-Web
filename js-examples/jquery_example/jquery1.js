//function to hide a html tag using hide()
$(function() {
	$("a").hide("fast");
});

//Basic functionality of Hello World with $() and document.write
function helloWorld() {
	$(document).ready(function(){
 		document.write("Hello World");
	});
}


// Alert window by clicking on the hyper-link
function alertClick() {
	$(document).ready(function() {
		$("a").click(function(event) {
	 		alert("JQUERY Site");
	 		event.preventDefault();
	 	});
	});
}

//to verify the functionality of .hide()
function hideMethod() {
	$(function() {
		$("a").show();
		$("a").click(function(event) {
			event.preventDefault();
			$("a").hide("slow");
		});
	});
}

//to verify the functionality of slideUp()
function slideupMethod() {
	$(function() {
		$("img").slideUp(1000);
	});
}

//to verify the functionality of fadeout()
function fadeoutMethod() {
	$(function() {
		$("img").fadeOut(1000);
	});
}

// to verify the functionality of on()
function clickMethod() {
	$(function() {
		$("p").show();
		$("p").on("click", function() {
			console.log("paraghraph is clicked");
	});
});
}

//to verify the functionality of one()
function oneMethod() {
	$(function() {
		$("p").show();
		$("p").one("click",onemethodCheck);
	});
}

function onemethodCheck() {
	console.log("You have clicked the paraghraph the first time");
	$(this).click(function () {
		console.log("This paraghraph is clicked more than once");
	});
}

//to verify the functionality of toggle()
function toggleMethod() {
	$(function() {
		$("img").toggle(1000);
	});
}

//to verify the slidetoggle() function
function slidetoggleMethod() {
	$(function() {
		$("img").slideToggle(2000);
	});
}

//to verify the usage of various methods in one line
function manyMethod() {
	$(function() {
		$("h2").show();
		$("h2").hide(1000).delay(1500).show(1000);
	});
}

//To verify the functionality of animate()
function animateMethod() {
	$(function() {
		$("img.image1").animate( {
			left:"+=1000",
			opacity: 0.40
		},
		3000,
		function() {
			console.log("Result obtained");
		});
	});
}



//Execute the below functions to see the results-----------


// helloWorld();
// alertClick();
// hideMethod();
// slideupMethod();	
// fadeoutMethod();	
// clickMethod();	
// oneMethod();
// toggleMethod();
// slidetoggleMethod();
// manyMethod();
animateMethod();
