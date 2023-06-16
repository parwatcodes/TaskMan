import { login } from './login.js';
import { generatePassword } from './add-user.js';
import { handleOnChangeForTask } from './task.js';
import { goto, logout } from '../../helpers/utils.js';
import { isAuthenticated } from '../../helpers/validators.js';
import { isAdmin, getMembers, groupTaskByListName } from '../../helpers/api.js'

window.goto = goto;
window.login = login;
window.logout = logout;
window.isAdmin = isAdmin;
window.getMembers = getMembers;
window.isAuthenticated = isAuthenticated;
window.generatePassword = generatePassword;
window.groupTaskByListName = groupTaskByListName;
window.handleOnChangeForTask = handleOnChangeForTask;
