/*
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de
 mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".
*/
function mostrar()
{
	var numero1;
	var numero2;
	var mensaje;
	var resultado;

	numero1=prompt("Ingrese el primero numero");
	numero1=parseInt(numero1);

	numero2=prompt("Ingrese el segundo numero");
	numero2=parseInt(numero2);
	
	

	if(numero1==numero2){
		mensaje=(numero1+""+numero2);
	}
	else{
		if(numero1>numero2){
			resultado= (numero1 - numero2);
			mensaje=resultado;

		}
		else{
			mensaje=(numero1 + numero2);	
		}
	}

	alert(mensaje);
}