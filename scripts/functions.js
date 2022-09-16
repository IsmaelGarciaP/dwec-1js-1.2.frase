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
	let palabras = cadena.split(' ');
	for(let i = 0; i < palabras.length; i++){
		let palabra = palabras[i];
		let letra = palabra[0];
		letra = letra.toLocaleUpperCase;
		return letra;
	}
	return palabras.join(' ');
}

function letrasReves(cadena) {

}

function palabrasReves(cadena) {

}

function palindromo(cadena) {

}

/*module.exports = {
	letras,
	palabras,
	maysc,
	titulo,
	letrasReves,
	palabrasReves,
	palindromo
}*/
