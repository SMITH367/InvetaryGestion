class Crud {

    constructor() {
        this.url = 'http://localhost:3000/products'
        let tokenString = localStorage.getItem("token")
        this.token = tokenString.replace(/['"]+/g, '')
    }

    async getData() {
        try {
            const res = await fetch(this.url)
            const data = await res.json()
            console.log(data)
            drawTable(data)

        } catch (err) {
            console.log(err)
        }

    }
    async postData(productToAdd) {

        try {
            const res = await fetch(this.url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    authentication: this.token
                },
                body: JSON.stringify(productToAdd)
            })
            const data = await res.json()
            console.log(data)
            alert("Producto agregado correctamente")
            this.getData()
        } catch (err) {
            console.log(err)
        }

    }

}

const clearFlieds = () => {
    document.getElementById("name").value = ""
    document.getElementById("price").value = ""
    document.getElementById("invent").value = ""
    document.getElementById("ident").value = ""
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

const lengthValidation = (string) => {
    if (string.length < 1) {
        return false
    } else {
        return true
    }
}

const crudActions = new Crud()
crudActions.getData()


const addProductBtn = document.getElementById("addProductBtn")

addProductBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let productToAdd = {
        nombre: document.getElementById("name").value,
        precio: document.getElementById("price").value,
        inventario: document.getElementById("invent").value
    }

    if (lengthValidation(productToAdd.nombre) == true && lengthValidation(productToAdd.precio) == true && lengthValidation(productToAdd.inventario)) {
        crudActions.postData(productToAdd)
        clearFlieds()

    }

})