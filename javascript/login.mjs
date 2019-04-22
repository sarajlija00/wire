<<<<<<< HEAD:javascript/login.js
function loginRequest (){
    let url = 'https://3d1pftib26.execute-api.eu-west-1.amazonaws.com/dev/user/login';
    let xhttp = new XMLHttpRequest ();
    let token = localStorage.getItem('token');
    let object = {};
    object.email = document.getElementById('email').value;
    object.password = document.getElementById('password').value;
    let request = JSON.stringify(object);
    xhttp.onreadystatechange = function (){
        if(xhttp.readyState ==4 && xhttp.status == 200){
            document.getElementById ('log').style = 'display:none';
            document.getElementById ('log').innerHTML = xhttp.responseText;
            let response = JSON.parse(xhttp.responseText);
            document.getElementById ('result').innerHTML = response.token;
            document.getElementById ('error').style = 'display:none';
            localStorage.setItem('token', response.token);
=======
let token;

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
            token = JSON.parse(xhttp.responseText);
            resolve(token);
>>>>>>> 437fc0dd6c806de0ae07e5a28b469c156c5e48c6:javascript/login.mjs
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
    let token = localStorage.getItem('token');
    return token;
}

export { isLoggedIn, loginRequest };


