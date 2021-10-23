function openSidebar() {
  document.getElementById("sidebar").style.width = "35vw";
  document.getElementById("main").style.width = "65vw";
}

function closeSidebar() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.width = "100vw";
}

openSidebarBtn = document.getElementById('sidebar-open-btn');
closeSidebarBtn = document.getElementById('sidebar-close-btn');

openSidebarBtn.onclick = openSidebar
closeSidebarBtn.onclick = closeSidebar;
