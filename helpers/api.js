import { APP_DATA_KEY } from './constants.js';
import { stringifyIt, parseIt } from './utils.js';

export function getAppData() {
  return parseIt(localStorage.getItem(APP_DATA_KEY));
}

export function getMembers() {
  return localStorage.getItem("users");
}

export function getAdmins() {
  return localStorage.getItem("admins")
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
  let users = getAllUsers();

  return users.find(user => user.email === email);
}

export function getAllUsers() {
  let members = getMembers();
  let admins = getAdmins();

  return [...members, ...admins];
}

export function searchTask() {
  let tasks = getAllTask();

}
