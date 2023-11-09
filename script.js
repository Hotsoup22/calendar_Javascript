const currentDate = document.querySelector(".current-date");
const days = document.querySelector(".days")
const icons = document.querySelectorAll(".icons span")

let date = new Date(),
    currentYear = date.getFullYear(),
    currentMonth = date.getMonth();

const months = ["January", "Febuary", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

const render = () => {
    let liElement = ""
    let firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay() //first Day  of the Month
    lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate() //last Date of the Month
    lastDayofMonth = new Date(currentYear, currentMonth).getDay() //last Date of the Month
    lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate() //last Date of the Last Month

    for (let i = firstDayofMonth; i > 0; i--) {
        liElement += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currentMonth === new Date().getMonth()
            && currentYear === new Date().getFullYear() ? "active" : "";
        liElement += `<li class="${isToday}"> ${i} </li>`
    }

    for (let i = lastDayofMonth; i < 11; i++) {
        liElement += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = ` ${months[currentMonth]} ${currentYear}`
    days.innerHTML = liElement
}
render();

//next/prev month buttons
icons.forEach(icon => {
    icon.addEventListener("click", () => {
        currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;
        if (currentMonth < 0 || currentMonth > 11) {
            date = new Date(currentYear, currentMonth);
            currentYear = date.getFullYear();
            currentMonth = date.getMonth();
        } else {
            date = new Date();
        }
        render();
    })
})