function ShowDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    const weekDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
    out.innerHTML = 'Локаль России: ' + today.toLocaleDateString('ru-RU') + '<br>';
    out.innerHTML += 'Локаль Германии: ' + today.toLocaleDateString('de') + '<br>';
    out.innerHTML += 'Локаль Великобритании: ' + today.toLocaleDateString('en-GB') + '<br>';
    out.innerHTML += 'Локаль Франции: ' + today.toLocaleDateString('fr-FR') + '<br>';
    out.innerHTML += 'Локаль Казахстана: ' + today.toLocaleDateString('kk-KZ') + '<br>';
    out.innerHTML += 'Локаль Китая: ' + today.toLocaleDateString('zh') + '<br>';
    out.innerHTML += 'Локаль Японии: ' + today.toLocaleDateString('ja-JP') + '<br>';
    out.innerHTML += 'Локаль Италии: ' + today.toLocaleDateString('it-IT') + '<br>';
    out.innerHTML += '<br>' + 'Текущий год: ' + today.getFullYear() + '<br>';
    out.innerHTML += 'Текущий месяц: ' + today.getMonth() + '<br>';
    out.innerHTML += 'Текущая дата: ' + today.getDate() + '<br>';
    out.innerHTML += 'Текущий день недели (номер): ' + today.getDay() + '<br>';
    dayNumber = today.getDay();
    out.innerHTML += 'Текущий день недели: ' + weekDays[dayNumber] + '<br>';
}