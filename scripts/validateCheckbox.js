const check = document.getElementById('Check1');
const button = document.getElementById('btn-send')

check.addEventListener('click', () => {
  if (button.classList.contains('enable')) {
    button.classList.remove("enable");
  } else {
    button.classList.add("enable");
  }
});
