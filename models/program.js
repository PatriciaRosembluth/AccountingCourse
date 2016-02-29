var inputValuesBalanceApertura;
var inputValuesAsientoApertura;
var detailMayores;
var detailBalance;
var totalActivo;
var totalDebe;
var totalHaber;
var libro1, libro2, libro3, libro4, libro5, libro6;

function getAllValuesBalanceApertura() {
     inputValuesBalanceApertura = [];
     detailBalance = [];
     totalActivo = 0;
     //OBTENER TODOS LOS DATOS DE LA TABLA BALANCE DE APERTURA
    $('#balanceApertura input').each(function() {
        var type = $(this).attr("type");
        inputValuesBalanceApertura.push($(this).val()); 
    })
    //OBTENER TOTAL ACTIVO Y CAPITAL
    for (var i = 0; i < inputValuesBalanceApertura.length; i++) {
        i++;
        totalActivo += parseInt(inputValuesBalanceApertura[i]);
    }
    inputValuesBalanceApertura.push("capital");
    inputValuesBalanceApertura.push(totalActivo);
    document.getElementById("dbBalanceApertura").innerHTML = inputValuesBalanceApertura;
    getDetailsBalanceApertura();
    document.getElementById("totalActivo").innerHTML = totalActivo;
    document.getElementById("capital").innerHTML = totalActivo;
    document.getElementById("detailBalance").innerHTML = detailBalance;
}

function getDetailsBalanceApertura(){
    for (var j = 0 ; j<inputValuesBalanceApertura.length; j = j+2) {
        detailBalance.push(inputValuesBalanceApertura[j]);
    }
}

function getAllValuesAsientoApertura(){
    inputValuesAsientoApertura = [];
    totalDebe = 0;
    totalHaber = 0;
    detailMayores = [];
    var find = false;
    //OBTENER VALORES DEL ASIENTO DE APERTURA
    $('#asientoApertura input').each(function() {
        var type = $(this).attr("type");
        inputValuesAsientoApertura.push($(this).val()); 
    })
    document.getElementById("dbAsientoApertura").innerHTML = inputValuesAsientoApertura;
    //OBTENER TOTAL DEBE Y HABER
    for (var i = 1; i < inputValuesAsientoApertura.length; i++) {
        var value = inputValuesAsientoApertura[i];
        if(value != ""){
            totalDebe += parseInt(inputValuesAsientoApertura[i]);    
        }else{
            i++;
            totalHaber += parseInt(inputValuesAsientoApertura[i]);
            i--;   
        }
        i=i+2;
    }
    //OBTENER DETALLE DE ASIENTO DE APERTURA
    detailMayores.push(inputValuesAsientoApertura[0].toLowerCase());
    for (var k = 0; k < inputValuesAsientoApertura.length; k = k+3) {
        for (var j = 0; j < inputValuesAsientoApertura.length; j++) {
            if (detailMayores[j] === inputValuesAsientoApertura[k].toLowerCase()) {
                find = true;
                j = detailMayores.length;
            }
        }
        if (find === false) {
            detailMayores.push(inputValuesAsientoApertura[k]);
        }
        find = false;
    }
    document.getElementById("totalDebe").innerHTML = totalDebe;
    document.getElementById("totalHaber").innerHTML = totalHaber;
    document.getElementById("dbMayores").innerHTML = detailMayores;
}
 function generateLibrosMayores(){
    libro1 = [];
    libro2 = [];
    libro3 = [];
    libro4 = [];
    libro5 = [];
    libro6 = [];
    var inicio = detailBalance.length * 3;
    for (var m = 0 ; m < detailBalance.length; m++) {
        libro1.push(inputValuesAsientoApertura[m]);
        libro2.push(inputValuesAsientoApertura[m+3]);
        libro3.push(inputValuesAsientoApertura[m+6]);     
     } 
     var q = inicio;
     for (var p = q; p < inputValuesAsientoApertura.length; p = p+6 ) {
        var bloque = inicio+5;
        var aux = inputValuesAsientoApertura[p];
        var detalle = inputValuesAsientoApertura[p+3];
        if (findDetalleBalance(detalle)) {
            detalle = aux;
        }
        for (var r = inicio; r < bloque; r = r+3) {
            var libro = findLibro(inputValuesAsientoApertura[r]);
            switch (libro) {
                case 1:
                    libro1.push(detalle);
                    libro1.push(inputValuesAsientoApertura[r+1]);
                    libro1.push(inputValuesAsientoApertura[r+2]);
                    break;
                case 2:
                    libro2.push(detalle);
                    libro2.push(inputValuesAsientoApertura[r+1]);
                    libro2.push(inputValuesAsientoApertura[r+2]);
                    break;
                case 3:
                    libro3.push(detalle);
                    libro3.push(inputValuesAsientoApertura[r+1]);
                    libro3.push(inputValuesAsientoApertura[r+2]);
                    break;
                case 4:
                    libro4.push(detalle);
                    libro4.push(inputValuesAsientoApertura[r+1]);
                    libro4.push(inputValuesAsientoApertura[r+2]);
                    break;
                case 5:
                    libro5.push(detalle);
                    libro5.push(inputValuesAsientoApertura[r+1]);
                    libro5.push(inputValuesAsientoApertura[r+2]);
                    break;
                case 6:
                    libro6.push(detalle);
                    libro6.push(inputValuesAsientoApertura[r+1]);
                    libro6.push(inputValuesAsientoApertura[r+2]);
                    break;
            }
        }
        inicio = bloque + 1;
    }
    document.getElementById("libro1").innerHTML = libro1[0];
    document.getElementById("libro2").innerHTML = libro2[0];
    document.getElementById("libro3").innerHTML = libro3[0];
    document.getElementById("libro4").innerHTML = libro4[0];
    document.getElementById("libro5").innerHTML = libro5[0];
    document.getElementById("libro6").innerHTML = libro6[0];

    for (var i = 0; i < libro1.length; i++) {
        document.getElementById("campo"+ i).innerHTML = libro1[i];
    }
 }

function findDetalleBalance(detalle){
    for (var i = 0; i < detailBalance.length; i++) {
        if (detalle === detailBalance[i]){
            return true;
        }
    }
     return false;
}

function findLibro(detalle){
    for (var i = 0; i < detailMayores.length; i++) {
        if (detalle === detailMayores[i]){
            return i+1;
        }
    }
        return 0;
}
