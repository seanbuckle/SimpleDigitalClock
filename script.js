window.addEventListener("load", displayTimeDate);

function displayTimeDate() {
    const d = new Date();
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const refresh = 1000;
    let day,date,month,year,h,m,s,time;

    day = days[d.getDay()];
    date = d.getDate().toString();
    month = months[d.getMonth()];
    year = d.getFullYear();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    date = date.endsWith("1") ? date + "st"
        : date.endsWith("2") ? date + "nd"
        : date.endsWith("3") ? date + "rd"
        : date + "th";

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    date = day + ", " + date + " " + month + " " + year;
    time = h + ":" + m + ":" + s;
    setTimeout('displayTimeDate()', refresh);

    document.getElementById('date').innerHTML = date;
    document.getElementById('time').innerHTML = time;
}
function displayDate(){

}