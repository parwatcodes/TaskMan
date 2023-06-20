import { goto } from './utils.js';
import { URI_DASHBOARD, URI_LOGIN } from './constants.js';

function checkAuthentication() {
  const isEmail = !!localStorage.getItem('email');
  const isAuth = !!localStorage.getItem('isAuthenticated');
  const isAuthenticated = isAuth && isEmail;

  if (!isAuthenticated && !window.location.href.includes('login.html')) {
    goto(URI_LOGIN);
  } else if (isAuthenticated && window.location.href.includes('login.html')) {
    goto(URI_DASHBOARD)
  }
}

window.addEventListener('DOMContentLoaded', checkAuthentication);
