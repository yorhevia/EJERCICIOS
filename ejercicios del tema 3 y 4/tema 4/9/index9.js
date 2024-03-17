/* Indicar si un alumno aprobó o no una materia conformada por 2 parciales 
(que representan el 50% de la definitiva), 2 quices (30% de la definitiva)
 y 2 proyectos (el primero 10% y el segundo 20%). 
 En el caso de que su definitiva sea mayor o
igual a 9 pero menor a 9,5, indicarle que debe asistir a actividades de recuperación. 
Si la nota es menor a 9 el alumno está reprobado. */

let p1, p2, q1, q2, pr1, pr2, def;

p1 = parseFloat(prompt("Ingrese la primera nota del promedio de los parciales: "));
p2 = parseFloat(prompt("Ingrese la segunda nota del promedio de los parciales: "));

q1 = parseFloat(prompt("Ingrese la segunda nota del promedio de los quiz: "));
q2 = parseFloat(prompt("Ingrese la segunda nota del promedio de los quiz: "));

pr1 = parseFloat(prompt("Ingrese la segunda nota del promedio de los proyectos: "));
pr2 = parseFloat(prompt("Ingrese la segunda nota del promedio de los proyectos: "));

def = (p1 + p2) * 0.5 + (q1 + q2) * 0.3 + pr1 * 0.1 + pr2 * 0.1;

if(def >= 9  && def < 9.5){
    alert('Debe asistir a actividades de recuperación.')
    console.log('Debe asistir a actividades de recuperación.');
}else if(def < 9){
    alert('El alumno se encuentra reprobado.')
    console.log('El alumno se encuentra reprobado.');
}else{
    alert('El alumno se encuentra en buen estado.')
    console.log('El alumno se encuentra en buen estado.');
}