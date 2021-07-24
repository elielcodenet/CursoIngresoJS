/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	
Autor: Eliel Nicolas
ejercicio 5
*/
function mostrar()
{	
	var nombre;
	var edad;
	var mensaje;

	nombre=document.getElementById("txtIdNombre").value; 
	edad=document.getElementById("txtIdEdad").value;
	mensaje="usted se llama "+nombre+"y tiene: "+edad+"años";

	alert(mensaje);
}

