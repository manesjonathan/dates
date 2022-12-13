let timeStamp = document.querySelector(".time");
let yearStamp = document.querySelector(".year");
let monthStamp = document.querySelector(".month");
let dayStamp = document.querySelector(".day");
let dayOfWeekStamp = document.querySelector(".day-of-week");
let is24 = true;
let params = { hour12: false, hour: "2-digit", minute: "2-digit" };


function displayTime() {
    let date = new Date();
    timeStamp.innerHTML = date.toLocaleTimeString("en-US", params);
    timeStamp.innerHTML += ":" + date.getSeconds();
    yearStamp.innerHTML = date.getFullYear();
    monthStamp.innerHTML = (date.toLocaleDateString("en-US", { month: "short" }));
    dayStamp.innerHTML = date.getDate()
    dayOfWeekStamp.innerHTML = date.toLocaleDateString("en-US", { weekday: "short" });
}

timeStamp.addEventListener("click", () => {
    if (is24) {
        params = { hour12: false, hour: "2-digit", minute: "2-digit" };
        is24 = false

    } else {
        params = { hour12: true, hour: "2-digit", minute: "2-digit" };
        is24 = true

        console.log(params);
    }
});
setInterval(displayTime, 1000);
