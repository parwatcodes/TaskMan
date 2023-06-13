import { goto } from './utils.js';
import { URI_DASHBOARD, URI_LOGIN } from './constants.js';

export function isAuthenticated() {
  const isEmail = !!localStorage.getItem('email');
  const isAuth = !!localStorage.getItem('isAuthenticated');

  if (isAuth && isEmail) {

    return goto(URI_DASHBOARD);
  } else {
    if (window.location.pathname !== URI) {

      return goto(URI_LOGIN);
    }
  }
};
