/*
Enunciado:
Bienvenidos.
Pedir por prompt el 
precio y el porcentaje de descuento, 
mostrar el precio final con descuento por id.
elPrecioFinal
autor; ELiel
el otro estaba mal xd
*/

function mostrar()
{
	var precio;
	var precioFinal;
	var porcentaje;
	var porcentajeFinal;

	precio=prompt("Precio del producto?: ");
	precio=parseInt(precio);

	porcentaje=prompt("Porcentaje?:  ");
	porcentaje=parseInt(porcentaje);

	porcentajeFinal=(precio*porcentaje)/100;
	precioFinal=precio-porcentajeFinal;

	document.getElementById("elPrecioFinal").value=precioFinal;
}
