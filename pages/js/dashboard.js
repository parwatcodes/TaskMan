import { LIST } from '../../helpers/constants.js';
import { groupTaskByListName } from '../../helpers/api.js';
const PRIOTITY_MAPPER = {
  'high': 'red',
  'medium': 'orange',
  'low': 'green'
}

export function loadTask() {
  let taskList = groupTaskByListName();

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
  })
}

function appendToList(data, cardContainerType, listType) {
  const cardContainer = document.getElementById(cardContainerType);
  document.getElementById(`total${cardContainerType}`).innerText = data?.length;

  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
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

    const flagIcon = document.createElement('i');
    flagIcon.className = 'bi bi-flag-fill h6';
    flagIcon.style.color = PRIOTITY_MAPPER[item.priority];

    const clockIcon = document.createElement('i');
    clockIcon.className = 'bi bi-clock-fill';

    const dateSpan = document.createElement('span');
    dateSpan.textContent = item.endDate;

    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(assignee);
    cardBody.appendChild(hr);
    taskFooter.appendChild(flagIcon);
    taskFooter.appendChild(clockIcon);
    clockIcon.appendChild(dateSpan);
    cardBody.appendChild(taskFooter);

    card.appendChild(cardBody);
    cardContainer.appendChild(card);
  });
}
