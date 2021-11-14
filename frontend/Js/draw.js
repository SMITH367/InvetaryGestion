const bodyTable = document.getElementById("bodyTable")

const url = 'http://localhost:3000/products'


const getData = async () => {

    const res = await fetch(url, {
        headers: {
            'authentication': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxfSwiaWF0IjoxNjM2ODU4NzAwfQ.yQRe1Efdp9O4n7tprkU9MAiX9wW8MaT1R6UQqRVtLCA'
        }
    })
    const data = await res.json()

    drawTable(data)
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
        deleteBtn.onclick = sayHello

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

export {
    getData
}