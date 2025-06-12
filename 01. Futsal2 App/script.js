const dateEl = document.getElementById('date');
const date = new Date();

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
dateEl.innerHTML = `${months[date.getMonth()]} ${date.getDate()}, ${days[date.getDay()]}`;