//function to include the csv file from the public folder for reading and rendering the data
d3.csv("/js/test_data.csv", function(data) {
  var dataset = data.map(function(partyDetail) {
    return {Party: partyDetail["Party"], 'no_of_seats': + partyDetail['no_of_seats'] }
  });  

  var container_width = 1000; //to define the width of the svg container
  var container_height = 1110; //to define the height of the svg container
  var barPadding = 1;

  var svg = d3.select("#results") //to define to render the bar graph within the div tag of the Graph.html file with the id=results
              .append("svg")
              .attr("width", container_width)
              .attr("height", container_height);

var tip = d3.tip() //variable "tar" contains the value of the tooltip which is obtained when hovered over each bar of the bar graph
  .attr('class', 'd3-tip')
  .offset([-10,0]) //to define the position of each tooltip when displayed
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
      return i * 1000 / dataset.length; 
  }) //for maintaining a minimum distance between the 2 bars that is displayed
     .on('mouseover', tip.show)
     .on('mouseout', tip.hide)

     .attr("height", function(partyDetail) {
      return partyDetail['no_of_seats']*4;
  }) /*for returning the value of the dataset and altering the height of the bars in the bar chart accordingly! and we multiply the value of d, 4 times so that the bars are more prominantly
     visible*/

     .attr("y", function(partyDetail) {
      return container_height - partyDetail['no_of_seats']*4;  //to display the graph upright, by shifting the origin
  })

  .attr("fill", "teal") //attribute defined to fill in colors in the bar

  .attr("fill", function(partyDetail) {
      return "rgb(80, 0, " + (partyDetail['no_of_seats'] * 7) + ")";
  }); //changing the color of each bar depending upon the data in the dataset
});

