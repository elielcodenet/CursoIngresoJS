/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
Autor; eliel
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;

	precioUno=document.getElementById("txtIdPrecioUno").value;
	precioUno=parseInt(precioUno);
	precioDos=document.getElementById("txtIdPrecioDos").value;
	precioDos=parseInt(precioDos);
	precioTres=document.getElementById("txtIdPrecioTres").value;
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres;
	console.log(suma);

	alert("La suma es: "+suma);

}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var promedio;
	var promedioFinal;

	precioUno=document.getElementById("txtIdPrecioUno").value;
	precioUno=parseInt(precioUno);
	precioDos=document.getElementById("txtIdPrecioDos").value;
	precioDos=parseInt(precioDos);
	precioTres=document.getElementById("txtIdPrecioTres").value;
	precioTres=parseInt(precioTres);

	promedio=precioUno+precioDos+precioTres;
	promedioFinal=promedio/3;
	

	alert("La suma es: "+promedioFinal);	
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var iva;
	var precioFinalMasIva;


	precioUno=document.getElementById("txtIdPrecioUno").value;
	precioUno=parseInt(precioUno);
	precioDos=document.getElementById("txtIdPrecioDos").value;
	precioDos=parseInt(precioDos);
	precioTres=document.getElementById("txtIdPrecioTres").value;
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres;
	iva=suma*21/100;
	precioFinalMasIva=suma+iva;

	alert("La suma es: "+precioFinalMasIva);
		
}



function CalcularPrecio(){
	var precio=100;
	var cantidad;
	var marcaProducto;
	var descuento;
	var impuesto;
	var precioFinal;
	var precioSinDescuento;
	var calculo;
	var mensaje;

	cantidad=document.getElementById("txtIdCantidad").value;
	cantidad=parseInt(cantidad);

	marcaProducto=document.getElementById("marca").value;

	switch(marcaProducto){
		case "ArgentinaLuz":
			switch(cantidad){
				case 1:
				case 2:
					descuento=0;
				break;
				case 3:
					descuento=15;
				break;
				case 4:
					descuento=25;
				break;
				case 5:
					descuento=40;
				break;
				case 6:
					descuento=50;
				break;
				default:
					descuento=50;
			} console.log(descuento);

		break;

	}

}