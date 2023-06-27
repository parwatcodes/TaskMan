export function dragFrom(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

export function dropTo(ev) {
  ev.preventDefault();

  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
