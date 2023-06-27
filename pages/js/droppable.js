export function dragFrom(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

export function dropTo(ev, cardContainerType) {
  ev.preventDefault();

  var data = ev.dataTransfer.getData("text");

  // Runs only if a card is dropped upon a card.
  if (!ev.target.id) {
    let parentTarget = document.getElementById(cardContainerType);
    parentTarget.appendChild(document.getElementById(data));
  } else {
    ev.target.appendChild(document.getElementById(data));
  }
}
