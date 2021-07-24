/* if06.
autor: ELiel*/
function mostrar()
{
	var mensaje;
	var edad;
	edad=document.getElementById("txtIdEdad").value;

	if(edad>17){
		mensaje="usted es mayor";
	}else{
		if(edad<13){
			mensaje="usted es niño";
		}else{
			mensaje="usted es adolecente"
		}
	}

	alert("Usted es: "+mensaje);

}//FIN DE LA FUNCIÓNs