import { login } from './login.js';
import { loadTask } from './dashboard.js'
import { generatePassword } from './add-user.js';
import { showToast, hideToast } from './toast.js'
import { goto, readableDateFormat } from '../../helpers/utils.js';
import {
  logout,
  isAdmin,
  addTask,
  addUser,
  getMembers,
  updateTask,
  getTaskById,
  findUserByEmail,
  groupTaskByListName
} from '../../helpers/api.js'

window.goto = goto;
window.login = login;
window.logout = logout;
window.addTask = addTask;
window.addUser = addUser;
window.isAdmin = isAdmin;
window.loadTask = loadTask;
window.showToast = showToast;
window.hideToast = hideToast;
window.updateTask = updateTask;
window.getMembers = getMembers;
window.getTaskById = getTaskById;
window.findUserByEmail = findUserByEmail;
window.generatePassword = generatePassword;
window.readableDateFormat = readableDateFormat;
window.groupTaskByListName = groupTaskByListName;
