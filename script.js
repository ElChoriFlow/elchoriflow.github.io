function updateTime() {
    var selectedCity = document.getElementById("citySelector").value;
    // Get current time in the selected time zone
    
    var formatter = new Intl.DateTimeFormat('en-US', { timeZone: selectedCity, hour: 'numeric', minute: 'numeric', second: 'numeric' });
    var formattedTime = formatter.format(new Date());

    document.getElementById("location").textContent = "Current Time in " + selectedCity;
    document.getElementById("time").textContent = formattedTime;
}

// Update time when the page loads
updateTime();

// Update time when the dropdown selection changes
document.getElementById("citySelector").addEventListener("change", updateTime);

// Update time every second to keep it accurate
setInterval(updateTime, 1000);
