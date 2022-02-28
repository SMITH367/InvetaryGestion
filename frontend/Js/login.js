const errorLogin = document.getElementById('errorLogin')
const urlBackend = 'https://inventarygestion.herokuapp.com/login'
const urlAdminMode = 'https://inventarygestion-a5cf0.firebaseapp.com/admin/adminMode.html'

const btnlogin = document.getElementById('login')


if (localStorage.getItem("token") != undefined) {
    location.href = urlAdminMode;
}


const errorInput = () => {
    errorLogin.innerHTML = "Usuario o contraseña incorrectos";
}

const loginUser = async (user, password) => {
    console.log("intento")
    let userData = {
        "user": user,
        "password": password
    }
    try {

        const res = await fetch(urlBackend, {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        const token = await res.text()

        if (token != 'Forbidden') {
            localStorage.setItem('token', token)
            window.location.href = urlAdminMode
        } else {
           errorInput() 
        }


    } catch (err) {
        console.log(err)
    }

}
const lengthValidation = (string) => {

    console.log(string)
    if (string.length < 1) {
        return false
    } else {
        return true
    }
}
btnlogin.addEventListener('click', (e) => {

    e.preventDefault()
    let user = document.getElementById('user').value
    let password = document.getElementById('password').value
    if (lengthValidation(user) == true && lengthValidation(password) == true) {
        loginUser(user, password)
    } else {
        errorInput()
    }
})