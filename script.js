function randomColor() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let interval;

const startChanging = function () {
    if (!interval) {
        interval = setInterval(changeBackground, 1000);
    }
    function changeBackground() {
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChanging = function () {
    clearInterval(interval, 1000);
    interval = null;
}

document.querySelector("#start").addEventListener('click', startChanging)

document.querySelector("#stop").addEventListener('click', stopChanging)