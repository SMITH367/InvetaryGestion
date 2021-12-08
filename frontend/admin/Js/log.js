const urlLogin = 'https://inventarygestion-a5cf0.firebaseapp.com/login.html'

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