// Runs when the app loads.
import { getAppData } from './api.js';
import { stringifyIt, parseIt } from './utils.js';
import { APP_DATA_KEY, DEFAULT_ADMIN, ADMIN, DEFAULT_MEMBER, DEFAULT_TASK } from './constants.js';

function seedUser() {
  let users = getAppData()?.users;
  let tasks = getAppData()?.tasks;
  let isAdminThere = users?.find(user => user.role === ADMIN);

  if (!isAdminThere) {
    let data = {
      users: [DEFAULT_ADMIN, DEFAULT_MEMBER],
    };

    if (!tasks?.length) {
      data.tasks = [DEFAULT_TASK];
    }

    localStorage.setItem(APP_DATA_KEY, stringifyIt(data));
  }
}

seedUser();
