import { genericUpdate } from '../../helpers/api.js'

export function dragFrom(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

export function dropTo(ev, cardContainerType) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  let listNameEle;

  // Runs only if a card is dropped upon a card.
  if (!ev.target.id) {
    let parentTarget = document.getElementById(cardContainerType);
    listNameEle = parentTarget;
    parentTarget.appendChild(document.getElementById(data));
  } else {
    listNameEle = ev.target;
    ev.target.appendChild(document.getElementById(data));
  }

  let listName = listNameEle?.id.replace('card', '');
  updateCardStatusType(data, listName)
}

function updateCardStatusType(data, listName) {
  genericUpdate(data, { listName })

  window.location.reload();
}
