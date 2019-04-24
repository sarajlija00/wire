import { isLoggedIn, login, logout } from './login.mjs';
import { showResult, showLogin, showMenu, hideMenu } from './helper.mjs';
import { user} from './user.mjs';
if(isLoggedIn()) {
    showResult()
    showMenu()
    
}
else {
    console.log('not logged in');
    showLogin();
    hideMenu();
}

if (user()){
    console.log('radi');
}



  
  
window.login = login;
window.logout = logout;


  