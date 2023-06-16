const toast = document.getElementById('toast');

export function showToast(msg) {
  if (!msg) return;
  toast.querySelector('.toast-body').innerHTML = msg;
  toast.classList.add('visible');
  document.getElementById('toast').style.display = 'block'

  setTimeout(() => {
    hideToast();
  }, 4000)
}

export function hideToast() {
  toast.classList.remove('visible');
}
