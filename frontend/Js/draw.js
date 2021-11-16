console.log("hola")
const bodyTable = document.getElementById("bodyTable")
const searchByIdBtn = document.getElementById("SearchIdBtn")
const idSearched = document.getElementById("idSearched")
const nameSearched = document.getElementById("nameSearched")
const priceSearched = document.getElementById("priceSearched")
const invetarySearched = document.getElementById("inventSearched")


const url = 'http://localhost:3000/products'

const getData = async () => {

    const res = await fetch(url)
    const data = await res.json()
    console.log(data)

    drawTable(data)
}

const getById = async (id) => {

    const res = await fetch(`${url}/${id}`)
    const data = await res.json()
    drawSearchId(data)
    console.log(data)

}

const sayHello = () => {
    console.log("hello")
}
const setBgColor = (id) => {
    if (id % 2 == 0) {
        return 1
    } else {
        return 0;
    }
}

const drawSearchId = (data) => {

    console.log(data)
    data.forEach((element) => {
        idSearched.innerHTML = ` ${element.codigo}`
        nameSearched.innerHTML = `${element.nombre}`
        priceSearched.innerHTML = `${element.precio}`
        invetarySearched.innerHTML = `${element.inventario}`


    })
}

const drawTable = (data) => {

    console.log("entre")
    let id = 2;
    data.forEach(element => {

        const tableList = document.createDocumentFragment()

        const tr = document.createElement("tr")

        if (setBgColor(id) == 0) {
            tr.classList.add("bggray")
        }

        const th = document.createElement("th")
        th.setAttribute("scope", "row")



        const tdId = document.createElement("td")
        const tdName = document.createElement("td")
        const tdPrice = document.createElement("td")
        const tdInventary = document.createElement("td")


        tdId.innerHTML = `${element.codigo}`
        tdName.innerHTML = `${element.nombre}`
        tdPrice.innerHTML = `${element.precio}`
        tdInventary.innerHTML = `${element.inventario}`


        tr.appendChild(tdId)
        tr.appendChild(tdName)
        tr.appendChild(tdPrice)
        tr.appendChild(tdInventary)


        tableList.appendChild(tr)

        bodyTable.appendChild(tableList)

        id++;

    });

}
const lengthValidation = (string) => {

    console.log(string)
    if (string.length < 1) {
        return false
    } else {
        return true
    }
}
searchByIdBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const idSearch = document.getElementById("searchById").value

    if (lengthValidation(idSearch) == true) {
        getById(idSearch)
    } else {
        alert("El campo no debe estar vacio")
    }


})
export {
    getData
}