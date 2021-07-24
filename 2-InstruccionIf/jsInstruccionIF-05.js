/*autor eliel
if 05*/
function mostrar()
{
	var edad;
	var mensaje;

	edad=document.getElementById("txtIdEdad").value;
	
	if(edad > 17 || edad < 13){
		mensaje="Usted no es adolecente";
	};

	alert(mensaje);


}