let timeStamp = document.querySelector(".time");
let yearStamp = document.querySelector(".year");
let monthStamp = document.querySelector(".month");
let dayStamp = document.querySelector(".day");
let dayOfWeekStamp = document.querySelector(".day-of-week");
let is24 = true;
let params = { hour12: false, hour: "numeric", minute: "numeric", second: "numeric" };

function displayTime() {
    let date = new Date();
    timeStamp.innerHTML = date.toLocaleTimeString("en-US", params);
    yearStamp.innerHTML = date.getFullYear();
    monthStamp.innerHTML = (date.toLocaleDateString("en-US", { month: "short" }));
    dayStamp.innerHTML = date.getDate()
    dayOfWeekStamp.innerHTML = date.toLocaleDateString("en-US", { weekday: "short" });
}

timeStamp.addEventListener("click", () => {
    let date = new Date();

    if (is24) {
        params = { hour12: false, hour: "numeric", minute: "2-digit", second: "numeric" };
        timeStamp.innerHTML = date.toLocaleTimeString("en-US", params);
        is24 = false

    } else {
        params = { hour12: true, hour: "numeric", minute: "2-digit", second: "numeric" };
        //todo
        let newTimeStamp = date.toLocaleTimeString("en-US", params).trim();
        console.log(newTimeStamp);
        timeStamp.innerHTML = date.toLocaleTimeString("en-US", params);
        is24 = true

    }
});

setInterval(displayTime, 1000);

function countdown() {
    let date = new Date();
    let futureDate = new Date("2022/12/14 06:00:00");
    let countdown = Number(futureDate - date);
    timeStamp.innerHTML = new Date(countdown).toLocaleTimeString("en-US", params);
    yearStamp.innerHTML = date.getFullYear();
    monthStamp.innerHTML = (date.toLocaleDateString("en-US", { month: "short" }));
    dayStamp.innerHTML = futureDate.getDate();
    dayOfWeekStamp.innerHTML = date.toLocaleDateString("en-US", { weekday: "short" });
}
