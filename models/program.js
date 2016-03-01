var inputValuesBalanceApertura;
var inputValuesAsientoApertura;
var balanceSumasSaldos;
var detailMayores;
var detailBalance;
var totalActivo;
var totalDebe;
var totalHaber;
var libro1, libro2, libro3, libro4, libro5, libro6;
var saldo1, saldo2, saldo3, saldo4, saldo5, saldo6;

function getAllValuesBalanceApertura() {
     inputValuesBalanceApertura = [];
     detailBalance = [];
     totalActivo = 0;
    $('#balanceApertura input').each(function() {
        var type = $(this).attr("type");
        inputValuesBalanceApertura.push($(this).val()); 
    })
    calculateTotalActivo();
    getDetailsBalanceApertura();
    document.getElementById("totalActivo").innerHTML = totalActivo;
    document.getElementById("capital").innerHTML = totalActivo;
}

function calculateTotalActivo(){
    for (var i = 0; i < inputValuesBalanceApertura.length; i++) {
        i++;
        totalActivo += parseInt(inputValuesBalanceApertura[i]);
    }
    inputValuesBalanceApertura.push("capital");
    inputValuesBalanceApertura.push(totalActivo);
}

function getDetailsBalanceApertura(){
    for (var j = 0 ; j<inputValuesBalanceApertura.length; j = j+2) {
        detailBalance.push(inputValuesBalanceApertura[j]);
    }
}

function getAllValuesAsientoApertura(){
    inputValuesAsientoApertura = [];
    var find = false;
    $('#asientoApertura input').each(function() {
        var type = $(this).attr("type");
        inputValuesAsientoApertura.push($(this).val()); 
    })
    setSpaceFromArray();
    getTotalDebeYhaber();
    getLibrosMayores();
    
    document.getElementById("totalDebe").innerHTML = totalDebe;
    document.getElementById("totalHaber").innerHTML = totalHaber;
}

function getTotalDebeYhaber(){
    totalDebe = 0;
    totalHaber = 0;
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
}

