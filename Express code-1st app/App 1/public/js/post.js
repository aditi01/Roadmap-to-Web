
function postRequest() {
  var obj={ input: document.getElementById("text").value} //obj is taking the input from the value entered in the textarea


  $.ajax({ //ajax post request where the respose is passed to the url /upload
      type: "POST",
      url: "/upload",
      data: obj,
      success: function(result) {
        console.log(typeof(result));
        document.getElementById("display").innerHTML=result.message+result.output; //displays the result.message and result.output  into the div tag with the id=display
      },
      dataType: "json", //data is of the datatype of json
      error: function (err) {
        console.log(err);
      }
    });
}