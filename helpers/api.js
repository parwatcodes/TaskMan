import { stringifyIt, parseIt } from './utils.js';
import { APP_DATA_KEY, ADMIN, MEMBER } from './constants.js';

export function getAppData() {
  return parseIt(localStorage.getItem(APP_DATA_KEY));
}

export function getUserByRole(role) {
  let appData = getAppData();
  let users = appData?.users?.filter(user => user.role === role);

  return users;
}

export function getMembers() {
  return getUserByRole(MEMBER);
}

export function getAdmins() {
  return getUserByRole(ADMIN);
}

export function getAllTask() {
  let appData = getAppData();

  return appData['tasks'];
}

export function getTaskById(id) {
  let tasks = getAllTask();
  let task = tasks.find(task => task.id === id);

  return task;
}

export function updateTask(id, data) {

}

export function findUserByEmail(email) {
  let users = getAppData()?.['users'];
  let user = users.find(user => user.email === email);

  return user;
}

export function searchTask(searchTerm) {
  let tasks = getAllTask();

  const filteredTasks = tasks.filter(task => {
    task.name?.toLowerCase()?.includes(searchTerm.toLowerCase().trim());
  });

  return filteredTasks;
}
