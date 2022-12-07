window.addEventListener("load", DisplayTime);

function DisplayTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes()
    let s = d.getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    let time = h + ":" + m + ":" + s;
    const refresh = 1000;
    setTimeout('DisplayTime()', refresh);

    document.getElementById('time').innerHTML = time;
}