const currentDate = document.querySelector(".current-date");
const days = document.querySelector(".days")
let date = new Date(),
currentYear = date.getFullYear(),
currentMonth = date.getMonth();

const months = ["January", "Febuary", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

const render = () => {
    let lastDateofMonth = new Date(currentYear, currentMonth +1,0).getDate() //last Date of the Month
    

    for (let i= 1; i <= lastDateofMonth; i++){
        let liElement = document.createElement("li") ;
        liElement.textContent = `${i}`
        days.appendChild(liElement)
        console.log(i)
    }

    currentDate.textContent = ` ${months[currentMonth]}, ${currentYear}`
      
        
}
render();