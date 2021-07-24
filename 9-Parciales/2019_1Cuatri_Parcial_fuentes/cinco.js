function mostrar()
{
	var num1;
	var num2;
	var mensaje;
	

	num1=prompt("Ingrese el primero numero");
	num1=parseInt(num1);

	num2=prompt("Ingrese el segundo numero");
	num2=parseInt(num2);
	
	

	if(num1==num2){
		mensaje=(num1+"es igual a "+num2);
	}
	else{
		if(num1>num2){
			mensaje= (num1 - num2);
		}
		else{
			mensaje=(num1 + num2);	
		}
	}

	alert(mensaje);
}

