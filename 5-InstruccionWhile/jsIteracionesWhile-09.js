/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese numero: ");
		numeroIngresado=parseInt(numeroIngresado);
		if(si esto es 1){
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
		}
		
		if(numeroIngresado>numeroMaximo){
			numeroMaximo=numeroIngresado;
		}else{
			numeroMinimo=numeroIngresado;
		}
		
		console.log("maximo es: "+numeroMaximo);
		console.log("minimo: "+numeroMinimo);
		
		respuesta=prompt("desea continuar?");
		
	
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN