import { getDate } from "./getDate.js";
import { toggleDarkMode } from "./toggleDarkMode.js";
import { toggleMenu } from "./toggleMenu.js";
import { displayVisits } from "./visitsCount.js"
import { displayWeather } from './displayWeather.js';
import { getLinks } from "./links.js";

getDate();
toggleMenu();
toggleDarkMode();
displayVisits(".visits");
displayWeather();
getLinks();
