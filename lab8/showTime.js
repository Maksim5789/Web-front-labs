function showTime() {
    let today = new Date();
    let currentTime = today.getSeconds();
    document.getElementById('time').innerHTML = currentTime;

    let displayTime = document.getElementById('timeDisplay');
    displayTime.innerHTML = currentTime;

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    let hourHand = document.getElementById('hourHand');
    hourHand.style.transform = `rotate(${30 * hours + minutes / 2 - 90}deg)`;

    let minuteHand = document.getElementById('minuteHand');
    minuteHand.style.transform = `rotate(${6 * minutes}deg)`;

    let secondHand = document.getElementById('secondHand');
    secondHand.style.transform = `rotate(${6 * seconds}deg)`;
}
setInterval(showTime, 1000);
