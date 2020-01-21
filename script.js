const emailField = document.querySelector('#signUpEmail');
const createAccBtn = document.querySelector('.createAccountBtn');
const googleBtn = document.querySelector('.googleSignUp');

emailField.addEventListener('keyup', (e) => {
  const isValidEmail = emailField.checkValidity();
  if (isValidEmail) {
    createAccBtn.disabled = false;
    googleBtn.style.display = 'none';
  } else {
    createAccBtn.disabled = true;
    googleBtn.style.display = 'block';
  }
});