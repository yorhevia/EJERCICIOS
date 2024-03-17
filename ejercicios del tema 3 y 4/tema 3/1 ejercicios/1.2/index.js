// 1.2 calculo de descuento

let p, ah, de, tp;

p = parseInt(prompt("ingrese el precio"));

de = 0.25;

ah = p * de;
tp = p - ah;

alert("Su total a cancelar es:" +  tp  + "se esta ahorrando: "  +  ah);