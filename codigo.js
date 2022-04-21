
let entrada = prompt("\nPregunta 1: ¿Cuál es el río más largo del mundo? \n\n (Oprime  1, 2, 3 para elegir) \n \n1 Nilo \n2 Amazonas \n3 Misisipi");

while(entrada != "2" ){
    alert("INCORRECTO");
    entrada = prompt("Intentalo de nuevo: ¿Cuál es el río más largo del mundo? \n\n (Oprime  1, 2, 3 para elegir) \n \n1 Nilo \n2 Amazonas \n3 Misisipi");
}

let entrada2 = prompt("CORRECTO! El Rio Amazonas mide 7062km de largo! \n¿Cuál es el edificio más alto del mundo? \n\n (Oprime  1, 2, 3 para elegir) \n \n1 Merdeka 118 ​ \n2 Torre de Shanghái \n3 Burj Khalifa");

while(entrada2 != "3" ){
    alert("INCORRECTO");
    entrada2 = prompt("Intentalo de nuevo: ¿Cuál es el edificio más alto del mundo? \n\n (Oprime  1, 2, 3 para elegir) \n \n1 Merdeka 118 ​ \n2 Torre de Shanghái \n3 Burj Khalifa");
}
if (entrada2 = "9"){
    alert("CORRECTO!! El Edificio mide 838m de alto \n\n Fin del juego");
}

let numero = parseInt(prompt("CALCULADORA FACTORIAL \nIngrese un numero entero positivo del 1 al 10 para calcular su factorial, \nSi ingresa un valor decimal solo se tomara en cuenta el primer digito"));
let total = 1;
let cuenta = 1;


if ((numero >= 1) && (numero <= 10)){
for (let i = 1 ; i<=numero; i++){
total = total * i;    
}

alert("el factorial de "+ numero +" es: " + total);

document.write("La cuenta realizada fue: ");
for (let i = numero; i > 0; i = i - 1 ){
    resultado = cuenta * i ;
document.write(resultado + "*");    
}
}else{
    alert("No ingresó un dato correcto");
}    

