const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main');

const openAndCloseSidebar = () => {
  sidebar.classList.toggle("open");
  sidebar.classList.toggle("closed");

  main.classList.toggle("open");
  main.classList.toggle("closed");
}


document.getElementById('sidebar-open-btn').onclick = openAndCloseSidebar;
document.getElementById('sidebar-close-btn').onclick = openAndCloseSidebar;