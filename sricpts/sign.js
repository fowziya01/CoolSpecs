import { navbar} from "./navbar.js";
document.addEventListener('DOMContentLoaded', () => {
    const signinToggle = document.getElementById('signin-toggle');
    const signupToggle = document.getElementById('signup-toggle');
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');
  
    // Toggle between Sign-In and Sign-Up forms
    signinToggle.addEventListener('click', () => {
      signinForm.classList.remove('hidden');
      signupForm.classList.add('hidden');
    });
  
    signupToggle.addEventListener('click', () => {
      signupForm.classList.remove('hidden');
      signinForm.classList.add('hidden');
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
  
      // Mock Sign-In Validation
      if (email === "user@example.com" && password === "123") {
        alert('Sign-In Successful!');
        window.location.href = "index.html"; // Redirect to homepage
      } else {
        alert('Invalid credentials. Please try again.');
      }
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
  
      alert('Sign-Up Successful!');
      signinForm.classList.remove('hidden');
      signupForm.classList.add('hidden');
    });
  });
  