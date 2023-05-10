const MODE_ICON = document.getElementById('mode_icon');
const LOGIN_FORM = document.getElementById('login-form');
const DARK_MODE_CLASS = 'dark';
const ICON_MOON_CLASS = 'fa-moon';
const ICON_SUN_CLASS = 'fa-sun';

let isDarkMode = false;

MODE_ICON.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  MODE_ICON.classList.toggle(ICON_MOON_CLASS, !isDarkMode);
  MODE_ICON.classList.toggle(ICON_SUN_CLASS, isDarkMode);
  LOGIN_FORM.classList.toggle(DARK_MODE_CLASS, isDarkMode);
});
