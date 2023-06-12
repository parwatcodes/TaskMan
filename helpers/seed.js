// Run when the app loads.
import { getAppData } from './api.js';
import { stringifyIt, parseIt } from './utils.js';
import { APP_DATA_KEY, DEFAULT_ADMIN, ADMIN } from './constants.js';

function seedUser() {
  let users = getAppData()?.users;
  let isAdminThere = users?.find(user => user.role === ADMIN);

  if (!isAdminThere) {
    let data = {
      users: [DEFAULT_ADMIN]
    };

    localStorage.setItem(APP_DATA_KEY, stringifyIt(data));
  }
}

seedUser();
