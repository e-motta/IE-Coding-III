let btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () => document.getElementById("table").style.borderColor = "red")

let btn2 = document.getElementById("btn2")
btn2.addEventListener("click", () => document.getElementById("table").style.borderColor = "green")

let btn3 = document.getElementById("btn3")
btn3.addEventListener("click", () => document.getElementById("table").style.borderColor = "blue")

let dropdown = document.getElementById("dropdown")

let maxSize = 11

for (let i = 1; i < maxSize; i++) {
    let option = document.createElement("option")
    option.innerText = `${i} px`
    option.setAttribute("value", `${i}px`)
    dropdown.appendChild(option)
}

let table = document.getElementById("table")

dropdown.addEventListener("change", () => table.style.borderWidth = dropdown.value)

let submit = document.getElementById("submit")

submit.addEventListener("click", (e) => {
    e.preventDefault()

    let inputCol1 = document.getElementById("col1").value
    let inputCol2 = document.getElementById("col2").value

    if (inputCol1 === "" || inputCol2 ==="") {
        alert("Please enter values for both columns") 
    } else {
        let tr = document.createElement("tr")
        let col1 = document.createElement("td")
        let col2 = document.createElement("td")

        col1.innerText = inputCol1
        col2.innerText = inputCol2
        tr.appendChild(col1)
        tr.appendChild(col2)
        table.appendChild(tr)
    }
})