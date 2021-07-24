/*autor aliel */


function mostrar(){
	var mesDelAño;
	var mensaje;

	mesDelAño=document.getElementById("txtIdMes").value;

	switch(mesDelAño){
		case "Febrero":
			mensaje="Este mes no tiene más de 29 dias.";
		break;
		default:
			mensaje="Este mes tiene 30 o mas días";
	}
	alert(mensaje);


}//FIN DE LA FUNCIÓN