const form = document.querySelector(".form")
const input = document.querySelector(".form input")
const msgContainer = document.querySelector(".msg__container")
const topClock = document.querySelector(".top__clock")
const hour = document.querySelector(".hour")
const navbarStatus = document.querySelector(".navar__status")

function clock(){
    let now = new Date()
    let time = now.getHours().toString().padStart(2, "0")
    let minute = now.getMinutes().toString().padStart(2, "0")
    topClock.innerHTML = `${time}:${minute}`
}
clock()
setInterval(()=>{
    clock()
}, 1000)


const text = [
    "Assalomu Aleykum",
    "Nma gap",
    "Tinchlimi ?",
    "😒😒😒",
    "Voy",
    "Yog'ee",
    "Xmmm",
    "Yaxshi",
    "ok",
    "❤❤❤",
    "Kevoszmi ?",
    "Qachon ?",
    "Nmaga ?",
    "Exeee",
    "Yo'q",
    "Xayr",
    "Kelasizmi ?",
    "Kelishizda magazindan suv, pamidor, kartoshka, sabzi, guruch ovoling"
]
form.addEventListener("submit", (e)=>{
    let now = new Date()
    let time = now.getHours().toString().padStart(2, "0")
    let minute = now.getMinutes().toString().padStart(2, "0")
    e.preventDefault()
    const value = input.value
    if(value === ""){
        return null
    }

    const element = document.createElement("div")
    element.classList.add("msg", "me")
    element.innerHTML = `
        <p>${value}</p>
        <span class="hour">${time}:${minute}</span>
    `
    msgContainer.appendChild(element)
    input.value = ""
    msgContainer.scrollTop = msgContainer.scrollHeight;
    writeAMessage()
})

function writeAMessage(){
    let now = new Date()
    let time = now.getHours().toString().padStart(2, "0")
    let minute = now.getMinutes().toString().padStart(2, "0")
    let waiting = Math.floor(Math.random() * 8000)
    setTimeout(()=>{
        let index = Math.floor(Math.random() * text.length)
        const element = document.createElement("div")
        element.classList.add("msg")
        element.innerHTML = `
            <p>${text[index]}</p>
            <span class="hour">${time}:${minute}</span>
        `
        msgContainer.appendChild(element)
        navbarStatus.style.color = `blue`
        navbarStatus.innerHTML = `online`
        msgContainer.scrollTop = msgContainer.scrollHeight;
    }, waiting)
    navbarStatus.style.color = `blue`
    navbarStatus.innerHTML = `•••yozmoqda`
}