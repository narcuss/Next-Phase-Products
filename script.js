    document.addEventListener('DOMContentLoaded', function() {
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        const registerLink = document.getElementById('register-link');
        const loginLink = document.getElementById('login-link');
  
        registerLink.addEventListener('click', function(event) {
          event.preventDefault();
          loginForm.classList.add('hidden');
          registerForm.classList.remove('hidden');
        });
  
        loginLink.addEventListener('click', function(event) {
          event.preventDefault();
          registerForm.classList.add('hidden');
          loginForm.classList.remove('hidden');
        });
  
        loginForm.addEventListener('submit', function(event) {
          event.preventDefault();
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;
          console.log('Login form submitted with email:', email, 'and password:', password);
        });
  
        registerForm.addEventListener('submit', function(event) {
          event.preventDefault();
          const username = document.getElementById('username').value;
          const email = document.getElementById('new-email').value;
          const password = document.getElementById('new-password').value;
          console.log('Register form submitted with username:', username, ', email:', email, 'and password:', password);
        });
  
        const accountLink = document.getElementById('account');
        const loginButton = document.querySelector('.login-button');
        const loginCard = document.getElementById('login-card');
  
        accountLink.addEventListener('click', function(event) {
          event.preventDefault();
          toggleLoginForm();
        });
  
        loginButton.addEventListener('click', function(event) {
          event.preventDefault();
          toggleLoginForm();
        });
  
        function toggleLoginForm() {
          if (loginCard.style.display === 'none') {
            loginCard.style.display = 'block';
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
          } else {
            loginCard.style.display = 'none';
          }
        }
      });