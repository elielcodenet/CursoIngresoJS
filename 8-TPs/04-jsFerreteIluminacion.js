/*
Autor: eliel
04-ferreteIluminacion
 */
function CalcularPrecio(){
	var precio=35;
	var cantidad;
	var marcaProducto;
	var descuento;
	var calculoImpuesto;
	var impuesto=10;
	var precioFinal;
	var precioSinDescuento;
	var calculo;
	var mensaje;

	//CALCULAR Y PONER EL IMPUESTO

	cantidad=document.getElementById("txtIdCantidad").value;
	cantidad=parseInt(cantidad);

	marcaProducto=document.getElementById("Marca").value;

	switch(cantidad){
		case 1:
		case 2:
			descuento=0; //sin descuento para menos de 3 u
		break;
		case 3:
			descuento=0;
			switch(marcaProducto){
				case "ArgentinaLuz":
					descuento=15;
				break;
				case "FelipeLamparas":
					descuento=10;
				break;
			}
		break;
		case 4:
			descuento=20;
			switch(marcaProducto){
				case "Argentina":
				case "FelipeLamparas":
					descuento=25;
				break;
			}
		break;
		case 5:
			descuento=30;
			switch(marcaProducto){
				case "ArgentinaLuz":
					descuento=40;
				break;
			}
		break;
		default:
			descuento=50;

	}
	precioSinDescuento=precio*cantidad;
	calculo=(precioSinDescuento*descuento)/100;
	precioFinal=precioSinDescuento-calculo;
	if(precioFinal>120){
		calculoImpuesto=(precioFinal*10)/100;
		precioFinal=precioFinal+calculoImpuesto;
		alert("IIBB Usted pago: "+calculoImpuesto);
	}
	document.getElementById("txtIdprecioDescuento").value=precioFinal;
	
}