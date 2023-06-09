import { goto } from './utils.js';

export function isAuthenticated() {
  const URI = '/pages/dashboard.html';

  goto(URI);
}
