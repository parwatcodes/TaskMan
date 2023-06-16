import { login } from './login.js';
import { addTask } from '../../helpers/api.js';
import { generatePassword } from './add-user.js';
import { showToast, hideToast } from './toast.js'
import { goto, logout } from '../../helpers/utils.js';
import { isAuthenticated } from '../../helpers/validators.js';
import { isAdmin, getMembers, groupTaskByListName } from '../../helpers/api.js'

window.goto = goto;
window.login = login;
window.logout = logout;
window.addTask = addTask;
window.isAdmin = isAdmin;
window.showToast = showToast;
window.hideToast = hideToast;
window.getMembers = getMembers;
window.isAuthenticated = isAuthenticated;
window.generatePassword = generatePassword;
window.groupTaskByListName = groupTaskByListName;
