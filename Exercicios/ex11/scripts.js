//if...else

//se a hora estiver entre 06:00 ate 12:00 : bom dia!
//se a hora estiver entre 12:00 ate 18:00 : boa tarde!
//caso contrario : boa noite!

let hora = 19;

if(hora > 6 && hora < 12 )   {
    console.log("bom dia");

}

else if (hora > 12 && hora < 18) {

    console.log("boa tarde");

}

else{
    
    console.log("boa noite");

}