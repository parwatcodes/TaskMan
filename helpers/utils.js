export function stringifyIt(data) {
  return JSON.stringify(data);
}

export function parseIt(data) {
  return JSON.parse(data);
}

export function goto(url) {
  return window.location.href = url;
}

export function persistUser(email) {
  localStorage.setItem('isAuthenticated', true);
  localStorage.setItem('email', email);
}

export function logout() {
  localStorage.removeItem('isAuthenticated');
  localStorage.removeItem('email');

  goto("/pages/login.html")
}
