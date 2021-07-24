function mostrar()
{
	var mes;
	var mensaje;

	mes=document.getElementById("txtIdMes").value;

	switch(mes){
	    case "Enero":
	        mensaje = "Que comiences bien el año!!!";
	    break;
	    case "Marzo":
	        mensaje = "a clases!!!.";
	    break;
	    case "Julio":
	        mensaje = "se vienen las vacaciones!!!";
	    break;
	    case "Diciembre":
	        mensaje = "Felices fiesta!!!";
        break;        
} 
alert(mensaje);
}