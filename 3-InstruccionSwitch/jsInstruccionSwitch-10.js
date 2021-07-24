/*autor: eliel; */
function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destino=txtIdDestino.value;



	switch(estacionIngresada){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					alert("Se viaje");
				break;
				default:
					alert("No se viaja");
			}
		break;
		case "Verano":
			switch(destino){
				case "Mar del plata":
				case "Cataratas":
					alert("Se viaja")
				break;
				default:
					alert("No se viaja");
			}
		break;
		case "Otoño":
			switch(destino){
				case "Mar del plata":
				case "Cataratas":
				case "Bariloche":
				case "Cordoba":
					alert("Se viaja")
				break;
				
			}
		break;
		case "Primavera":
			switch(destino){
				case "Bariloche":
					alert("no se viaja");
				break;
				default:
					alert("Se viaja")
			}
		break;
	}
}

/*
https://onlinegdb.com/dgHM4uncs SW 1
https://onlinegdb.com/hpsIikPeK SW 2
https://onlinegdb.com/EMOVbkIbR SW 3
https://onlinegdb.com/UtdcFySNG SW 4
https://onlinegdb.com/21cnf-Ef4 SW 5
https://onlinegdb.com/OlDUI9Yce SW 6
https://onlinegdb.com/SH8DBkRjG SW 7
https://onlinegdb.com/0tnqsUTNT SW8
https://onlinegdb.com/jN65ocwgX SW9
*/