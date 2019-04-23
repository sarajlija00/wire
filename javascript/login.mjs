import { hideMenu, showMenu } from "./helper.mjs";

const loginDiv = document.getElementById('login-form');
const resultDiv = document.getElementById('result');
const errorDiv = document.getElementById('error');

 const loginRequest = (email, password) =>  new Promise((resolve, reject) => {
    let url = 'https://3d1pftib26.execute-api.eu-west-1.amazonaws.com/dev/user/login';
    let xhttp = new XMLHttpRequest ();
    let object = {
        email,
        password
    };
    let request = JSON.stringify(object);
    xhttp.onreadystatechange = function (){
        if(xhttp.readyState ==4 && xhttp.status == 200){
            const response = JSON.parse(xhttp.responseText);
            resolve(response);
        }
        if (xhttp.readyState == 4 && xhttp.status != 200) {
            reject('Incorrect mail or password');
        }
    
    }
    xhttp.open ('POST', url, true);
    xhttp.setRequestHeader ("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(request);
});

const isLoggedIn = () => {
    const token = localStorage.getItem('token');
    return token;
}

// postavljanje tokena u local storage
const setToken = response => localStorage.setItem('token', response.token);


const getToken = () => localStorage.getItem('token');

// uklanjanje tokena iz local storage

const clearToken = () => localStorage.removeItem('token');

// prikazu result div, sakrij login i kontra 
const showLogin = () => {
    loginDiv.style = 'display: block;';
    resultDiv.style = 'display: none;';
}

const showResult = () => {
    loginDiv.style = 'display: none;';
    resultDiv.style = 'display: block;';
}

const login = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  loginRequest(email, password)
    .then(handleLogin)
    .catch(handleError);
}


const logout = () => {
    clearToken();
    showLogin();
    hideMenu();
};


// uspjesan login 
const handleLogin = response => {
    setToken(response);
    showResult();
    showMenu();
};

// upravljanje greskom 
const handleError = err => errorDiv.innerHTML = err;

export { 
    isLoggedIn, 
    login,
    logout,
    getToken,
    setToken,
    clearToken 
 };


