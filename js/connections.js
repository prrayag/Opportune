function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.classList.contains('show')) {
    sidebar.classList.remove('show');
  } else {
    sidebar.classList.add('show');
  }
}

document.querySelectorAll('.connect-button').forEach(button => {
  button.addEventListener('click', () => {
    alert('Connection request sent!');
  });
});
