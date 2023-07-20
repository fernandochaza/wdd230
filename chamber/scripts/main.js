import { displayWeather } from './displayWeather.js';
import { displayForecast } from './displayForecast.js';
import { getLastModification } from "./getLastModification.js";
import { toggleMenu } from "./toggleMenu.js";

getLastModification();
toggleMenu();
displayWeather();
displayForecast();
