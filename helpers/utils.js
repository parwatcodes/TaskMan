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

export function uuid() {
  return URL.createObjectURL(new Blob([])).slice(-36);
}
