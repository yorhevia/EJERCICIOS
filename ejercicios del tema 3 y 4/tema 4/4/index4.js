/* Determinar si un dígito es par o impar */
let num;

num = parseInt(prompt("Ingrese el numero: "));

if(num % 2 == 0) {
    alert("el numero " + num + " es par");
    console.log("el numero " + num + " es par")
} else{
    alert("el numero " + num + " es impar");
    console.log("el numero " + num + " es impar")
}