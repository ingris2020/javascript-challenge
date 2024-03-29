// from data.js
var ufoData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(ufoData);

// Step 1: Loop Through `data` and console.log each date object


ufoData.forEach(function(report)  {
    var row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var dateSearch = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = dateSearch.property("value");
  console.log(inputValue);

  var filteredData = ufoData.filter(row => row.datetime === inputValue);

  console.log(filteredData);

  tbody.html("");

  //New List
  filteredData.forEach(function(report) {
      console.log(report);
    var row = tbody.append("tr");
    Object.entries(report).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
 });

}); 