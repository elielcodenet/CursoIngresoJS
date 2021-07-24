/*autor eliel; */
function mostrar()
{
	var mesDelAño =document.getElementById("txtIdMes").value;
	var mensaje;

	switch(mesDelAño){
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
			mensaje="Falta para el invierno";
		break;
		case "Julio":
		case "Junio":
		case "Agosto":
			mensaje="Abrigate que hace frio.";
		break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje="Ya paso el frio, ahora calor!!!"
	}
alert(mensaje);



}//FIN DE LA FUNCIÓN