'use strict'

function letras(cadena) {
	return cadena.length;
}

function palabras(cadena) {
	return cadena.split(' ').length;
}

function maysc(cadena) {
	return cadena.toLocaleUpperCase();
}

function titulo(cadena) {
	var palabras = cadena.split(' ');
	palabras.forEach( function(valor, indice) {
		palabras[indice] = palabras[indice].charAt(0).toUpperCase() + palabras[indice].slice(1);
	});
return palabras.join(' ');
}

function letrasReves(cadena) {
	return cadena.split('').reverse().join('');
}

function palabrasReves(cadena) {
	return cadena.split(' ').reverse().join(' ');
}

function palindromo(cadena) {
	///[\W_]/g esta parte la he sacado de internet es un flitro para que los caracteres sean numeros o letras y la g es para busqueda global
	var filtro = /[\W_]/g;
	var cadenaMinuscula = cadena.toLowerCase().replace(filtro, '');
	var cadenaReves = cadenaMinuscula.split('').reverse().join(''); 
	return cadenaReves === cadenaMinuscula;
}

module.exports = {
	letras,
	palabras,
	maysc,
	titulo,
	letrasReves,
	palabrasReves,
	palindromo
}
