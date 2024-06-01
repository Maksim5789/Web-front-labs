function showTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    document.getElementById('time').innerHTML = hours + ':' + minutes + ':' + seconds;

    let displayTime = document.getElementById('timeDisplay');
    displayTime.innerHTML = hours + ':' + minutes + ':' + seconds;
    
    // Делаем так, чтобы время на часах показывало время пребывания на странице
    let hourHand = document.getElementById('hourHand');
    hourHand.style.transform = `rotate(${30 * hours + minutes / 2 - 249}deg)`;

    let minuteHand = document.getElementById('minuteHand');
    minuteHand.style.transform = `rotate(${6 * minutes - 293}deg)`;

    let secondHand = document.getElementById('secondHand');
    secondHand.style.transform = `rotate(${6 * seconds - 180}deg)`;
}
setInterval(showTime, 1000);
