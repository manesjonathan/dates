// Exercise 1
let title = document.createElement("h1");
let anchorage = document.createElement("h2");
let reykjavik = document.createElement("h2");
let saintPetersburg = document.createElement("h2");
let brussels = document.createElement("h2");

title.innerText = "World Time";
document.body.appendChild(title);

let timeZoneParam = "timeZoneName:'short', hour12:false";

anchorage.innerText = "Anchorage " + new Date().toLocaleString("en-US", { timeZone: "America/Anchorage", timeZoneParam });
document.body.appendChild(anchorage);

reykjavik.innerText = "Reykjavik " + new Date().toLocaleString("en-US", { timeZone: "Atlantic/Reykjavik", timeZoneParam });
document.body.appendChild(reykjavik);

saintPetersburg.innerText = "Moscow " + new Date().toLocaleString("en-US", { timeZone: "Europe/Moscow", timeZoneParam });
document.body.appendChild(saintPetersburg);

brussels.innerText = "Brussels " + new Date().toLocaleString("en-US", { timeZone: "Europe/Brussels", timeZoneParam });
document.body.appendChild(brussels);
let today = new Date();

// Exercise 2
let oldDate = new Date("1986 / 03 / 03").getTime();
let daySinceOldDate = (today - oldDate) / (1000 * 60 * 60 * 24);

let timeStampFromBirth = document.createElement("h2");
timeStampFromBirth.innerText = "You have passed " + daySinceOldDate.toFixed(2) + " days on earth!"
document.body.appendChild(timeStampFromBirth);

let date = new Date(prompt("Please enter a date"));
let seventies = new Date("01 / 01 / 1970");
let timeStampFromDate = (today - date.getTime()) / (1000 * 60 * 60 * 24);
if (date.getTime() > seventies.getTime()) {
    alert(timeStampFromDate.toFixed(2) + " days have passed between " + date.toLocaleDateString() + " and now!");
} else {
    alert("You are too old!");

}

//Exercise 3
let futureDateTime = (80000 * 60 * 60 * 1000);
console.log(today.toLocaleString());
let newDate = Number(today.getTime() + futureDateTime);
console.log(new Date(newDate).toLocaleDateString());

let numberInput = document.createElement("input");
numberInput.setAttribute("type", "number");
document.body.appendChild(numberInput);

let datePlaceholder = document.createElement("h2");
document.body.appendChild(datePlaceholder);

numberInput.addEventListener("keyup", (e) => {
    calculateTime(e);
})

numberInput.addEventListener("change", (e) => {
    calculateTime(e);
})

function calculateTime(e) {
    dateInMilliseconds = Number(today.getTime() + (e.target.value * (60 * 60 * 1000)));
    newDate = new Date(dateInMilliseconds).toLocaleString();
    datePlaceholder.innerText = "In " + e.target.value + " hours it will be the " + newDate;
}