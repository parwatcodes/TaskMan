export function stringifyIt(data) {
  return JSON.stringify(data);
}

export function parseIt(data) {
  return JSON.parse(data);
}

export function goto(url) {
  return window.location.href = url;
}
