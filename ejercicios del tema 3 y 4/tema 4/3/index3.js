/* 
Dada una letra cualquiera indicar 
si es consonante, vocal o un dígito
*/

let letra;

letra = prompt("Ingrese una letra");
console.log(letra);

if (letra.match(/[aeiou]/i)){
    alert(letra + " es vocal");
    console.log(letra + " es vocal");
} else if (letra.match(/[0-9]/)){
    alert(letra + " es numero");
    console.log(letra + " es numero");
} else {
    alert(letra + " es consonante");
    console.log(letra + " es consonante");
}