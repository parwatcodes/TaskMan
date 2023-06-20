import { getLoggedUserInfo, isAdmin } from '../../helpers/api.js';

window.openProfileModal = function () {
  var profileModal = document.getElementById('profileModal');

  profileModal.style.display = 'block';

  let data = getLoggedUserInfo();

  let nameEle = document.getElementById('user-name');
  let emailEle = document.getElementById('user-email');
  let joinedDate = document.getElementById('user-joinedDate');
  let role = document.getElementById('user-role');

  nameEle.innerText = data.email.split('@')[0];
  emailEle.innerText = data.email;
  joinedDate.innerText = 'Joined on June, 2023';
  role.innerText = data?.role?.replace(data.role[0], data.role[0].toUpperCase());
}
