

class Crud {

    constructor() {
        this.url = 'http://localhost:3000/products'
    }

    async getData() {

        const res = await fetch(this.url)
        const data = await res.json()
        console.log(data)
        drawTable(data)

    }

}

const drawTable = (data) => {

    let id = 0;
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

        const deleteBtn = document.createElement("button")
        deleteBtn.classList.add("deleteBtn")
        deleteBtn.innerHTML = "Eliminar"
        

        tdId.innerHTML = `${element.codigo}`
        tdName.innerHTML = `${element.nombre}`
        tdPrice.innerHTML = `${element.precio}`
        tdInventary.innerHTML = `${element.inventario}`


        tr.appendChild(tdId)
        tr.appendChild(tdName)
        tr.appendChild(tdPrice)
        tr.appendChild(tdInventary)
        tr.appendChild(deleteBtn)

        tableList.appendChild(tr)

        bodyTable.appendChild(tableList)

        id++;

    });

}
const setBgColor = (id) => {
    if (id % 2 == 0) {
        return 1
    } else {
        return 0;
    }
}
const datos = new Crud()

datos.getData()