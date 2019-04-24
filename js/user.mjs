const getToken = () => localStorage.getItem('token');
const resultUser = document.getElementById('user');
const user = () => {
    let xhttp = new XMLHttpRequest;
    let url =  'https://3d1pftib26.execute-api.eu-west-1.amazonaws.com/dev/user/profile';
    xhttp.onreadystatechange = function (){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            let responseObject = JSON.parse(xhttp.responseText);
            console.log(responseObject);
        }
    }
    xhttp.open ("GET", url, true);
    xhttp.setRequestHeader ('Authorization', getToken ());
    xhttp.send ();
}

export {
    user
};