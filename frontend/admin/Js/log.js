const urlLogin = 'http://127.0.0.1:5500/frontend/login.html'

const url = 'https://inventarygestion.herokuapp.com/products'

let token = localStorage.getItem('token')


if (token == null)
    window.location.href = urlLogin



const logout = document.getElementById("logout")

logout.addEventListener('click', (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
    window.location.href = urlLogin


})