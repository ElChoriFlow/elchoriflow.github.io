function updateTime() {
    var selectedCity = document.getElementById("citySelector").value;
    var options = { timeZone: selectedCity, timeStyle: 'full', timeZoneName: 'short' };
    var formatter = new Intl.DateTimeFormat(undefined, options);
    var currentTime = formatter.format(new Date());

    document.getElementById("location").textContent = "Current Time in " + selectedCity;
    document.getElementById("time").textContent = currentTime;
}

// Update time when the page loads
updateTime();

// Update time when the dropdown selection changes
document.getElementById("citySelector").addEventListener("change", updateTime);

// Update time every second to keep it accurate
setInterval(updateTime, 1000);
