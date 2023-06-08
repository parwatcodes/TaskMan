export function stringify(data) {
  return JSON.stringify(data);
}

export function parse(data) {
  return JSON.parse(data);
}

export function goto(url) {
  location.href(url)
}
