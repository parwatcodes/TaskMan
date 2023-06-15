import { login } from './login.js';
import { isAdmin, getMembers } from '../../helpers/api.js'
import { generatePassword } from './add-user.js';
import { handleOnChangeForTask } from './task.js';
import { goto, logout } from '../../helpers/utils.js';
import { isAuthenticated } from '../../helpers/validators.js';

window.goto = goto;
window.login = login;
window.logout = logout;
window.isAdmin = isAdmin;
window.getMembers = getMembers;
window.isAuthenticated = isAuthenticated;
window.generatePassword = generatePassword;
window.handleOnChangeForTask = handleOnChangeForTask;
