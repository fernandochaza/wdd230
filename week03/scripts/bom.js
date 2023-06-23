const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector(".list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

button.addEventListener("click", () => {
  if (input.value != "") {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = "";
    input.focus();
  } else {
    input.placeholder = "Insert something";
  }
});

function displayList(item) {
  const li = document.createElement("li");
  li.textContent = item;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";

  li.append(deleteButton);
  this.list.appendChild(li);

  deleteButton.addEventListener("click", () => {
    this.list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
}

function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}