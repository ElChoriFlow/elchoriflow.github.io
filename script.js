function updateTime() {
    var selectedCity = document.getElementById("citySelector").value;
    var options = { timeZone: selectedCity, timeStyle: 'full', timeZoneName: 'short' };
    var formatter = new Intl.DateTimeFormat([], options);
    var currentTime = new Date().toLocaleString([], options);

    document.getElementById("location").textContent = "Current Time in " + Intl.DateTimeFormat(undefined, { timeZoneName: 'long' }).formatToParts(currentTime).find(part => part.type === 'timeZoneName').value;
    document.getElementById("time").textContent = formatter.format(currentTime);
}

updateTime();
setInterval(updateTime, 1000);
