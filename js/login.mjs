import { showMenu, showResult } from "./helper.mjs";


const loginDiv = document.getElementById ('login-form');
const resultDiv = document.getElementById ('result');
const errorDiv = document.getElementById ('error');


const loginRequest = (email, password) => new Promise ((resolve, reject) => {
    let url = 'https://3d1pftib26.execute-api.eu-west-1.amazonaws.com/dev/user/login';
    let xhttp = new XMLHttpRequest();
    let object = {
        email,
        password
    }
    let request = JSON.stringify(object);
    if (xhttp.readyState == 4 && xhttp.status == 200){
        const response = JSON.parse(xhttp.responseText);
        resolve(response);
    }
    if (xhttp.readyState == 4 && xhttp.status !== 200) {
        reject('Incorrect email or password');
    }
    xhttp.open ('POST', url, true);
    xhttp.setRequestHeader ("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(request);
})

const isLoggedIn = () => {
    const token = localStorage.getItem ('token');
    return token;
}

const login = () => {
    const email = document.getElementById ('email').value;
    const password = document.getElementById ('password').value;
    loginRequest(email, password)
        .then(handleLogin)
        .catch(handleError)

}

const setToken = response => localStorage.setItem ('toke', response.token);
const getToken = response => localStorage.getItem ('token');
const clearToken = response => localStorage.removeItem('token');

const handleLogin = response => {
    setToken (response)
    showResult()
    showMenu()
}

const handleError = error => errorDiv.innerHTML = error;

const logout = () => {
    clearToken();
    showLogin();
    hideMenu();
}

export { 
    isLoggedIn, 
    login,
    logout,
    getToken,
    setToken,
    clearToken 
 };

