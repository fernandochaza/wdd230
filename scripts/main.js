import { getDate } from "./getDate.js";
import { toggleDarkMode } from "./toggleDarkMode.js";
import { toggleMenu } from "./toggleMenu.js";
import { displayVisits } from "./visitsCount.js"

getDate();
toggleMenu();
toggleDarkMode();
displayVisits(".visits");
