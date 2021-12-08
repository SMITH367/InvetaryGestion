const bodyTable = document.getElementById("bodyTable")
const searchByIdBtn = document.getElementById("SearchIdBtn")
const idSearched = document.getElementById("idSearched")
const nameSearched = document.getElementById("nameSearched")
const priceSearched = document.getElementById("priceSearched")
const invetarySearched = document.getElementById("inventSearched")
const searchByNameBtn = document.getElementById("searchByNameBtn")

const idSearched2 = document.getElementById("idSearched2")
const nameSearched2 = document.getElementById("nameSearched2")
const priceSearched2 = document.getElementById("priceSearched2")
const invetarySearched2 = document.getElementById("inventSearched2")


const url = 'https://inventarygestion.herokuapp.com/products'

const getData = async () => {

    const res = await fetch(url)
    const data = await res.json()

    drawTable(data)
}

const getById = async (id) => {

    const res = await fetch(`${url}/${id}`)
    const data = await res.json()
    drawSearchId(data)

}

const getByName = async (name) => {
    const res = await fetch(`${url}/search/${name}`)
    const data = await res.json()
    drawSearchName(data)
    console.log(data)
}

const setBgColor = (id) => {
    if (id % 2 == 0) {
        return 1
    } else {
        return 0;
    }
}

const drawSearchId = (data) => {

    if (data.length > 0) {
        data.forEach((element) => {
            idSearched.innerHTML = `<br> ${element.codigo}`
            nameSearched.innerHTML = `<br> ${element.nombre}`
            priceSearched.innerHTML = `<br>${element.precio}`
            invetarySearched.innerHTML = `<br>${element.inventario}`
        })
    } else {
        alert("Producto no encontrado")
    }

}

const drawSearchName = (data) => {
    if (data.length > 1) {
        idSearched2.innerHTML = ``
        nameSearched2.innerHTML = ``
        priceSearched2.innerHTML = ``
        invetarySearched2.innerHTML = ``

        data.forEach((element) => {

            idSearched2.innerHTML += ` <br> ${element.codigo}`
            nameSearched2.innerHTML += ` <br> ${element.nombre}`
            priceSearched2.innerHTML += ` <br> ${element.precio}`
            invetarySearched2.innerHTML += `<br> ${element.inventario}`


        })
    } else if (data.length == 1) {
        data.forEach((element) => {

            idSearched2.innerHTML = ` <br> ${element.codigo}`
            nameSearched2.innerHTML = ` <br> ${element.nombre}`
            priceSearched2.innerHTML = ` <br> ${element.precio}`
            invetarySearched2.innerHTML = `<br> ${element.inventario}`


        })
    } else {
        alert("producto no encontrado")
    }

}

const drawTable = (data) => {

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
searchByNameBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const searchByName = document.getElementById("searchByName").value
    if (lengthValidation(searchByName) == true) {
        getByName(searchByName)
    } else {
        alert("El campo no debe estar vacio")
    }

})
export {
    getData
}