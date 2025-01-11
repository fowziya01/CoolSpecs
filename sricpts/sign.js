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

  // Retrieve the existing users from localStorage
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // Check if the email already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    alert('This email is already registered. Please sign in.');
    return;
  }

  // Add new user and store back in localStorage
  const newUser = { name, email, password };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

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

  // Retrieve users from localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const storedUser = users.find(user => user.email === email && user.password === password);

  if (storedUser) {
    alert(`Welcome back, ${storedUser.name}!`);
    window.location.replace("index.html");
  } else {
    alert('Invalid credentials. Please try again.');
  }
});
