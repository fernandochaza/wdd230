export function getLastModification() {
  const date = new Date();
  const year = date.getFullYear();

  const lastModified = document.lastModified;
  document.querySelector(".last-modification").textContent += lastModified;
}
