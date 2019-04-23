const loginDiv = document.getElementById('login-form');
const resultDiv = document.getElementById('result');
const errorDiv = document.getElementById('error');
const menu = document.getElementById('menu');

const showLogin = () => {
  loginDiv.style = 'display: block;';
  resultDiv.style = 'display: none;';
}

const showResult = () => {
  loginDiv.style = 'display: none;';
  resultDiv.style = 'display: block;';
}

const showMenu = () => menu.style = 'display: block;';
const hideMenu = () => menu.style = 'display: none;';

export {
  showLogin,
  showResult,
  showMenu,
  hideMenu
}