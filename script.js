function updateTime() {
    var selectedCity = document.getElementById("citySelector").value;
    var options = { timeZone: selectedCity, timeStyle: 'full', timeZoneName: 'short' };
    var formatter = new Intl.DateTimeFormat([], options);
    var currentTime = new Date().toLocaleString([], options);

    document.getElementById("location").textContent = "Current Time in " + Intl.DateTimeFormat(undefined, { timeZoneName: 'long' }).formatToParts(currentTime).find(part => part.type === 'timeZoneName').value;
    document.getElementById("time").textContent = formatter.format(currentTime);
}

// Update time when the page loads
updateTime();

// Update time when the dropdown selection changes
document.getElementById("citySelector").addEventListener("change", updateTime);

// Update time every second to keep it accurate
setInterval(updateTime, 1000);
