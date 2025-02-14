document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.querySelector('.search-bar');
  
    searchBar.addEventListener('keyup', function (e) {
      const term = e.target.value.toLowerCase();
      const connections = document.querySelectorAll('.connection-card, .other-connections li');
      connections.forEach(function (item) {
        const name = item.textContent.toLowerCase();
        if (name.includes(term)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  