var matches = document.querySelectorAll('.color-radio');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
document.documentElement.setAttribute('data-theme', currentTheme);

for (match in matches) {
  matches[match].onchange = function() {
    document.documentElement.setAttribute('data-theme', this.value);
        localStorage.setItem('theme', this.value);

  }
}