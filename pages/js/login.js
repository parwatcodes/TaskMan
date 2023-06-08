import { getAllUsers, persistUser } from '../../helpers/functions';
import { goto } from '../../helpers/utils'

export function login(email, password) {
  let users = getAllUsers();

  let user = users.find(user => user.email === email);



  if (user && user.password === password) {
    persistUser(email);

    // goto('/')
    window.location.pathname = '/dashboard';
    return 'Login success.'
  } else if (user && user.password !== password) {
    return 'Password did not match.'
  } else {
    return 'User not found.'
  }
}
