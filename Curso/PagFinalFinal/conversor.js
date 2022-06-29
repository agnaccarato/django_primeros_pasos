function calcularPeso(valor, fraccion){
    valorReferncia= valor * fraccion;
    document.getElementById("kilos").value=valorReferncia*1;
    document.getElementById("gramos").value=valorReferncia*1000;
    document.getElementById("libras").value=valorReferncia*2;
    document.getElementById("onzaPeso").value=valorReferncia*32;
    document.getElementById("tazaPeso").value=valorReferncia*8;
    document.getElementById("cucharadaPeso").value=valorReferncia*120;
}

function limpiarPeso(){
    document.getElementById("kilos").value="";
    document.getElementById("gramos").value="";
    document.getElementById("libras").value="";
    document.getElementById("onzaPeso").value="";
    document.getElementById("tazaPeso").value="";
    document.getElementById("cucharadaPeso").value="";
}

function calcularLiq(valor, fraccion){
    valorReferncia= valor * fraccion;
    document.getElementById("litros").value=valorReferncia*1;
    document.getElementById("ml").value=valorReferncia*1000;
    document.getElementById("onzaLiq").value=valorReferncia*35;
    document.getElementById("tazaLiq").value=valorReferncia*4.375;
    document.getElementById("cucharadaLiq").value=valorReferncia*70;
    document.getElementById("cucharadita").value=valorReferncia*200;
}

function limpiarLiq(){
    document.getElementById("litros").value="";
    document.getElementById("ml").value="";
    document.getElementById("libras").value="";
    document.getElementById("onzaLiq").value="";
    document.getElementById("tazaLiq").value="";
    document.getElementById("cucharadaLiq").value="";
    document.getElementById("cucharadita").value="";
}

/*function soloNumeros(evt){
    
    // code is the decimal ASCII representation of the pressed key.
    var code = (evt.which) ? evt.which : evt.keyCode;
    
    if(code==8) { // backspace.
      return true;
    } else if(code>=48 && code<=57) { // is a number.
      return true;
    } else{ // other keys.
      return false;
    }
}/**/
