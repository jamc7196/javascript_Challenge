//student Jorge Alberto Muñozacano Castro 
// Javascript Challenge
// from data.js
var tableData = data;
// define the tbody with d3 
var ufotbody = d3.select("tbody");
console.log("WE ARE NOT ALONE!!");
//test successufl message generated on console
// Display the entire dataset as default
// Display the current dataset as default
tableData.forEach((report) => {
    console.log(`THEY ARE HERE!! ${report}`);
    var row = ufotbody.append('tr');
    Object.entries(report).forEach(([key, value]) =>{
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});
// test succesfull dataset generated
// Add a submit button on page , add a click event, remove current table and prevent refreshing the page
var submit = d3.select("#filter-btn");
submit.on("click", function() {
d3.select("tbody").html("");
d3.event.preventDefault();
// test succesfull page updated

// Get the value property of the input elements and set all text to lowercase
var ufoarrival = d3.select("#datetime").property("value");
var countryspot = d3.select("#country").property("value").toLowerCase();
var statespot = d3.select("#state").property("value").toLowerCase();
var cityspot = d3.select("#city").property("value").toLowerCase();
var shapespot = d3.select("#shape").property("value").toLowerCase();
// initialize tableData as filteredData
uforeport = tableData;
if (ufoarrival) {
    uforeport = uforeport.filter(record => record.datetime === ufoarrival);
}
if (countryspot) {
    uforeport = uforeport.filter(record => record.country === countryspot);
}
if (statespot) {
    uforeport = uforeport.filter(record => record.state === statespot);
}
if (cityspot) {
    uforeport = uforeport.filter(record => record.city === cityspot);
}
if (shapespot) {
    uforeport = uforeport.filter(record => record.shape === shapespot);
}
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












