/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheit;
	var centigrados;
	var cuenta;

	fahrenheit=document.getElementById("txtIdTemperatura").value;
	fahrenheit=parseInt(fahrenheit);

	cuenta=(fahrenheit-32);
	centigrados=cuenta/1.8;

	alert(fahrenheit+" grados Fahrenheit son: "+centigrados+" Centigrados .");


		
}

function CentigradosFahrenheit () 
{
	var fahrenheit;
	var centigrados;


	centigrados=document.getElementById("txtIdTemperatura").value;
	centigrados=parseInt(centigrados);

	fahrenheit=(1.8*centigrados)+32;

	alert(centigrados+" grados centigrados son : "+fahrenheit+" Fahrenheit.");


}
