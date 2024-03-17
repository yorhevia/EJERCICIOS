/* Calcular el valor absoluto de un número N */

let N, absoluto;

N = parseInt(prompt("Ingrese el valor N"));

if(N>0) {
    absoluto = N;
} else {
    absoluto = -N;
}

alert("El valor de N " + N);