import { goto } from './utils.js';

window.isAuthenticated = function () {

  const isAuth = !!localStorage.getItem('isAuthenticated');
  const isEmail = !!localStorage.getItem('email');

  if (isAuth && isEmail) {
    const URI = '/pages/dashboard.html';

    goto(URI);
  } else {
    const URI = '/pages/login.html';

    goto(URI);
  }
};
