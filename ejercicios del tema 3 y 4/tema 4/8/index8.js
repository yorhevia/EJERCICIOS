let  numero = parseFloat(prompt("Ingrese la cantidad a descomponer"));

if(numero.length !== 4 || isNaN(numero)){
    console.log("Por favor ingrese un número entero de 4 dígitos.");
    parseFloat(prompt("Ingrese un numero de 4 digitos"));
}else{
   // Descomponer el número en unidades de mil, centenas, decenas y unidades
   let unidadesMil = Math.floor(numero / 1000);
   let centenas = Math.floor((numero % 1000) / 100);
   let decenas = Math.floor((numero % 100) / 10);
   let unidades = numero % 10;

    // Mostrar las unidades de mil, centenas, decenas y unidades
    console.log("Unidades de mil: " + unidadesMil);
    console.log("Centenas: " + centenas);
    console.log("Decenas: " + decenas);
    console.log("Unidades: " + unidades);
}
