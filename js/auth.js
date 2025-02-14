// Simple form validation check
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  const inputs = form.querySelectorAll('input');
  let valid = true;
  inputs.forEach(input => {
    if (!input.value.trim()) {
      valid = false;
    }
  });
  if (!valid) {
    e.preventDefault();
    alert('Please fill all fields');
  } else {
    alert('Sign up successful!');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value.trim();
    const password = form.querySelector('input[type="password"]').value.trim();

    if (!email || !password) {
      alert('Please fill all fields');
      return;
    }

    // Simulated login check
    if (email === 'user@opportune.com' && password === 'password') {
      alert('Login successful!');
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid email or password');
    }
  });
});
