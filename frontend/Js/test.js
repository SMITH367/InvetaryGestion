const url = 'http://localhost:3000/login'

const getData = async () => {
    console.log("intento")
    let userData = {
     "user": "admin",
     "password": "admin"
    }
    const res = await fetch(url, {
        method: 'POST',
        body:JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
    const token = await res.text()
    console.log(token)
}
getData()