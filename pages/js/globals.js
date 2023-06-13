import { login } from './login.js';
import { handleOnChangeForTask } from './task.js'
import { goto, logout } from '../../helpers/utils.js';
import { isAuthenticated } from '../../helpers/validators.js';

window.goto = goto;
window.login = login;
window.logout = logout;
window.isAuthenticated = isAuthenticated;
window.handleOnChangeForTask = handleOnChangeForTask;
