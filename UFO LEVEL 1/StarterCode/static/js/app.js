//student Jorge Alberto Muñozacano Castro 
// Javascript Challenge

// from data.js
var tableData = data;
// define the tbody with d3 
var ufotbody = d3.select("tbody");
console.log("WE ARE NOT ALONE!!");
//test successufl message generated on console

// Display the current dataset as default
tableData.forEach((report) => {
    console.log(`THEY ARE HERE!! ${report}`);
    var row = ufotbody.append('tr');
    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});
// test succesfull dataset generated

// Add a submit button on page, add a click event, remove current table and prevent refreshing the page
var submit = d3.select("#filter-btn");
submit.on("click", function() {
d3.select("tbody").html("");
d3.event.preventDefault();
// test succesfull page updated

// Get the value property of the datetime element
var ufoarrival = d3.select("#datetime").property("value");
console.log(ufoarrival);
// test succesfull dataset generated

// Filter reports data set that mathc identically into datatime
var uforeport = tableData.filter(record => record.datetime === ufoarrival);
console.log(uforeport);
// test succesfull data filter

// Display the filtered dataset into table
uforeport.forEach((report) => {
    var row = ufotbody.append('tr');
    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value)
    });
});
});
//test succesfulll data display into table









































