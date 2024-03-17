let x, c, ec, re;

/* Asignar */

x = parseInt(prompt("Coloque los valores para X"));
c = parseInt(prompt("Coloque los valores para C"));
y = parseInt(prompt("Coloque los valores para Y"));

/* Operacion */

ec = [(x + c)**2 + (y - 0)**2]**1/2 + [(x - c)**2 + (y - 0)**2]**1/2;
re = ec == 2;

/* Resultado */

alert("El resultado de esta ecuacion es: " + ec + "\nEl resultado es: " + re);