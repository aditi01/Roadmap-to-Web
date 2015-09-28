
d3.csv("/js/test_data.csv", function(data) {
  var dataset = data.map(function(partyDetail) {
    return {Party: partyDetail["Party"], 'no_of_seats': + partyDetail['no_of_seats'] }
  });  

  var w = 1000;
  var h = 1110;
  var barPadding = 1;

  var svg = d3.select("#results")
              .append("svg")
              .attr("width", w)
              .attr("height", h);

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10,0])
  .html(function(d) {
    return ("<strong>Party:</strong> <span style='color:red'>" + d.Party + "</span>"+ "<br/>"+"<strong>no_of_seats:</strong> <span style='color:red'>" + d.no_of_seats + "</span>");
  })

  svg.call(tip);

  svg.selectAll(".bar")
     .data(dataset)
     .enter() 
     .append("rect")
     .attr("class", "bar")
     .attr("x", 0)
     .attr("y", 0)
     .attr("width", 25)
     .attr("height", 100) //for 1 bar to be displayed
     .attr("x", function(partyDetail, i) {
      //return  10;
      return i * 1000 / dataset.length; 
  }) //for maintaining a minimum distance between the 2 bars that is displayed
    .on('mouseover', tip.show)
     .on('mouseout', tip.hide)

     .attr("height", function(partyDetail) {
      return partyDetail['no_of_seats']*4;
  }) /*for returning the value of the dataset and altering the height of the bars in the bar chart accordingly! and we multiply the value of d, 4 times so that the bars are more prominantly
     visible*/

     .attr("y", function(partyDetail) {
      return h - partyDetail['no_of_seats']*4;  //to display the graph upright, by shifting the origin
  })

  .attr("fill", "teal") //attribute defined to fill in colors in the bar

  .attr("fill", function(partyDetail) {
      return "rgb(80, 0, " + (partyDetail['no_of_seats'] * 7) + ")";
  }); //changing the color of each bar depending upon the data in the dataset
});

