let x, p, y, q, a, b, ec;
let res;

/* Asignar */

x = parseInt(prompt("Ingrese el valor X"));
p = parseInt(prompt("Ingrese el valor P"));
y = parseInt(prompt("Ingrese el valor Y"));
q = parseInt(prompt("Ingrese el valor Q"));
a = parseInt(prompt("Ingrese el valor A"));
b = parseInt(prompt("Ingrese el valor B"));

/* Operacion */

ec = (x - p**2 / a**2 + (y / q)**2 / b**2);
res = ec == 1;

/* Resultado */

alert("El resultado de esta ecuacion es: " + res + "\nLa respuesta es: " + ec);
