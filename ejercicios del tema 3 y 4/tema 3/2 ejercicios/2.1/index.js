// 2.1 Traducir las siguientes expresiones 
let x, a, y, b, r;

alert("Ingrese los valores");
x = parseInt(prompt("Ingrese el valor para X"));
y = parseInt(prompt("Ingrese el valor para Y"));
a = parseInt(prompt("Ingrese el valor para A"));
b = parseInt(prompt("Ingrese el valor para B"));

Math.sqrt(r = ((x - a)**2 + (y - b)**2));

alert("Su resultado es: " + r);