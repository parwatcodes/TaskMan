// Run when the app loads.
import { stringify } from './utils';

function seedUser() {
  const admins = localStorage.getItem("admins");

  if (!admins?.length) {
    let defaultAdmin = {
      "id": 1,
      "name": "Dave Reese",
      "role": "admin",
      "email": "dave.reese@gmail.com",
      "password": "Dave@123"
    }

    localStorage.setItem("admins", stringify([defaultAdmin]));
  }
}
