export function displaySelectedRating () {
  const ratingInput = document.getElementById('rating-input');
  let displayDiv = document.getElementById('display-selected-rating');

  ratingInput.addEventListener('input', () => {
    const selectedValue = ratingInput.value;
    displayDiv.textContent = selectedValue;
  });
  
}