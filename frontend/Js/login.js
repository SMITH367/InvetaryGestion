const errorLogin = document.getElementById('errorLogin')
const urlBackend = 'http://localhost:3000/login'
const urlAdminMode = 'http://127.0.0.1:5500/frontend/admin/adminMode.html'

const btnlogin = document.getElementById('login')





const loginUser = async (user,password) => {
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
            localStorage.setItem('token',token)
            window.location.href = urlAdminMode
        } else {
            errorLogin.innerHTML = "Usuario o contraseña incorrectos";
        }


    } catch (err) {
        console.log(err)
    }

}

btnlogin.addEventListener('click', (e) => {
    e.preventDefault()
    let user = document.getElementById('user').value
    let password = document.getElementById('password').value
    loginUser(user,password)

})
