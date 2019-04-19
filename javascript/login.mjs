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


