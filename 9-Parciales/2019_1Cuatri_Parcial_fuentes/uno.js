
function mostrar()
{
	var lado1;
	var base;
	var lados;
	var perimetro;

	lado1=prompt("Ingrese los laterales de un triangulo equilatero:");
	lado1=parseInt(lado1);
	base=prompt("Ingrese la base del triangulo equilatero:");
	base=parseInt(base);

	lados=lado1*2;

	perimetro=lados+base;

	alert("el perimetro es : "+perimetro);
}
