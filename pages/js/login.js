import { goto } from '../../helpers/utils.js';
import { getAllUsers, persistUser, getAppData } from '../../helpers/api.js';

 window.login = function(email, password) {
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

function showErrorMessage(msg) {
  let errorEle = document.getElementById("error");
  errorEle.style.display = 'flex';
  errorEle.innerHTML = msg;
}
