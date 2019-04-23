import { isLoggedIn, loginRequest } from './login.mjs';

if(isLoggedIn()) {
  alert('prijavljen si mozes ici na home');
} else {
  alert('prikazacu login screen jer nisi prijavljen');
}

 



