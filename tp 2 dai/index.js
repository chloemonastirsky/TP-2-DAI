console.log("hola me llamo cata");

import matematica from "./matematica.js";

console.log(matematica.sumar(1,3));
console.log(matematica.restar(1,6));
console.log(matematica.Pi());

import {Alumno} from "./alumno.js";

const alumno1 = new Alumno("chloe", 45903499);
console.log(alumno1);
const alumno2 = new Alumno("cata", 12345678);
console.log(alumno2);