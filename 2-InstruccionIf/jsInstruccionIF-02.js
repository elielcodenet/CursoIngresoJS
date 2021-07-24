/*Autor: eliel If-02*/


function mostrar()
{
	var edad;
	var mensaje;

	edad=document.getElementById("txtIdEdad").value;
	if(edad>17){
		mensaje="Usted es mayor de edad";
	}  
	alert(mensaje);
	

}//FIN DE LA FUNCIÓN