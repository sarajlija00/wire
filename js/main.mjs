import { isLoggedIn, login, logout } from './login.mjs';
import { showResult, showLogin, showMenu, hideMenu } from './helper.mjs'

if(isLoggedIn()) {
    showResult()
    showMenu()
}
else {
    console.log('not logged in')
    showLogin();
    hideMenu();
}
  
  
window.login = login;
window.logout = logout;


  