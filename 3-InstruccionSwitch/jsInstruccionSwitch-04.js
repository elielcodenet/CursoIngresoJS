/*autor eliel*/
function mostrar()
{
	//tomo el mes
	var mesDelAño=document.getElementById("txtIdMes").value;
	var mensaje;

	switch(mesDelAño){

		case "Febrero":
			mensaje="Tiene 28 dias";
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje="Tiene 30 dias";
		break;
		default:
			mensaje="Tiene 31 dias";
	} alert(mensaje);
}