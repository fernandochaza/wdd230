const date = new Date();
const year = date.getFullYear();
document.getElementById("year").textContent = year;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;
