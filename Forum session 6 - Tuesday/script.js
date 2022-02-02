let btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () => document.getElementById("tc").style.borderColor = "red")

let btn2 = document.getElementById("btn2")
btn2.addEventListener("click", () => document.getElementById("tc").style.borderColor = "green")

let btn3 = document.getElementById("btn3")
btn3.addEventListener("click", () => document.getElementById("tc").style.borderColor = "blue")

let dropdown = document.getElementById("dropdown")

let maxSize = 11

for (let i = 1; i < maxSize; i++) {
    let option = document.createElement("option")
    option.innerText = `${i} px`
    option.setAttribute("value", `${i}px`)
    dropdown.appendChild(option)
}

dropdown.addEventListener("change", () => document.getElementById("tc").style.borderWidth = dropdown.value)
