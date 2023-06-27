export function getUserVisits() {
  const userVisits = JSON.parse(localStorage.getItem('visitsCount')) || 0;
  return userVisits;
};

export function addNewVisit() {
  const userVisits = getUserVisits() ;
  userVisits++;
  localStorage.setItem('visitsCount', JSON.stringify(userVisits));
};


export function displayVisits(visitsPlaceholderClassName) {
  const visitsPlaceholder = document.querySelector(visitsPlaceholderClassName);
  if (getUserVisits() == 0) {
    visitsPlaceholder.textContent = "Welcome! This is your first visit!";
  }
  else {
    addNewVisit();
    visitsPlaceholder.textContent = `Number of visits: ${getUserVisits()}. Welcome back!`;
  }
};