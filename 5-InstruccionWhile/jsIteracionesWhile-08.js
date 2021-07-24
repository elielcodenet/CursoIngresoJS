/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta=='si'){
		numeroIngresado=prompt("Ingrese numero: ");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado<0){
			multiplicacionNegativos=numeroIngresado*multiplicacionNegativos;
			
		}else{
			sumaPositivos=numeroIngresado+sumaPositivos;
			
		}
		contador++;
		respuesta=prompt("Quiere seguir sumando?:")
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value="-"+multiplicacionNegativos;

}//FIN DE LA FUNCIÓN