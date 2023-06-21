import { stringifyIt, parseIt, uuid } from './utils.js';
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

  return appData?.['tasks'];
}

export function addTask(data) {
  let appData = getAppData();

  appData?.tasks?.push({ ...data, id: uuid() });
  localStorage.setItem(APP_DATA_KEY, stringifyIt(appData));
}

export function addUser(data) {
  let appData = getAppData();

  appData?.users?.push({ ...data, id: uuid() });
  localStorage.setItem(APP_DATA_KEY, stringifyIt(appData));
}

// Get the task for user. If loggedIn user is admin, fetch all task else fetch task assigned.
export function getTaskList() {
  let allTask;

  if (isAdmin()) {
    allTask = getAllTask().map(task => {
      let userHourlyRate = findUserByEmail(task.assignedTo)?.hourlyRate;
      return { ...task, userHourlyRate };
    });
  } else {
    let currentMemberEmail = localStorage.getItem('email');
    let userHourlyRate = findUserByEmail(currentMemberEmail)?.hourlyRate;

    allTask = getAllTask()
      ?.filter(task => task.assignedTo === currentMemberEmail)
      ?.map(task => ({ ...task, userHourlyRate }));
  }

  return allTask;
}

export function groupTaskByListName() {
  let taskList = getTaskList();

  const transformedObject = taskList?.reduce((result, item) => {
    if (result[item.listName]) {
      result[item.listName].push(item);
    } else {
      result[item.listName] = [item];
    }
    return result;
  }, {});

  return transformedObject;
}

export function getTaskById(id) {
  let tasks = getAllTask();
  let task = tasks.find(task => task.id === id);

  return task;
}

export function updateTask(id, data) {
  let appData = getAppData();

  let allTask = appData?.tasks?.map(task => task.id === id ? data : task);
  appData.tasks = allTask;

  localStorage.setItem(APP_DATA_KEY, stringifyIt(appData));
}

export function findUserByEmail(email) {
  let users = getAppData()?.['users'];
  let user = users?.find(user => user.email === email);

  return user;
}

export function searchTask(searchTerm) {
  let tasks = getAllTask();

  const filteredTasks = tasks.filter(task => {
    task.name?.toLowerCase()?.includes(searchTerm.toLowerCase().trim());
  });

  return filteredTasks;
}

export function getLoggedUserInfo() {
  let email = localStorage.getItem('email');

  return findUserByEmail(email);
}

export function currentUserRole() {
  let email = localStorage.getItem('email');
  let user = findUserByEmail(email);

  return user?.role;
}

export function isAdmin() {
  let role = currentUserRole();

  return role === 'admin';
}

export function logout() {
  localStorage.removeItem('isAuthenticated');
  localStorage.removeItem('email');

  goto("/pages/login.html");
}