function getLibrosMayores(){
    detailMayores = [];
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
}

 function generateLibrosMayores(){
    var inicio = detailBalance.length * 3;
    libro1 = [], libro2 = [], libro3 = [], libro4 = [], libro5 = [], libro6 = [];
    saldo1 = 0, saldo2 = 0, saldo3 = 0, saldo4 = 0; saldo5 = 0, saldo6 = 0;
    initializeLibrosMayores();
     var q = inicio;
     for (var p = q; p < inputValuesAsientoApertura.length; p = p+6 ) {
        var bloque = inicio+5;
        var aux = inputValuesAsientoApertura[p];
        var detalle = inputValuesAsientoApertura[p+3];
        if (findDetalleBalance(detalle)) {
            detalle = aux;
        }
        for (var r = inicio; r < bloque; r = r+3) {
            var value;
            var libro = findLibro(inputValuesAsientoApertura[r]);
            switch (libro) {
                case 1:
                    libro1.push(detalle);
                    libro1.push(inputValuesAsientoApertura[r+1]);
                    libro1.push(inputValuesAsientoApertura[r+2]);
                    calculateSaldo(1,inputValuesAsientoApertura[r+1],inputValuesAsientoApertura[r+2]);
                    libro1.push(saldo1);
                    break;
                case 2:
                    libro2.push(detalle);
                    libro2.push(inputValuesAsientoApertura[r+1]);
                    libro2.push(inputValuesAsientoApertura[r+2]);
                    calculateSaldo(2,inputValuesAsientoApertura[r+1],inputValuesAsientoApertura[r+2]);
                    libro2.push(saldo2);
                    break;
                case 3:
                    libro3.push(detalle);
                    libro3.push(inputValuesAsientoApertura[r+1]);
                    libro3.push(inputValuesAsientoApertura[r+2]);
                    calculateSaldo(3,inputValuesAsientoApertura[r+1],inputValuesAsientoApertura[r+2]);
                    libro3.push(saldo3);
                    break;
                case 4:
                    libro4.push(detalle);
                    libro4.push(inputValuesAsientoApertura[r+1]);
                    libro4.push(inputValuesAsientoApertura[r+2]);
                    calculateSaldo(4,inputValuesAsientoApertura[r+1],inputValuesAsientoApertura[r+2]);
                    libro4.push(saldo4);
                    break;
                case 5:
                    libro5.push(detalle);
                    libro5.push(inputValuesAsientoApertura[r+1]);
                    libro5.push(inputValuesAsientoApertura[r+2]);
                    calculateSaldo(5,inputValuesAsientoApertura[r+1],inputValuesAsientoApertura[r+2]);
                    libro5.push(saldo5);
                    break;
                case 6:
                    libro6.push(detalle);
                    libro6.push(inputValuesAsientoApertura[r+1]);
                    libro6.push(inputValuesAsientoApertura[r+2]);
                    calculateSaldo(6,inputValuesAsientoApertura[r+1],inputValuesAsientoApertura[r+2]);
                    libro6.push(saldo6);
                    break;
            }
        }
        inicio = bloque + 1;
    }
    drawLibrosMayores();
 }

 function initializeLibrosMayores(){
    for (var m = 0 ; m < detailBalance.length; m++) {
        if(m>0){
            calculateSaldo(1,inputValuesAsientoApertura[m],0);
            calculateSaldo(2,inputValuesAsientoApertura[m+3],0);;
            calculateSaldo(3,inputValuesAsientoApertura[m+6],0);
        }
        libro1.push(inputValuesAsientoApertura[m]);
        libro2.push(inputValuesAsientoApertura[m+3]);
        libro3.push(inputValuesAsientoApertura[m+6]);     
     }
    libro1.push(saldo1);
    libro2.push(saldo2);
    libro3.push(saldo3); 
 }

 function calculateSaldo(saldo,AmountDebe, AmountHaber){
    switch (saldo) {
        case 1:
            saldo1 = saldo1 + parseInt(AmountDebe) - parseInt(AmountHaber);
            if (saldo1 < 0) {saldo1*=-1}
            break;
        case 2:
            saldo2 = saldo2 + parseInt(AmountDebe) - parseInt(AmountHaber);
            if (saldo2 < 0) {saldo2*=-1}
            break;
        case 3:
            saldo3 = saldo3 + parseInt(AmountDebe) - parseInt(AmountHaber);
            if (saldo3 < 0) {saldo3*=-1}
            break;    
        case 4:
            saldo4 = saldo4 + parseInt(AmountDebe) - parseInt(AmountHaber);
            if (saldo4 < 0) {saldo4*=-1}
            break;
        case 5:
            saldo5 = saldo5 + parseInt(AmountDebe) - parseInt(AmountHaber);
            if (saldo5 < 0) {saldo5*=-1}
            break;
        case 6:
            saldo6 = saldo6 + parseInt(AmountDebe) - parseInt(AmountHaber);
            if (saldo6 < 0) {saldo6*=-1}
            break;
    }
 }

 function drawLibrosMayores(){
    document.getElementById("libro1").innerHTML = libro1[0];
    for (var i = 0; i < libro1.length; i++) {
        document.getElementById("libro1-"+ i).innerHTML = libro1[i];
    }
    document.getElementById("libro2").innerHTML = libro2[0];
     for (var i = 0; i < libro2.length; i++) {
        document.getElementById("libro2-"+ i).innerHTML = libro2[i];
    }
    document.getElementById("libro3").innerHTML = libro3[0];
     for (var i = 0; i < libro3.length; i++) {
        document.getElementById("libro3-"+ i).innerHTML = libro3[i];
    }
    document.getElementById("libro4").innerHTML = libro4[0];
     for (var i = 0; i < libro4.length; i++) {
        document.getElementById("libro4-"+ i).innerHTML = libro4[i];
    }
    document.getElementById("libro5").innerHTML = libro5[0];
     for (var i = 0; i < libro5.length; i++) {
        document.getElementById("libro5-"+ i).innerHTML = libro5[i];
    }
    document.getElementById("libro6").innerHTML = libro6[0];
     for (var i = 0; i < libro6.length; i++) {
        document.getElementById("libro6-"+ i).innerHTML = libro6[i];
    }
 }

 function setSpaceFromArray(){
    for (var i = 0; i < inputValuesAsientoApertura.length; i++) {
        if (inputValuesAsientoApertura[i] === '') {
            inputValuesAsientoApertura[i] = 0;
        }
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

function generateSumasSaldos(){
    balanceSumasSaldos = [];
    calculateDebeHaberLibro(libro1);
    calculateDebeHaberLibro(libro2);
    calculateDebeHaberLibro(libro3);
    calculateDebeHaberLibro(libro4);
    calculateDebeHaberLibro(libro5);
    calculateDebeHaberLibro(libro6);
    drawBalanceSumasSaldor();
}

function calculateDebeHaberLibro(libro){
    var totalD = 0 , totalH = 0;
    for (var i = 1; i <libro.length; i = i + 4) {
        totalD += parseInt(libro[i]);
        totalH += parseInt(libro[i+1]);
    }
    balanceSumasSaldos.push(libro[0]);
    balanceSumasSaldos.push(totalD);
    balanceSumasSaldos.push(totalH);
    if (totalD>totalH) {
        balanceSumasSaldos.push(libro[libro.length-1]);
        balanceSumasSaldos.push(0);
         
    }else{
        balanceSumasSaldos.push(0);
        balanceSumasSaldos.push(libro[libro.length-1]);
    }
}

function drawBalanceSumasSaldor(){
    for (var i = 0; i < balanceSumasSaldos.length; i++) {
        document.getElementById("registro-"+ i).innerHTML = balanceSumasSaldos[i];
    }
}

