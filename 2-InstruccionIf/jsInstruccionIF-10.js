/* autor eliel */
function mostrar()
{
	var nota;
	var mensaje;

	nota=Math.floor(Math.random()*10)+1;

	if(nota > 8){
		mensaje="EXCELENTE";
	}else{
		if(nota > 3){
			mensaje="APROBÓ"
		}else{
			mensaje="Vamos, la proxima se puede";
		}
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN