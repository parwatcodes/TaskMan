import { getMembers } from '../../helpers/api.js';

// onChange handler for task name and description.
export function handleOnChangeForTask(event) {

  console.log('ixxx', event.target.id, event.target.value);
}

window.getMembers = getMembers;
