//SE DECLARAN LAS VARIABLES CON LAS QUE SE TRBAJARA
let number = 5;
let back ='';
let ingresar = document.getElementById('ingresar');
let b = document.getElementById('b');
let crip= document.getElementById('crip');
let outText= '';
let =document.getElementById('');

//SE CREA UNA FUNCION EN LA QUE SE GENERA UN LOOP PARA ASIGNAR UN VALOR DE POSICION A CADA LETRA USANDO
//CÓDIGO ASCII PARA EL DESPALZAMIENTO DE CARACTERES.
function papita(){
    const getText = document.getElementById('ingresar').value ;

for (i=0 ; i<getText.length; i++ ){

	let getAscii = getText.charCodeAt(i);
	//console.log((getAscii - 65 + number)%26 + 65);
	let asciiFormula = (getAscii - 65 + number)%26 + 65 ;
	//console.log(asciiFormula);
	let g = String.fromCharCode(asciiFormula);
    back += g;


}
//console.log(back);

return document.getElementById('b').innerHTML = back;
}


function repapita(){
const tt = document.getElementById('crip').value ;

for ( i = 0 ; i < tt.length ; i++){

let deCipher = tt.charCodeAt(i);
//console.log(deCipher);
let giveAscii= ( deCipher + 65 - number)%26 + 65 ;
//console.log(giveAscii);
let jota = String.fromCharCode(giveAscii);
outText += jota;
console.log(outText);
}
return document.getElementById('hhh').innerHTML = outText;
}
