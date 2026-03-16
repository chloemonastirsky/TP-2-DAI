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

import fs from "fs";

fs.writeFileSync('hola.txt', 'hola me llamo cata');
const contenido = fs.readFileSync('hola.txt', 'utf-8'); 
console.log(contenido); 

let objeto = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo&dia=10");
console.log(objeto);

function parsearUrl(url) {
    let urlObj = new URL(url);
    const protocolo = urlObj.protocol;
    const host = urlObj.hostname;
    const puerto = urlObj.port;
    const path = urlObj.pathname;
    return {
        protocolo,
        host,
        path
    };
}



