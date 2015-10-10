var obj={ input: document.getElementById("text").value}


$.ajax({
  type: "POST",
  url: "/upload",
  data: obj,
  success: function(result) {
  	console.log(result);
  },
  dataType: "JSON",
  error: function (err) {
  	console.log(err);
  }
});