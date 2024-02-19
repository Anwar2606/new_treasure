// Retrieve visibility data from localStorage
var storedVisibilityData = localStorage.getItem("visibilityData");

if (storedVisibilityData) {
    var visibilityDataArray = JSON.parse(storedVisibilityData);

    // Use the data array as needed
    visibilityDataArray.forEach(function(visibilityData) {
        console.log("Page visibility changed at " + "new");
        console.log("Page visibility changed at " + visibilityData.timestamp);
        console.log("Hidden: " + visibilityData.hidden);
        console.log("Visibility State: " + visibilityData.visibilityState);
    });
} else {
    console.log("No visibility data available.");
}
