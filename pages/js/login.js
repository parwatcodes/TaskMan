import { goto } from '../../helpers/utils.js';
import { getAllUsers, persistUser, getAppData } from '../../helpers/api.js';
import { isAuthenticated } from '../../helpers/validators.js'

 window.login = function(email, password) {
  let users = getAppData()?.['users'];

  let user = users.find(user => user.email === email);

  console.log('uu', user)

  isAuthenticated();

  if (user && user.password === password) {
    persistUser(email);
    goto('/pages/dashboard.html');

    return 'Login success.'
  } else if (user && user.password !== password) {
    return 'Password did not match.'
  } else {
    return 'User not found.'
  }
}
