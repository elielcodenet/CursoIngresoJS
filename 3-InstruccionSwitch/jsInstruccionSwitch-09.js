/* 
autor: eliel;
*/

function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destino=txtIdDestino.value;
	var aumento;
	var porcentaje;
	var precio=100;
	var precioFinal;
	var calculo;

	switch(estacionIngresada){ 
		case "Invierno":
			switch(destino){  
				case "Bariloche":
					porcentaje=20;
				break;
				case "Mar del plata":
					porcentaje=-20;
				break;
				case "Cataratas":
				case "Cordoba":
					porcentaje=-10;
				break;
			}
			calculo=(precio*porcentaje)/100;
			precioFinal=precio+calculo;
			alert(precioFinal); 
		break;
		case "Verano":
			switch(destino){
				case "Bariloche":
					porcentaje=-20;
				break;
				case "Cataratas":
				case "Cordoba":
					porcentaje=10;
				break;
				case "Mar del plata":
					porcentaje=20;
				break;	
			}
			calculo=(precio*porcentaje)/100;
			precioFinal=precio+calculo;
			alert(precioFinal);
		break;
		case "Otoño":
			switch(destino){
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentaje=10;
				break;
				case "Cordoba":
					porcentaje=0;
				break;	
			}
			calculo=(precio*porcentaje)/100;
			precioFinal=precio+calculo;
			alert(precioFinal);
		break;
		case "Primavera":
			switch(destino){
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentaje=10;
				break;
				case "Cordoba":
					porcentaje=0;
				break;	
			}
			calculo=(precio*porcentaje)/100;
			precioFinal=precio+calculo;
			alert(precioFinal);
		break;
	} 
}