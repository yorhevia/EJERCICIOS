let x, y, a, b, r, ecuacion, elv;
rep=true;

elv = 2;
/* Ingresar los valores */
x = parseInt(prompt("Ingrese un valor para X:"));
y = parseInt(prompt("Ingrese un valor para Y:"));
a = parseInt(prompt("Ingrese un valor para A:"));
b = parseInt(prompt("Ingrese un valor para B:"));
r = parseInt(prompt("Ingrese un valor para R:"));


ecuacion = (x**elv + y**elv - (2 * a * x) - (2 * b * y) + a**elv + b**elv - r**elv);

rep = ecuacion == 0; 

console.log("Respuesta de esta ecuacion es: " + ecuacion);
alert("Respuesta de esta ecuacion es: " + ecuacion);