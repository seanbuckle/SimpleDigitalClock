Window.addEventListener("load", DisplayTime);

function DisplayTime() {
    const d = new date();
    const time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    const refresh = 1000;
    mytime = setTimeout('time', refresh);

    document.getElementById('time').innerHTML = time;
}