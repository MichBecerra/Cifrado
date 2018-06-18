//SE DECLARAN LAS VARIABLES CON LAS QUE SE TRBAJARA
let introKey = document.getElementById('introKey');
let ingresar = document.getElementById('ingresar');
let b = document.getElementById('b');
let crip= document.getElementById('crip');
let g = '';
let outText= '';
let numero = '';
let back ='';
let asigAlf = '';
let offset = '';
let getAscii ='';
let asciiFormula = '';
let giveAscii = '';
let newAlf = '';
//SE CREA UNA FUNCION EN LA QUE SE GENERA UN LOOP PARA ASIGNAR UN VALOR DE
//POSICION A CADA LETRA USANDO CÓDIGO ASCII PARA EL DESPALZAMIENTO DE CARACTERES.
function cifrado(){
//Se introduce el desplazamiento para colocarlo en la formula
    offset = parseInt(document.getElementById('introKey').value) ;
    console.log(offset);
// Se crea una loop para asignar un índice a cada elemento de la cadena de texto
    const getText=(document.getElementById('ingresarTxt').value);
          for (i=0 ; i<getText.length ; i++) {
          getAscii = getText.charCodeAt(i);
          console.log(getAscii);
//Se asignan los intervalos para los diferentes caracteres de ASCII
if (getAscii === 32){
      let espace = String.fromCharCode(getAscii) ;
      back += espace ;
      continue;
} else if(getAscii >= 33 && getAscii <= 64){
      asigAlf = 33;
      console.log(asigAlf);
} else if (getAscii >= 65 && getAscii <= 90){
      asigAlf = 65 ;
      console.log(asigAlf);
} else if (getAscii >= 97 && getAscii <= 122){
      asigAlf = 97 ;
      console.log(asigAlf);
}
      asciiFormula = (getAscii - asigAlf + offset)%26 + asigAlf ;
      console.log((getAscii - asigAlf + offset)%26 + asigAlf);
      let g = String.fromCharCode(asciiFormula);
      back += g;
      //console.log(back);
}
      console.log(back);
      return document.getElementById('msgCriptado').innerHTML=back;
}
//--------------------------------------------------------------------
//SE INGRESA UN TEXTO CODIFICADO Y SE INTRODUCE UN DESPLAZAMIENTO
function decifrado(){
//Se introduce el desplazamiento para colocarlo en la formula
       offset = parseInt(document.getElementById('introKey').value) ;
       console.log(offset);
       // Se crea una loop para asignar un índice a cada elemento de la cadena de texto
       const inText = document.getElementById('decifMsg').value ;
       for (i=0 ; i < inText.length ; i++) {
       deCipher = inText.charCodeAt(i);
       console.log(deCipher);
//Se asignan los intervalos para los diferentes caracteres de ASCII
       if (deCipher === 32){
             let espace = String.fromCharCode(deCipher) ;
             outText += espace ;
             continue;
       } else if(deCipher >= 33 && deCipher <= 64){
             asigAlf = 64 ;
             console.log(asigAlf);
       } else if (deCipher >= 65 && deCipher <= 90){
             asigAlf = 90 ;
             console.log(asigAlf);
       } else if (deCipher >= 97 && deCipher <= 122){
             asigAlf = 122 ;
             console.log(asigAlf);
       }
// Se introducen las variable dentro de la formula para asignar un nuevo numero en ascii
//console.log(((deCipher - asigAlf - offset)%26) + asigAlf);
        giveAscii = (((deCipher - asigAlf - offset)%26) + asigAlf) ;
        console.log(giveAscii) ;
        newAlf = String.fromCharCode(giveAscii) ;
        console.log(newAlf) ;
        outText += newAlf ;
        console.log(outText);
}
return document.getElementById('msgDecifrado').innerHTML = outText;
}
