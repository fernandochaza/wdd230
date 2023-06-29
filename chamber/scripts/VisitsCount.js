function getNumberOfVisits() {
  const userVisits = JSON.parse(localStorage.getItem('visitsCount')) || 0;
  return userVisits;
};

function getLastVisit() {
  const lastVisit = JSON.parse(localStorage.getItem('lastVisit')) || 0;
  return lastVisit;
}

function addNewVisit() {
  // Get the number of visits from the user's local storage and add up one
  let userVisits = getNumberOfVisits();
  userVisits++;

  // Get the current date in milliseconds
  const now = Date.now();

  localStorage.setItem('visitsCount', JSON.stringify(userVisits));
  localStorage.setItem('lastVisit', JSON.stringify(now));
};


export function displayVisits(visitsPlaceholderClassName) {
  const visitsPlaceholder = document.querySelector(visitsPlaceholderClassName);
  if (getNumberOfVisits() == 0) {
    visitsPlaceholder.textContent = "Welcome! Let us know if you have any questions.";
    addNewVisit();
  }
  else {
    // Get the current date in milliseconds
    const now = Date.now();
    
    // Get the last visit time in Milliseconds
    const lastVisit = getLastVisit();

    // Calculate milliseconds since the last visit and pass it to days
    const msToDays = 84600000;
    const elapsedTime = (now - lastVisit) / msToDays;
  
    if (elapsedTime > 1) {
      visitsPlaceholder.textContent = `You last visited ${Math.round(elapsedTime)} days ago.`;
    }
    else {
      visitsPlaceholder.textContent = "Back so soon! Awesome!";
    }

    addNewVisit();
  }
};