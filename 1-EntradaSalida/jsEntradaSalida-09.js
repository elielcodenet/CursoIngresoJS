/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
Autor: Eliel
elielcodenet@gmail.com
*/

function mostrarAumento()
{

	var sueldo;
	var resultado;

	sueldo=document.getElementById('txtIdSueldo').value;
	sueldo=parseInt(sueldo);

	resultado=sueldo*10/100;

	document.getElementById('txtIdResultado').value=resultado;
}
