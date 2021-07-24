/* Autor: eliel;
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	while(numeroIngresado>10){
		alert("incorrecto");
		numeroIngresado=prompt("ingrese numero entre 0 y 10");
	}
	alert("BIEN")
}//FIN DE LA FUNCIÓN