import laLigaTable from './football.mjs';
import { isLoggedIn, loginRequest } from './login.mjs';

if(isLoggedIn()) {
  alert('prijavljen si mozes ici na home');
} else {
  alert('prikazacu login screen jer nisi prijavljen');
}

  // loginRequest('almir@bind.ba', 'coolpass')
  //   .then(tokenObject => {
  //     localStorage.setItem('token', tokenObject.token);
  //     console.log('prvo token ', tokenObject.token);
  //     return laLigaTable();
  //   })
  //   .then(table => console.log('onda tabela ', table))
  //   .catch(err => console.log(err));




