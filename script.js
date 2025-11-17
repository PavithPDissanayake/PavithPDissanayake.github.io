function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function updateColomboTime() {
    const options = {
      timeZone: 'Asia/Colombo',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    const now = new Date();
    document.getElementById('local-time').textContent =
      now.toLocaleTimeString('en-US', options) + ' ';
  }
  updateColomboTime();
  setInterval(updateColomboTime, 1000);

updateLocalTime();

updateLocalTime();
 