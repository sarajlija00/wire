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
        }
        if (xhttp.readyState == 4 && xhttp.status != 200) {
            document.getElementById ('error').innerHTML = 'Incorrect mail or password';
        }
    
    }
    xhttp.open ('POST', url, true);
    xhttp.setRequestHeader ("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(request);
}