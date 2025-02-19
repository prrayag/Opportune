function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
  }
  
  // Dummy data for charts
  const ctx1 = document.getElementById('profileViewsChart').getContext('2d');
  const profileViewsChart = new Chart(ctx1, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: 'Profile Views',
        data: [10, 30, 20, 50, 40],
        borderColor: '#0033a0',
        fill: false,
      }]
    }
  });
  
  const ctx2 = document.getElementById('applicationChart').getContext('2d');
  const applicationChart = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['Submitted', 'In Progress', 'Rejected', 'Accepted'],
      datasets: [{
        label: 'Applications',
        data: [50, 20, 15, 5],
        backgroundColor: '#0033a0'
      }]
    }
  });
  