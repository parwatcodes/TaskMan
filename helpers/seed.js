// Run when the app loads.
import { stringifyIt } from './utils.js';
import { APP_DATA_KEY } from './constants.js';

function seedUser() {
  const data = localStorage.getItem(APP_DATA_KEY);

  let users = JSON.parse(data)?.users;
  let isAdminThere = users?.find(user => user.role === 'admin');

  if (!isAdminThere) {
    let defaultAdmin = {
      "id": 1,
      "name": "Dave Reese",
      "role": "admin",
      "email": "dave.reese@gmail.com",
      "password": "Dave@123"
    };

    let data = {
      users: [defaultAdmin]
    };

    console.log('cc')
    localStorage.setItem(APP_DATA_KEY, stringifyIt(data));
  }
}

seedUser();
