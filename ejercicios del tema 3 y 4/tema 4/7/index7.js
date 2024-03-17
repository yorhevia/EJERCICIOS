/* Determinar el signo de la suma de dos números, sin calcularla. */

let num1, num2;

num1 = parseInt(prompt("Ingrese el 1er numero"));
num2 = parseInt(prompt("Ingrese el 2do numero"));

if(num1>0 && num2>0){
    alert("EL signo de la suma es positivo");
    console.log("EL signo de la suma es positivo");
}else if (num1<0 && num2<0) {
    alert("El signo de la suma es negativo");
    console.log("El signo de la suma es negativo");
} else{
    alert("La suma no esta determinado (Depende de los valores absolutos)");
}