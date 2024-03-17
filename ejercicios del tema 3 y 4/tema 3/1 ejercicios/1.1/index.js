let tp1, tp2,tp3,tp4 ;
let F1, F2, F3, F4;
let P1, P2, P3,P4
let TL1, TL2, TL3, TL4;

alert("ingrese la cantidad de temperatura a convertir");
tp1 = parseInt(prompt("Primero Temperatura"));
tp2 = parseInt(prompt("Segunda Temperatura"));
tp3 = parseInt(prompt("Tercera temperatura"));
tp4 = parseInt(prompt("Cuarata Temperatura"));

// conversion

F1 = (32 + 1.8 * tp1) ;
F2 = (32 + 1.8 * tp2) ;
F3 = (32 + 1.8 * tp3) ;
F4 = (32 + 1.8 * tp4) ;

Eq1 = (F1);
Eq2 = (F2);
Eq3 = (F3);
Eq4 = (F4);

P1 = Eq1/4;
P2 = Eq2/4;
P3 = Eq3/4;
P4 = Eq4/4;


TL1 = P1;
TL2 = P2;
TL3 = P3;
TL4 = P4;



// RESULTADOS


alert("El equivalente de la primera es: " + TL1);
alert("El equivalente de la Segunda es: " + TL1);
alert("El equivalente de la Tercera es: " + TL1);
alert("El equivalente de la Cuarta es: " + TL1);
