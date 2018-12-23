const clock = document.getElementById("current-time");
setInterval(() => {
    const now = moment();
    var humanReadable = now.format('hh:mm:ss');

    clock.textContent = humanReadable;
}, 1000);

$("#current-time").append(clock);

$("#submit-info").on("click", function(event) {
    event.preventDefault();

var trainName = $("#train-name-input").val().trim();
var trainDestination = $("#destination-input").val().trim();
var firstTrainTime = $("#first-train-input").val().trim();
var trainFrequency = $("#frequency-input").val().trim();



    console.log(trainName);
    console.log(trainDestination);
    console.log(firstTrainTime);
    console.log(trainFrequency);
    
var row = $("<tr>");
row.append("<td>" + trainName + "</td>");
row.append("<td>" + trainDestination + "</td>");
row.append("<td>" + firstTrainTime + "</td>");
row.append("<td>" + trainFrequency + "</td>");

$("#departure-list").append(row);
});