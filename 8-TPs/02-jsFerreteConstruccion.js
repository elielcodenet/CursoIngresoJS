/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	
	var largoTotal;
	var anchoTotal;
	
	var rectangulo;
	var rectanguloFinal;

	largo=document.getElementById("txtIdLargo").value;
	largo=parseInt(largo);
	ancho=document.getElementById("txtIdAncho").value;
	ancho=parseInt(ancho);
	
	largoTotal=largo*2;
	anchoTotal=ancho*2;

	rectangulo=largoTotal+anchoTotal;
	rectanguloFinal=rectangulo*3;
	alert("el rectangulo es: "+rectanguloFinal); 
	 
}
function Circulo () 
{
	var radio;
	var perimetro;
	var pi;
	var perimetroFinal;

	pi=3.14;

	radio=document.getElementById("txtIdRadio").value;
	radio=parseInt(radio);

	perimetro= pi*2*radio;
	perimetroFinal= perimetro * 3;;

	alert("la cantidad de alambre necesario es: " +perimetroFinal+ " metros");
}
function Materiales () 
{
	var ancho;
	var largo;		
	var cemento;
	var cal;
	var mensaje;

	largo=document.getElementById("txtIdLargo").value;
	largo=parseInt(largo);
	ancho=document.getElementById("txtIdAncho").value;
	ancho=parseInt(ancho);

	cemento=largo*2;
	cal=ancho*3;

	mensaje=("el contrapiso de: "+ancho+"cm "+"x"+largo+"cm necesita "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");
	alert(mensaje);
}












