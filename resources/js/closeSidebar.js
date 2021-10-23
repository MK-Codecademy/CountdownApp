const openAndCloseSidebar = () => {
  document.getElementById('sidebar');.classList.toggle("open");
  document.getElementById('main');.classList.toggle("open");
}


document.getElementById('sidebar-open-btn').onclick = openAndCloseSidebar;
document.getElementById('sidebar-close-btn').onclick = openAndCloseSidebar;