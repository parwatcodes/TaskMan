import { goto } from './utils.js';

window.isAuthenticated = function () {

  const isEmail = !!localStorage.getItem('email');
  const isAuth = !!localStorage.getItem('isAuthenticated');

  if (isAuth && isEmail) {
    const URI = '/pages/dashboard.html';

    return goto(URI);
  } else {
    const URI = '/pages/login.html';

    if (window.location.pathname !== URI) {
      return goto(URI);
    }
  }
};
