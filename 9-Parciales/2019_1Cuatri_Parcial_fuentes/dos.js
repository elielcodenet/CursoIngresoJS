/*
Enunciado:
Bienvenidos.
A una pareja se le pide los datos
 para mostrar un mensaje " ustedes se llaman xxxxx y xxxx 
pesan xx y xx kilos, que sumados son xx kilos y el promedio
 de peso xx "
autor; Eliel
 .
*/

function mostrar(){

	var nombre1;
	var nombre2;
	var peso1;
	var peso2;
	var sumaDeKilos;
	var promedioDePeso;

	nombre1=prompt("Nombre: ");
	nombre2=prompt("Nombre: ");

	peso1=prompt(nombre1+" cual es su peso?: ");
	peso1=parseInt(peso1);
	peso2=prompt(nombre2+" cual es su peso?: ");
	peso2=parseInt(peso2);

	sumaDeKilos=peso1+peso2;
	promedioDePeso=sumaDeKilos/2;

	alert("El promedio de kilos es: "+promedioDePeso);
}  
