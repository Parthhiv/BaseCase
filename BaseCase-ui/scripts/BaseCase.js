// JavaScript to toggle between Login and Signup forms
document.getElementById('toggleForm').addEventListener('click', function () {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const formTitle = document.getElementById('formTitle');
    const toggleText = document.getElementById('toggleForm');
  
    if (loginForm.style.display === 'none') {
      loginForm.style.display = 'block';
      signupForm.style.display = 'none';
      formTitle.innerText = 'Login';
      toggleText.innerText = "Don't have an account? Signup";
    } else {
      loginForm.style.display = 'none';
      signupForm.style.display = 'block';
      formTitle.innerText = 'Signup';
      toggleText.innerText = 'Already have an account? Login';
    }
  });
  