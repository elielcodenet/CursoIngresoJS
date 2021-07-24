/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero=document.getElementById('txtIdNumeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('txtIdNumeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	suma=primerNumero+segundoNumero;
	alert("La suma es: "+suma);

}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resta;

	primerNumero=document.getElementById('txtIdNumeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('txtIdNumeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	resta=primerNumero-segundoNumero;
	alert("La resta es: "+resta);	
}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var multiplicar;

	primerNumero=document.getElementById('txtIdNumeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('txtIdNumeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	multiplicar=primerNumero*segundoNumero;
	alert("La suma es: "+multiplicar);	
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var dividir;

	primerNumero=document.getElementById('txtIdNumeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('txtIdNumeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	dividir=primerNumero/segundoNumero;
	alert("La suma es: "+dividir);
}

