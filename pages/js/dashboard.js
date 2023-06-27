import { LIST } from '../../helpers/constants.js';
import { filterFromData, groupTaskByListName, searchTask } from '../../helpers/api.js';
import { readableDateFormat } from '../../helpers/utils.js';
import { dragFrom, dropTo } from './droppable.js';

const PRIOTITY_MAPPER = {
  'high': 'red',
  'medium': 'orange',
  'low': 'green'
};

export function loadTask(searchTerm) {
  let taskList = groupTaskByListName();

  //Quick fix. TODO: Refactor this
  if (searchTerm) {
    taskList = filterFromData(taskList, searchTerm);
    document.querySelectorAll(".card").forEach(el => {
      el.remove()
    });
  } else {
    document.querySelectorAll(".card").forEach(el => {
      el.remove()
    });
  }

  let inToDoTask = taskList?.['ToDo'];
  let inProgressTask = taskList?.['InProgress'];
  let inReviewTask = taskList?.['InReview'];
  let inDoneTask = taskList?.['Done'];
  let listType = Object.values(LIST);
  let cardType = ['cardToDo', 'cardInProgress', 'cardInReview', 'cardInDone'];

  [inToDoTask, inProgressTask, inReviewTask, inDoneTask].forEach((taskArr, idx) => {
    if (taskArr?.length) {
      appendToList(taskArr, cardType[idx], listType[idx]);
    }
  });
}

function appendToList(data, cardContainerType, listType) {
  const cardContainer = document.getElementById(cardContainerType);
  cardContainer.ondrop = (event) => dropTo(event, cardContainerType);
  cardContainer.ondragstart = (event) => dragFrom(event);
  cardContainer.ondragover = (event) => event.preventDefault();

  document.getElementById(`total${cardContainerType}`).innerText = data?.length;

  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.id = item.id;
    card.draggable = true;
    card.onclick = (event) => toggleTaskModal(event, listType, item.id);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = item.name;

    const description = document.createElement('p');
    description.className = 'card-text';
    description.textContent = item.description;

    const assignee = document.createElement('span');
    assignee.className = 'assignee';
    assignee.innerHTML = `<i class="bi bi-person"></i> ${item.assignedTo}`;

    const hr = document.createElement('hr');

    const taskFooter = document.createElement('div');
    taskFooter.className = 'task-footer';

    const costSpan = document.createElement('span');
    let totalCost = Number(item.hoursWorked || 0) * Number(item.userHourlyRate || 0);
    costSpan.textContent = 'Cost: $' + totalCost;
    costSpan.style.fontWeight = 500;
    costSpan.style.flex = 1;

    if (item.listName !== 'Done' || !totalCost) {
      costSpan.style.visibility = 'hidden';
    }

    const flagIcon = document.createElement('i');
    flagIcon.className = 'bi bi-tag-fill';
    flagIcon.style.fontSize = '14px';
    flagIcon.style.color = PRIOTITY_MAPPER[item.priority];

    const clockIcon = document.createElement('i');
    clockIcon.className = 'bi bi-clock-fill';
    clockIcon.style.fontSize = '14px';

    let formattedEndDate = readableDateFormat(item.endDate);

    const dateSpan = document.createElement('span');
    dateSpan.textContent = formattedEndDate || '_';
    dateSpan.style.fontWeight = 500;

    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(assignee);
    cardBody.appendChild(hr);
    // taskFooter.appendChild(costIcon);
    taskFooter.appendChild(costSpan);
    taskFooter.appendChild(flagIcon);
    taskFooter.appendChild(clockIcon);
    clockIcon.appendChild(dateSpan);
    cardBody.appendChild(taskFooter);

    card.appendChild(cardBody);
    cardContainer.appendChild(card);
  });
}

let searchEle = document?.getElementById('searchInput');

searchEle?.addEventListener("input", searchAllTask);

function searchAllTask(event) {
  let searchTerm = event.target?.value;

  loadTask(searchTerm);
}
