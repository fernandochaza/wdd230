const confirmationPasswordInput = document.getElementById('password-confirm');

confirmationPasswordInput.addEventListener('input', () => {
  let formMessage = document.getElementById('form-message');

  const password = document.getElementById('password').value;
  const confirmationPasswordValue = confirmationPasswordInput.value;

  if (password === confirmationPasswordValue) {
    formMessage.textContent = "Passwords match";
  }
  else {
    formMessage.textContent = "(!) Passwords don't match";
  }
});