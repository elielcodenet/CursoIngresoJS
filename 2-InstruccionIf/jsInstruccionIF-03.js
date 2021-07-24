function mostrar()
{
	var edad;
	var mensaje;

	edad=document.getElementById("txtIdEdad").value;
	if(edad>17){
		mensaje="Usted es mayor de edad";
	}else{
		mensaje="Usted es menor de edad";
	}  
	alert(mensaje);
	

}//FIN DE LA FUNCIÓN