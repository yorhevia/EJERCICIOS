/* Determinar el máximo de 2 valores */
let x,y;

x = parseInt(prompt("Ingrese el primer valor"));
y = parseInt(prompt("Ingrese el segundo valor"));

if (x>y){
    alert(x + " es mayor que "+ y);
}else if (y > x) {
    alert(y + " es mayor que " + x); 
} else{
   alert (" Los valores son iguales");  
}