function getUserVisits() {
  const userVisits = JSON.parse(localStorage.getItem('visitsCount')) || 0;
  return userVisits;
};

function addNewVisit() {
  let userVisits = getUserVisits() ;
  userVisits++;
  localStorage.setItem('visitsCount', JSON.stringify(userVisits));
};


export function displayVisits(visitsPlaceholderClassName) {
  const visitsPlaceholder = document.querySelector(visitsPlaceholderClassName);
  if (getUserVisits() == 0) {
    visitsPlaceholder.textContent = "Welcome! This is your first visit!";
    addNewVisit();
  }
  else {
    addNewVisit();
    visitsPlaceholder.textContent = `Number of visits: ${getUserVisits()}. Welcome back!`;
  }
};
