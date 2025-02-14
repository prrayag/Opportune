function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.classList.contains('show')) {
    sidebar.classList.remove('show');
  } else {
    sidebar.classList.add('show');
  }
}
