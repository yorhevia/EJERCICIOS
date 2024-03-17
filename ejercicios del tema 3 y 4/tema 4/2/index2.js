/* Solicitar un valor entero que representa un año 
e indicar si se trata de un año bisiesto.*/

let year;

/* Ingrese el año */
year = parseInt(prompt("Ingrese el año"));

/* Aplicar la regla del año bisiesto*/

if (year % 4 == 0){
    if(year % 100 == 0){
        if(year % 400 == 0){

        }else{
            alert("El año es bisiesto")
        }
    }else{
        alert("El año es bisiesto");
    }
}else{
    alert("El año no es bisiesto");
}