window.addEventListener("load", displayTimeDate);

function displayTimeDate() {
    const months,refresh;
    const d = new Date();
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let day,h,m,s,date,time;
    
    day = days[d.getDay()];
    date = d.getDate();
    month = d.getMonth();
    year = d.getFullYear();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    date = day + ", " + date + " " + month + " " + year;
    time = h + ":" + m + ":" + s;
    refresh = 1000;
    setTimeout('displayTimeDate()', refresh);

    document.getElementById('date').innerHTML = date;
    document.getElementById('time').innerHTML = time;
}
function displayDate(){

}