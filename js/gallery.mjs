//import {getToken} from "./login.mjs";

const getToken = () => localStorage.getItem('token');

function gallery () {
    let xhttp = new XMLHttpRequest();
    url = 'https://3d1pftib26.execute-api.eu-west-1.amazonaws.com/dev/images/list';

    xhttp.onreadystatechange = function (){
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let responseObject = JSON.parse(xhttp.responseText);
            console.log(responseObject);
        }

        if (xhttp.readyState == 4 && xhttp.status != 200) {
            console.log('ne')
        }
        
    }
    xhttp.open ("GET",url, true);
    xhttp.setRequestHeader ('Authorization', getToken());
    xhttp.send();
}

export {
    gallery
}