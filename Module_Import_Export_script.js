/* Module Import And Export
export---we can use export key word n nuber of times in file
export default---we can use default export key word n nuber of times in file
import--- we can use import keyword to import a variable or method

multiple imports : import {name, getName} from './filepath'
imports all exported members : import * as Utils from './filepath'
imports a module with a default member : import user from './filepath' 
------------------- <script type="module"------------------------
*/
import minus, { PI, add } from "./Utils.js";
//import minus from "./Utils.js";
import * as UTILS from "./Utils.js";

//console.log(UTILS.PI);
//console.log(UTILS.add(2, 3));
//console.log(UTILS.minus(5, 3));

console.log(PI);
console.log(add(2, 3));
console.log(minus(5, 3));
