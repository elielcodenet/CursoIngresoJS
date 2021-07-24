/*autor eliel*/
function mostrar()
{
	var edad;
	var mensaje;

	edad=document.getElementById("txtIdEdad").value;
	
	if(edad>12 && edad<18){
		mensaje="Usted es adolecente";
	};

	alert(mensaje);


}//FIN DE LA FUNCIÓN