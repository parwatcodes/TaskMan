import { getAppData } from '../../helpers/api.js';
import { goto, persistUser } from '../../helpers/utils.js';

export function login(email, password) {
  let users = getAppData()?.['users'];
  let user = users.find(user => user.email === email);

  if (user && user.password === password) {
    persistUser(email);

    goto('/pages/dashboard.html');
  } else if (user && user.password !== password) {
    return showErrorMessage('Password did not match.');
  } else {
    return showErrorMessage('User not found.');
  }
}

// Display error message in login page.
function showErrorMessage(msg) {
  let errorEle = document.getElementById("error");

  errorEle.style.display = 'flex';
  errorEle.innerHTML = msg;
}
