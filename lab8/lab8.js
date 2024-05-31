function ShowDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    const weekDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
    out.innerHTML = 'Вывод локалей: ' + '<br>';
    out.innerHTML += 'Локаль России: ' + today.toLocaleDateString('ru-RU') + '<br>';
    out.innerHTML += 'Локаль Германии: ' + today.toLocaleDateString('de') + '<br>';
    out.innerHTML += 'Локаль Великобритании: ' + today.toLocaleDateString('en-GB') + '<br>';
    out.innerHTML += 'Локаль Франции: ' + today.toLocaleDateString('fr-FR') + '<br>';
    out.innerHTML += 'Локаль Казахстана: ' + today.toLocaleDateString('kk-KZ') + '<br>';
    out.innerHTML += 'Локаль Китая: ' + today.toLocaleDateString('zh') + '<br>';
    out.innerHTML += 'Локаль Японии: ' + today.toLocaleDateString('ja-JP') + '<br>';
    out.innerHTML += 'Локаль Италии: ' + today.toLocaleDateString('it-IT') + '<br>';
    out.innerHTML += '<br>' + 'Вывод текущей даты: ' + '<br>';
    out.innerHTML += 'Текущий год: ' + today.getFullYear() + '<br>';
    out.innerHTML += 'Текущий месяц: ' + today.getMonth() + '<br>';
    out.innerHTML += 'Текущая дата: ' + today.getDate() + '<br>';
    out.innerHTML += 'Текущий день недели (номер): ' + today.getDay() + '<br>';
    dayNumber = today.getDay();
    out.innerHTML += 'Текущий день недели: ' + weekDays[dayNumber] + '<br>';
}

function YourDate() {
    let out = document.getElementById('your-date');
    let inputDate = document.getElementById('input-date').value;
    let inputMonth = document.getElementById('input-month').value - 1; // Месяцы в JS начинаются с 0
    let inputYear = document.getElementById('input-year').value;
    
    if (isNaN(inputDate) || isNaN(inputMonth) || isNaN(inputYear) || inputMonth < 0 || inputMonth > 11 || inputDate < 1 || inputDate > 31) {
        out.innerHTML = 'Пожалуйста, введите корректные данные';
        return;
    }
    
    let selectedDate = new Date(inputYear, inputMonth, inputDate);
    const weekDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    
    let dayNumber = selectedDate.getDay();
    
    out.innerHTML = 'Выбранная дата: ' + selectedDate.toLocaleDateString('ru-RU') + '<br>';
    out.innerHTML += 'День недели: ' + weekDays[dayNumber] + '<br>';
}





    

