/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
Autor: Eliel Nicolas
Ejercicio 4
*/
function mostrar()
{
	var nombre;
	nombre=prompt("ingrese nombre");
	document.getElementById("txtIdNombre").value=nombre;
}

