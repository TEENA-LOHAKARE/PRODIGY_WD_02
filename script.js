
let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;

document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("Lap").addEventListener("click", lap);

function start() {
    timer = true;
    stopwatch();
}

function stop() {
    timer = false;
}

function reset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    if (timer) {
        const lapTime = formatNumber(hr) + ":" + formatNumber(min) + ":" + formatNumber(sec) + "." + formatNumber(count);
        const lapItem = document.createElement("li");
        lapItem.innerText = lapTime;
        document.getElementById("laps").appendChild(lapItem);
    }
}

function stopwatch() {
    if (timer) {
        count++;
        
        if (count === 100) {
            sec++;
            count = 0;
        }
        
        if (sec === 60) {
            min++;
            sec = 0;
        }
        
        if (min === 60) {
            hr++;
            min = 0;
            sec = 0;
        }
        
        document.getElementById("hr").innerHTML = formatNumber(hr);
        document.getElementById("min").innerHTML = formatNumber(min);
        document.getElementById("sec").innerHTML = formatNumber(sec);
        document.getElementById("count").innerHTML = formatNumber(count);

        setTimeout(stopwatch, 10);
    }
}

function formatNumber(num) {
    return num < 10 ? "0" + num : num;
}