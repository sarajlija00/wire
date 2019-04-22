

function gallery () {
    let xhttp = new XMLHttpRequest();
    let token = localStorage.getItem('token');
    xhttp.onreadystatechange = function (){
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let responseObject = JSON.parse(xhttp.responseText);
            console.log(responseObject);
        }
        
    }
    xhttp.open ("GET",'https://3d1pftib26.execute-api.eu-west-1.amazonaws.com/dev/images/list', true);
    xhttp.setRequestHeader ('Authorization', token);
    xhttp.send();
}