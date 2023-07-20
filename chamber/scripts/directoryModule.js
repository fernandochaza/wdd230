import { getLastModification } from "./getLastModification.js";
import { toggleMenu } from "./toggleMenu.js";
import { generateDirectoryCards} from "./generateDirectoryCards.js"
import { toggleDirectory } from './toggleDirectory.js';
import { displayWeather } from './displayWeather.js';

getLastModification();
toggleMenu();
generateDirectoryCards();
toggleDirectory();
displayWeather();