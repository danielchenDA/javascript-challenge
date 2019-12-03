// store data from data.js into a variable
var tableData = data;

// create table tag under main html tag and assign to a variable
var table = d3.select("main")
            .append("table")
            .attr("class", "table table-dark table-striped mr-2");

var thead_tr = table.append("thead").append("tr");

// loop through the data keys and append to thead_tr
Object.keys(tableData[0]).forEach(key => {
  thead_tr.append("th").text(key);
  console.log(key);
});

var tbody = table.append("tbody");
//console.log(tableData[0]);
// append all data into the created html table
tableData.forEach((ufoSighting) => {
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  })
})

// select the inputField
var inputField = d3.select("#input-field");

// input field to trigger the date change event
inputField.on("change", function() {
  var dateNumber = d3.event.target.valueAsNumber;
  console.log(dateNumber);
  // var new_tbody = document.createElement('tbody');
  table.node().value()="";
  // d3.select("tbody").selectAll("tr").drop();
});
//
// // Input fields can trigger a change event when new text is entered.
// inputField.on("change", function() {
//   var newText = d3.event.target.value;
//   console.log(newText);
// });
