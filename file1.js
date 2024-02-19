document.addEventListener("visibilitychange", function() {
    var visibilityData = {
        id:"new",
        hidden: document.hidden,
        visibilityState: document.visibilityState,
        timestamp: new Date().toLocaleString()
    };

    // Retrieve existing data from localStorage or initialize an empty array
    var existingData = JSON.parse(localStorage.getItem("visibilityData")) || [];
    
    // Add the new data point
    existingData.push(visibilityData);

    // Store the updated array back in localStorage
    localStorage.setItem("visibilityData", JSON.stringify(existingData));
});
