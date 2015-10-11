
function postRequest() {
  var obj={ input: document.getElementById("text").value}


  $.ajax({
      type: "POST",
      url: "/upload",
      data: obj,
      success: function(result) {
        document.getElementById("display").innerHTML=result.message+""+result.output;
      },
      dataType: "JSON",
      error: function (err) {
        console.log(err);
      }
    });
}