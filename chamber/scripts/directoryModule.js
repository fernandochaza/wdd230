import { getLastModification } from "./getLastModification.js";
import { toggleMenu } from "./toggleMenu.js";
import { generateDirectoryCards} from "./generateDirectoryCards.js"
import { toggleDirectory } from './toggleDirectory.js';

getLastModification();
toggleMenu();
generateDirectoryCards();
toggleDirectory();