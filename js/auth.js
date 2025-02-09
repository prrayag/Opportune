// Handle Signup
document.getElementById('signupForm')?.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Simulate saving user credentials
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
  
    // Redirect to dashboard
    window.location.href = 'dashboard.html';
  });
  
  // Handle Login
  document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission
  
    const enteredEmail = document.getElementById('email').value;
    const enteredPassword = document.getElementById('password').value;
  
    // Retrieve saved credentials from localStorage
    const savedEmail = localStorage.getItem('userEmail');
    const savedPassword = localStorage.getItem('userPassword');
  
    // Check if credentials match
    if (enteredEmail === savedEmail && enteredPassword === savedPassword) {
      window.location.href = 'dashboard.html';  // Redirect to dashboard
    } else {
      alert('Invalid email or password. Please try again.');
    }
  });
  