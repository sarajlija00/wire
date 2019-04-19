let football_api_auth_token = `6205c51f2f31438ab76389b3644da184`;

const laLigaTable = () => new Promise((resolve, reject) => {

  let xhttp = new XMLHttpRequest();
  let url = `http://api.football-data.org/v2/competitions/PD/standings`;

  xhttp.onreadystatechange =function() {
      if(xhttp.readyState == 4 && xhttp.status == 200){
          let table = JSON.parse (xhttp.responseText);

          resolve(table);
      }
      if (xhttp.readyState == 4 && xhttp.status != 200) {
          reject('cannot get table');
      }
  }
 xhttp.open ("GET", url, true);
 xhttp.setRequestHeader ('X-Auth-Token', football_api_auth_token);
 xhttp.send();
})

export default laLigaTable;