/*autor eliel */
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch(destinoIngresado){
		case "Mar del plata":
		case "Cataratas":
			alert("CALOR");
		break;
		case "Ushuaia":
		case "Bariloche":
			alert("FRIO");
		break;
	}

}//FIN DE LA FUNCIÓN