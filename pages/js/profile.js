import { getLoggedUserInfo, isAdmin } from '../../helpers/api.js';

window.openProfileModal = function () {
  var profileModal = document.getElementById('profileModal');

  profileModal.style.display = 'block';

  let data = getLoggedUserInfo();

  let nameEle = document.getElementById('name');
  let emailEle = document.getElementById('email');
  let joinedDate = document.getElementById('joinedDate');
  let role = document.getElementById('role');

  nameEle.innerText = data.email.split('@')[0];
  emailEle.innerText = data.email;
  joinedDate.innerText = 'Joined on June, 2023';
  role.innerText = data?.role?.replace(data.role[0], data.role[0].toUpperCase());
}
