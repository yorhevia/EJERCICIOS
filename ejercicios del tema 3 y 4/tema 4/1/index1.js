/* Para un valor entero positivo Seg que representa una cantidad en segundos, 
indicar su equivalente en minutos, horas y días. */

let seg, resto, h, min, dias;

/* Ingresar */

seg = (parseInt(prompt("Ingrese los segundos")));

/* Operacion */
dias = seg / 86400;
h = seg / 3600;

resto = seg % 3600;
min = resto / 60;

/* RESULTADO */

alert("Su resultado es: " + Math.trunc(dias) + " Dias con " + Math.trunc(h)
 + " horas con " + Math.trunc(min) + " minutos")