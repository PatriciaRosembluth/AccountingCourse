var inputValuesBalanceApertura;
var inputValuesAsientoApertura;
var balanceSumasSaldos;
var detailMayores;
var detailBalance;
var totalActivo;
var totalDebe;
var totalHaber;
var libro1, libro2, libro3, libro4, libro5, libro6, libro7;
var saldo1, saldo2, saldo3, saldo4, saldo5, saldo6, saldo7;
var totalDebeSs;
var totalHaberSs;
var totalDeudorSs;
var totalAcreedorSs;
var inputSelectType;
var hojaTrabajo;
var totalGastoHt;
var totalIngresoHt;
var totalActivoHt;
var totalCapitalHt;

function getAllValuesBalanceApertura() {
     inputValuesBalanceApertura = [];
     detailBalance = [];
     totalActivo = 0;
    $('#balanceApertura input').each(function() {
        inputValuesBalanceApertura.push($(this).val()); 
    })
    calculateTotalActivo();
    getDetailsBalanceApertura();
    document.getElementById("totalActivo").innerHTML = totalActivo;
    document.getElementById("capital").innerHTML = totalActivo;
}

function calculateTotalActivo(){
    for (var i = 1; i < inputValuesBalanceApertura.length; i=i+2) {
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
    $('#asientoApertura input').each(function() {
        inputValuesAsientoApertura.push($(this).val()); 
    })
    setSpaceFromArray();
    getTotalDebeYhaber();
    getLibrosMayores();
    
    document.getElementById("totalDebe").innerHTML = totalDebe;
    document.getElementById("totalHaber").innerHTML = totalHaber;
}

function setSpaceFromArray(){
    for (var i = 0; i < inputValuesAsientoApertura.length; i++) {
        if (inputValuesAsientoApertura[i] === '') {
            inputValuesAsientoApertura[i] = 0;
        }
    }
}

function getTotalDebeYhaber(){
    totalDebe = 0;
    totalHaber = 0;
    for (var i = 2; i < inputValuesAsientoApertura.length; i++) {
        var value = inputValuesAsientoApertura[i];
        if(value != ""){
            totalDebe += parseInt(inputValuesAsientoApertura[i]);    
        }else{
            i++;
            totalHaber += parseInt(inputValuesAsientoApertura[i]);
            i--;   
        }
        i=i+3;
    }
}

function getLibrosMayores(){
    detailMayores = [];
    var find = false;
    detailMayores.push(inputValuesAsientoApertura[1].toLowerCase());
    for (var k = 1; k < inputValuesAsientoApertura.length; k = k+4) {
        for (var j = 0; j < detailMayores.length; j++) {
            if(isNaN(inputValuesAsientoApertura[k])){
                if (detailMayores[j] === inputValuesAsientoApertura[k].toLowerCase()) {
                    find = true;
                    j = detailMayores.length;
                }
            }
        }
        if (find === false) {
            detailMayores.push(inputValuesAsientoApertura[k]);
        }
        find = false;
    }
}

 function generateLibrosMayores(){
    var inicio = detailBalance.length * 4;
    libro1 = [], libro2 = [], libro3 = [], libro4 = [], libro5 = [], libro6 = [], libro7 = [];
    saldo1 = 0, saldo2 = 0, saldo3 = 0, saldo4 = 0; saldo5 = 0, saldo6 = 0, saldo7 = 0;
    initializeLibrosMayores();
     var q = inicio;
     for (var p = q; p < inputValuesAsientoApertura.length; p = p+8 ) {
        var bloque = inicio+7;
        var aux = inputValuesAsientoApertura[p+1];
        if (aux === 0 ){drawLibrosMayores();return}
        var detalle = inputValuesAsientoApertura[p+5];
        if (findDetalleBalance(detalle)) {
            detalle = aux;
        }
        for (var r = inicio + 1; r < bloque; r = r+4) {
            var value;
            var libro = findLibro(inputValuesAsientoApertura[r]);
            switch (libro) {
                case 1:
                    libro1.push(inputValuesAsientoApertura[r-1]);
                    libro1.push(detalle);
                    libro1.push(inputValuesAsientoApertura[r+1]);
                    libro1.push(inputValuesAsientoApertura[r+2]);
                    calculateSaldo(1,inputValuesAsientoApertura[r+1],inputValuesAsientoApertura[r+2]);
                    libro1.push(saldo1);
                    break;
                case 2:
                    libro2.push(inputValuesAsientoApertura[r-1]);
                    libro2.push(detalle);
                    libro2.push(inputValuesAsientoApertura[r+1]);
                    libro2.push(inputValuesAsientoApertura[r+2]);
                    calculateSaldo(2,inputValuesAsientoApertura[r+1],inputValuesAsientoApertura[r+2]);
                    libro2.push(saldo2);
                    break;
                case 3:
                    libro3.push(inputValuesAsientoApertura[r-1]);
                    libro3.push(detalle);
                    libro3.push(inputValuesAsientoApertura[r+1]);
                    libro3.push(inputValuesAsientoApertura[r+2]);
                    calculateSaldo(3,inputValuesAsientoApertura[r+1],inputValuesAsientoApertura[r+2]);
                    libro3.push(saldo3);
                    break;
                case 4:
                    libro4.push(inputValuesAsientoApertura[r-1]);
                    libro4.push(detalle);
                    libro4.push(inputValuesAsientoApertura[r+1]);
                    libro4.push(inputValuesAsientoApertura[r+2]);
                    calculateSaldo(4,inputValuesAsientoApertura[r+1],inputValuesAsientoApertura[r+2]);
                    libro4.push(saldo4);
                    break;
                case 5:
                    libro5.push(inputValuesAsientoApertura[r-1]);
                    libro5.push(detalle);
                    libro5.push(inputValuesAsientoApertura[r+1]);
                    libro5.push(inputValuesAsientoApertura[r+2]);
                    calculateSaldo(5,inputValuesAsientoApertura[r+1],inputValuesAsientoApertura[r+2]);
                    libro5.push(saldo5);
                    break;
                case 6:
                    libro6.push(inputValuesAsientoApertura[r-1]);
                    libro6.push(detalle);
                    libro6.push(inputValuesAsientoApertura[r+1]);
                    libro6.push(inputValuesAsientoApertura[r+2]);
                    calculateSaldo(6,inputValuesAsientoApertura[r+1],inputValuesAsientoApertura[r+2]);
                    libro6.push(saldo6);
                    break;
                case 7:
                    libro7.push(inputValuesAsientoApertura[r-1]);
                    libro7.push(detalle);
                    libro7.push(inputValuesAsientoApertura[r+1]);
                    libro7.push(inputValuesAsientoApertura[r+2]);
                    calculateSaldo(7,inputValuesAsientoApertura[r+1],inputValuesAsientoApertura[r+2]);
                    libro7.push(saldo7);
                    break;
            }
        }
        inicio = bloque + 1;
    }
    drawLibrosMayores();
 }

 function initializeLibrosMayores(){
    for (var m = 0 ; m < detailBalance.length + 1; m++) {
        if(m>1){
            calculateSaldo(1,inputValuesAsientoApertura[m],0);
            calculateSaldo(2,inputValuesAsientoApertura[m+4],0);
            calculateSaldo(3,inputValuesAsientoApertura[m+8],0);
        }
        libro1.push(inputValuesAsientoApertura[m]);
        libro2.push(inputValuesAsientoApertura[m+4]);
        libro3.push(inputValuesAsientoApertura[m+8]);     
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
        case 7:
            saldo7 = saldo7 + parseInt(AmountDebe) - parseInt(AmountHaber);
            if (saldo7 < 0) {saldo7*=-1}
            break;
    }
 }

 function drawLibrosMayores(){
    if (libro1[0]===undefined){return}
    document.getElementById("libro1").innerHTML = libro1[1];
    for (var i = 0; i < libro1.length; i++) {
        document.getElementById("libro1-"+ i).innerHTML = libro1[i];
    }
    if (libro2[0]===undefined){return}
    document.getElementById("libro2").innerHTML = libro2[1];
     for (var i = 0; i < libro2.length; i++) {
        document.getElementById("libro2-"+ i).innerHTML = libro2[i];
    }
    if (libro3[0]===undefined){return}
    document.getElementById("libro3").innerHTML = libro3[1];
     for (var i = 0; i < libro3.length; i++) {
        document.getElementById("libro3-"+ i).innerHTML = libro3[i];
    }
    if (libro4[0]===undefined){return}
    document.getElementById("libro4").innerHTML = libro4[1];
     for (var i = 0; i < libro4.length; i++) {
        document.getElementById("libro4-"+ i).innerHTML = libro4[i];
    }
    if (libro5[0]===undefined){return}
    document.getElementById("libro5").innerHTML = libro5[1];
     for (var i = 0; i < libro5.length; i++) {
        document.getElementById("libro5-"+ i).innerHTML = libro5[i];
    }
    if (libro6[0]===undefined){return}
    document.getElementById("libro6").innerHTML = libro6[1];
     for (var i = 0; i < libro6.length; i++) {
        document.getElementById("libro6-"+ i).innerHTML = libro6[i];
    }
    if (libro7[0]===undefined){return}
    document.getElementById("libro7").innerHTML = libro7[1];
     for (var i = 0; i < libro7.length; i++) {
        document.getElementById("libro7-"+ i).innerHTML = libro7[i];
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
    totalDebeSs = 0, totalHaberSs = 0, totalDeudorSs = 0, totalAcreedorSs = 0;
    calculateDebeHaberLibro(libro1);
    calculateDebeHaberLibro(libro2);
    calculateDebeHaberLibro(libro3);
    calculateDebeHaberLibro(libro4);
    calculateDebeHaberLibro(libro5);
    calculateDebeHaberLibro(libro6);
    calculateDebeHaberLibro(libro7);
    drawBalanceSumasSaldor();
}

function calculateDebeHaberLibro(libro){
    var totalD = 0 , totalH = 0;
    if (libro[1]===undefined){return}
    for (var i = 2; i <libro.length; i = i + 5) {
        totalD += parseInt(libro[i]);
        totalH += parseInt(libro[i+1]);
    }
    balanceSumasSaldos.push(libro[1]);
    balanceSumasSaldos.push(totalD);
    balanceSumasSaldos.push(totalH);
    totalDebeSs += totalD;
    totalHaberSs += totalH;
    if (totalD>totalH) {
        balanceSumasSaldos.push(libro[libro.length-1]);
        balanceSumasSaldos.push(0);
        totalDeudorSs += libro[libro.length-1];
         
    }else{
        balanceSumasSaldos.push(0);
        balanceSumasSaldos.push(libro[libro.length-1]);
        totalAcreedorSs += libro[libro.length-1];
    }
}

function drawBalanceSumasSaldor(){
    for (var i = 0; i < balanceSumasSaldos.length; i++) {
        document.getElementById("registro-"+ i).innerHTML = balanceSumasSaldos[i];
    }
    document.getElementById("totalDebeSs").innerHTML = totalDebeSs;
    document.getElementById("totalHaberSs").innerHTML = totalHaberSs;
    document.getElementById("totalDeudorSs").innerHTML = totalDeudorSs;
    document.getElementById("totalAcreedorSs").innerHTML = totalAcreedorSs;
    loadSelectionDetail()
}

function loadSelectionDetail(){
    for (var i = 0; i < detailMayores.length; i++) {
        if(detailMayores[i]==0){return}
        document.getElementById("opcion-"+ i).innerHTML = detailMayores[i];
    }
}

function generateHojaTrabajo(){
    inputSelectType = [];
    hojaTrabajo = [];
    totalGastoHt = 0, totalIngresoHt = 0, totalActivoHt = 0, totalCapitalHt = 0;
    var j = 0;
    var valor;
    $('#selectType select').each(function() {
        if ($(this).val()==="0") {return}
        inputSelectType.push($(this).val()); 
    });
    for (var i = 0; i < balanceSumasSaldos.length-1; i=i+5) {
        hojaTrabajo.push(balanceSumasSaldos[i]);
        hojaTrabajo.push(balanceSumasSaldos[i+3]);
        hojaTrabajo.push(balanceSumasSaldos[i+4]);
        if (balanceSumasSaldos[i+3] != 0) {valor = balanceSumasSaldos[i+3];}else{valor = balanceSumasSaldos[i+4];}
        if (inputSelectType[j] === "A") {hojaTrabajo.push(0,0,valor,0); totalActivoHt+=valor;}
        if (inputSelectType[j] === "P" || inputSelectType[j] === "C") {hojaTrabajo.push(0,0,0,valor); totalCapitalHt+=valor;}
        if (inputSelectType[j] === "G") {hojaTrabajo.push(valor,0,0,0); totalGastoHt+=valor;}
        if (inputSelectType[j] === "I") {hojaTrabajo.push(0,valor,0,0);totalIngresoHt+=valor;}
        j++;
    }
    drawHojaTrabajo();
}

function drawHojaTrabajo(){
    for (var i = 0; i < hojaTrabajo.length; i++) {
        document.getElementById("hoja-"+ i).innerHTML = hojaTrabajo[i];
    }
    document.getElementById("totalDeudorHt").innerHTML = totalDeudorSs;
    document.getElementById("totalAcreedorHt").innerHTML = totalAcreedorSs;
    document.getElementById("totalGastoHt").innerHTML = totalGastoHt;
    document.getElementById("totalIngresoHt").innerHTML = totalIngresoHt;
    document.getElementById("totalActivoHt").innerHTML = totalActivoHt;
    document.getElementById("totalCapitalHt").innerHTML = totalCapitalHt;
    if (totalIngresoHt - totalGastoHt === totalActivoHt - totalCapitalHt) {
        var utilidadNeta = totalActivoHt - totalCapitalHt;
        document.getElementById("utilidadNeta").innerHTML = utilidadNeta;
    }
    else{
        document.getElementById("utilidadNeta").innerHTML = "Mala seleccion";
    }


}