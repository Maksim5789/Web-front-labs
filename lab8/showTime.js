function showTime() {
    let today = new Date();
    let currentTime = today.getSeconds();
    document.getElementById('time').innerHTML = currentTime;

    let displayTime = document.getElementById('timeDisplay');
    displayTime.innerHTML = currentTime;
}
setInterval(showTime, 1000);