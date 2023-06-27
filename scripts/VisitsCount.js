export function getUserVisits() {
  const userVisits = localStorage.getItem('visitsCount') || 0;
  return userVisits;
};

export function addNewVisit() {
  const userVisits = getUserVisits() ;
  localStorage.setItem('visitsCount', userVisits+1);
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