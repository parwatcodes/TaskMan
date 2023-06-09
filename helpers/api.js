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
  return localStorage.getItem("tasks")
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

export function persistUser(email) {
  localStorage.setItem('isAuthenticated', true);
  localStorage.setItem('loggedInUser', email);
}

export function logout() {
  localStorage.removeItem('isAuthenticated');
  localStorage.removeItem('loggedInUser');
}
