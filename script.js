window.addEventListener("load", DisplayTime);

function DisplayTime() {
    let d = new Date();
    let time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    const refresh = 1000;
    setTimeout('DisplayTime()', refresh);

    document.getElementById('time').innerHTML = time;
}