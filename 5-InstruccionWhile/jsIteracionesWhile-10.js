/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;

	var contador
	var sumaNegativos=0; //listo los 2
	var sumaPositivos=0;
	
	var contadorPositivos=0; // listo los 2
	var contadorNegativos=0;

	var contadorCeros=0; // listo

	var contadorNumerosPares=0; //listo

	
	var promedioPositivos; //listo
	var promedioNegativos;

	var diferenciaEntreAmbos; //listo


	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese el numero")
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado<0){
			contadorNegativos=contadorNegativos+1;
			sumaNegativos=sumaNegativos+numeroIngresado;
		}else{
			if(numeroIngresado>0){
				contadorPositivos=contadorPositivos+1;
				sumaPositivos=sumaPositivos+numeroIngresado;
			}else{
				if(numeroIngresado==0){
					contadorCeros=contadorCeros+1;
					console.log("esto es 0");
				}
			}
		}
		if(numeroIngresado%2==0){
			contadorNumerosPares=contadorNumerosPares+1;
		}


		respuesta=prompt("desea continuar?");

	}//fin del while

	switch(sumaPositivos){
		case 0:
			document.write("no hay positivos");
		break;
		default:
			promedioPositivos=sumaPositivos/contadorPositivos;
			document.write("<br>el promedio de los positivos es: "+promedioPositivos);
	}

	switch(sumaNegativos){
		case 0:
			document.write("<br>no hay negativos");
		break;
		default:
			promedioNegativos=sumaNegativos/contadorNegativos;
			document.write("<br>el promedio de los negativos es: "+promedioNegativos);

	}
	
	
	diferenciaEntreAmbos=sumaNegativos+sumaPositivos;

	document.write("<br> diferencia entre ambos: "+diferenciaEntreAmbos);

	document.write("<br>cantidad de positivos: "+contadorPositivos);

	document.write("<br>la suma de los positivos es: "+sumaPositivos);
	

	document.write("<br>la suma de negativos es :"+sumaNegativos);
	
	

	document.write("<br> la cantidad de ceros es: "+contadorCeros);

	document.write("<br> la cantidad de numeros pares es: "+contadorNumerosPares);
}//FIN DE LA FUNCIÓN

/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. listo
2-Suma de los positivos. listo
3-Cantidad de positivos. listo 
4-Cantidad de negativos. listo
5-Cantidad de ceros. listo
6-Cantidad de números pares. listo
7-Promedio de positivos. listo
8-Promedios de negativos. listo
9-Diferencia entre positivos y negativos, (positvos-negativos). */