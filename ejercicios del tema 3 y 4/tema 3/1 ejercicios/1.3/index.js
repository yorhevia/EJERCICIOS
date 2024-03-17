// 1.3 conversion de unidades de tiempo

let sg, rs, mt, hrs;


sg = parseInt(prompt("ingrese la cantidad de segundos a convertir"));


// conversion
// de horas
hrs =  sg / 3600;
rs = sg % 3600;
 
// de minutos

mt = sg / 60;
rs = sg % 60;

alert("El resultado es: " +  Math.trunc(hrs) + "Horas:  " +  Math.trunc(mt) + "Minutos  " );