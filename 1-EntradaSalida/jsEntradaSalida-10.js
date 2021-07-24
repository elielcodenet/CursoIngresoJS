/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var decuento;
	var importeFinal;

	importe=document.getElementById('txtIdImporte').value;
	importe=parseInt(importe);
	

	decuento=importe*25/100;
	importeFinal=importe+decuento;

	document.getElementById('txtIdResultado').value=importeFinal;

}
	