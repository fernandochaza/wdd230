export function validateForm() {

  document.getElementById('join-form').addEventListener('submit', (event) =>{
    const memberPosition = document.getElementById('position');
    const pattern = new RegExp(memberPosition.pattern);

    if (!pattern.test(memberPosition.value)) {
      event.preventDefault(); // Prevent form submission
      const message = document.getElementById('form-message');
      memberPosition.focus();
      message.textContent = "(!) Please enter a valid position";
    }
  })
  
}
