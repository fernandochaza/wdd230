import { displayWeather } from './displayWeather.js';
import { getLastModification } from "./getLastModification.js";
import { toggleMenu } from "./toggleMenu.js";
import { displayVisits } from "./VisitsCount.js";

getLastModification();
toggleMenu();
displayVisits(".visits");
displayWeather();