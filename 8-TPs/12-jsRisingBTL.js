/*RISING BTL. Empresa dedicada a la toma de datos para 
realizar estadísticas y censos nos pide realizar una carga
 de datos validada e ingresada por ventanas emergentes solamente
  (para evitar hacking y cargas maliciosas) y luego asignarla a 
  cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados,
 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros,
 “N” para nacionalizados.

 autor: Eliel
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var edadValidada;

 	var sexoIngresado;
 	var sexoValidado;

 	var estadoCivilIngresado;
 	var estadoCivilIngresadoValidado;

 	var sueldoIngresado;
 	var sueldoIngresadoValidado;

 	var numeroDeLegajo;
 	var numeroDeLegajoValidado;

 	var nacionalidad;
 
 	edadIngresada=prompt("Ingrese su edad: ");
 	edadIngresada=parseInt(edadIngresada);

 	//--------------------------------------edad ingresada y validada ------------------------------------------------------

 	while(edadIngresada<18 || edadIngresada>90){ 
 		edadIngresada=prompt("Ingrese su edad: ");
 		edadIngresada=parseInt(edadIngresada);	
 	}


 	//------------------------------------sexo ingresado y validado -----------------------------------------
 	sexoIngresado=prompt("Sexo: M o F");
 	while(!(sexoIngresado=="m" || sexoIngresado=="f")){
 		 	sexoIngresado=prompt("Sexo: M o F");

 	}
 	switch(sexoIngresado){
	 		case "f": 		
	 			sexoIngresado="Femenino";
	 		break;
	 		case "m": 		
	 			sexoIngresado="Masculino";
	 		break;
	 		default:
	}

	//----------------------------------------estado civil ---------------------------------------------------------

	estadoCivilIngresado=prompt("Ingrese estado civil: 1-soltero. 2-casado. 3-divorciado. 4-viudo");
 	estadoCivilIngresado=parseInt(estadoCivilIngresado);
 	while(!(estadoCivilIngresado==1 || estadoCivilIngresado==2 || estadoCivilIngresado==3 || estadoCivilIngresado==4)){
 		estadoCivilIngresado=prompt("Ingrese estado civil: 1-soltero. 2-casado. 3-divorciado. 4-viudo");
 		estadoCivilIngresado=parseInt(estadoCivilIngresado);
 	}
 	switch(estadoCivilIngresado){
 		case 1:
 			estadoCivilIngresado="Soltero";
 		break;
 		case 2:
 			estadoCivilIngresado="Casado";
 		break;
 		case 3:
 			estadoCivilIngresado="Divorciado";
 		break;
 		case 4:
 			estadoCivilIngresado="Viudo";
 		break;
 		default:
 	}
 	//-----------------sueldo ingresado ------------------------------------------------------------

 	sueldoIngresado=prompt("Ingrese sueldo bruto, no menor a 8000$");
 	sueldoIngresado=parseInt(sueldoIngresado);

 	while(!(sueldoIngresado>8000)){
		sueldoIngresado=prompt("Ingrese sueldo bruto, no menor a 8000$");
 		sueldoIngresado=parseInt(sueldoIngresado);
 	}

 	//---------------------numero de legajo--------------------------------------------------------------
 	
 	numeroDeLegajo=prompt("Ingrese numero de legajo: ");
 	numeroDeLegajo=parseInt(numeroDeLegajo);

 	while(!(numeroDeLegajo>999 && numeroDeLegajo<9999)){
		numeroDeLegajo=prompt("Ingrese numero de legajo: ");
 		numeroDeLegajo=parseInt(numeroDeLegajo); 		
 	}
 	
 	//----------------------------nacionalidad----------------------------------------------------------------------------
 	
 	nacionalidad=prompt("Nacionalidad: A: Argentinos. E: Extrangeros. N: Nacionalizados.");

 	while(!(nacionalidad=="a" || nacionalidad=="e" || nacionalidad=="n")){
 	 	nacionalidad=prompt("Nacionalidad: A: Argentinos. E: Extrangeros. N: Nacionalizados.");
 	}
 	switch(nacionalidad){
 		case "a":
 			nacionalidad="Argentino";
 		break;
 		case "e":
 			nacionalidad="Extrangero";
 		break;
 		case "n":
 			nacionalidad="Nacionalizados";
 		break;
 		default:
 	}

 	document.getElementById("txtIdEdad").value=edadIngresada;
 	document.getElementById("txtIdSexo").value=sexoIngresado;
 	document.getElementById("txtIdEstadoCivil").value=estadoCivilIngresado;
 	document.getElementById("txtIdSueldo").value=sueldoIngresado;
 	document.getElementById("txtIdLegajo").value=numeroDeLegajo;
 	document.getElementById("txtIdNacionalidad").value=nacionalidad; 	
}
