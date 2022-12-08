"use strict";

window.addEventListener("load", displayTimeDate(), changeTime());

function displayTimeDate()  {
    const d = new Date();
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const refresh = 1000;
    let day,date,month,year,h,hTwelve,m,s,ampm,time,timeTwelve;
    day = days[d.getDay()];
    date = d.getDate().toString();
    month = months[d.getMonth()];
    year = d.getFullYear();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    ampm = h >= 12 ? " PM" : " AM";
        
        date = date.endsWith("1") ? date + "st"
            : date.endsWith("2") ? date + "nd"
            : date.endsWith("3") ? date + "rd"
            : date + "th";
        
        hTwelve = h % 12;
        hTwelve = hTwelve < 10 ? "0" + hTwelve : hTwelve;
        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        
        date = day + ", " + date + " " + month + " " + year;
        time = h + ":" + m + ":" + s;
        timeTwelve = hTwelve + ":" + m + ":" + s + ampm;
        
        setTimeout('displayTimeDate()', refresh);

        document.getElementById("date").innerHTML = date;
        document.getElementById("time").innerHTML = time;
        document.getElementById("time-twelve").innerHTML = timeTwelve;
}

function changeTime() {
    document.getElementById("time-change").addEventListener("click", () => {
        const twelve = document.getElementById("time-twelve").classList;
        const twenty_four = document.getElementById("time").classList;
        const btnTime = document.getElementById("time-change");
    
        twelve.contains("time--hide") ? (twelve.remove("time--hide"),twenty_four.add("time--hide"))
            : (twenty_four.remove("time--hide"),twelve.add("time--hide"))
        
        btnTime.innerHTML === "12-hour" ?  btnTime.innerHTML = "24-hour" : btnTime.innerHTML = "12-hour";
    });
}