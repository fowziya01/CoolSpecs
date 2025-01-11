import { navbar } from "./navbar.js";

document.addEventListener('DOMContentLoaded', () => {
  const signinToggle = document.getElementById('signin-toggle');
  const signupToggle = document.getElementById('signup-toggle');
  const signinForm = document.getElementById('signin-form');
  const signupForm = document.getElementById('signup-form');

  // Initially display Sign-In form and hide Sign-Up form
  signinForm.classList.remove('hidden');
  signupForm.classList.add('hidden');

  // Toggle between Sign-In and Sign-Up forms
  signinToggle.addEventListener('click', () => {
    signinForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
  });

  signupToggle.addEventListener('click', () => {
    signupForm.classList.remove('hidden');
    signinForm.classList.add('hidden');
  });

  // Handle Sign-Up Form Submission
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();
    const confirmPassword = document.getElementById('signup-confirm-password').value.trim();

    if (!name || !email || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Check if the user already exists
    const existingUser = JSON.parse(localStorage.getItem('user'));
    if (existingUser && existingUser.email === email) {
      alert('This email is already registered. Please sign in.');
      return;
    }

    // Store user data in localStorage
    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));

    alert('Sign-Up Successful! Please sign in.');

    // Reset the form fields and switch to Sign-In form
    signupForm.reset();
    signinForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
  });

  // Handle Sign-In Form Submission
  signinForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('signin-email').value.trim();
    const password = document.getElementById('signin-password').value.trim();

    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert(`Welcome back, ${storedUser.name}!`);
      // Redirect to the homepage
      window.location.replace("index.html");
    } else {
      alert('Invalid credentials. Please try again.');
    }
  });
});
