var accounts;
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
var hojaTrabajo;
var totalGastoHt;
var totalIngresoHt;
var totalActivoHt;
var totalCapitalHt;

//VERIFICACIONES
function verifyIfBalanceAperturaIsComplete(caso) {
    switch(caso){
        case 'balance':
            if(isNaN(totalActivo)){ 
                alert("Debe registrar los datos del Balace de Apertura");
                return false;
            }else if(totalActivo <= 0){
                alert("El Capital y Total Activo no pueden ser menores a 0");
                return false;
            }else{
                return true;
            }
        break;
        case 'asiento':
            if(totalActivo <= 0 || totalActivo === undefined || isNaN(totalActivo)){
                alert("Debe registrar los datos del Balace de Apertura correctamente");
                return false;
            }else{
                getAllValuesAsientoApertura();
            }
        break;
    }
   
}

function verifyIfAsientoAperturaIsComplete(caso) {
    switch(caso){
        case 'asiento':
            if(totalDebe === 0 && totalHaber === 0){
                alert("Debe registrar los datos del Asiento De Apertura");
                return false;
            }else if(totalDebe != totalHaber){
                alert("Total Debe y Haber el Asiento de apertura deben ser iguales");
                return false;
            }else{
                return true;
             }
        break;
        case 'libros':
            if(totalDebe === 0 && totalHaber === 0 || totalDebe != totalHaber){
                alert("Total Debe y Haber el Asiento de apertura deben ser iguales y mayores a 0");
                return false; 
            }else if (detailMayores === undefined ){
                alert("Debe registrar datos del Balance de Apertura");
                return false; 
            }else if (totalDebe != totalHaber){
                alert("Total Debe y Haber el Asiento de apertura deben ser iguales");
               return false; 
            }else{
                generateLibrosMayores();
            }
        break;
    }
}

function verifyIfLibrosMayoresAreGenerate(){
    if(detailMayores === undefined || libro1 === undefined){
        alert("Debe generar los Libros Mayores");
    }else{
        generateSumasSaldos();
    }
}

function verifyIfSumasSaldosAreGenerate(){
    if(balanceSumasSaldos === undefined){
        alert("Debe generar Balance Sumas de Comprobacion de Sumas y Saldos");
    }else{
        generateHojaTrabajo();
    }
}
//END VERIFICACIONES

function getAccounts(){
    detailMayores = [];
    stringTypesAccounts = [];
    accounts = [];
    optionsAsString = "<option value = 0>Seleccionar</option>";
    $('#accounts input').each(function() {
        if ($(this).val()==="") {return}
        detailMayores.push($(this).val()); 
    });
    $('#accounts select').each(function() {
        if ($(this).val()==="0") {return}
        stringTypesAccounts.push($(this).val()); 
    });
    for (var i = 0; i < detailMayores.length; i++) {
        accounts.push(detailMayores[i]);
        accounts.push(stringTypesAccounts[i]); 
    }

    for(var i = 0; i < accounts.length; i=i+2) {
        optionsAsString += "<option value='" + accounts[i] + "'>" + accounts[i] + "</option>";
    }
    $("#balanceApertura select").empty().append(optionsAsString);
    $('select[name="optionsAccounts"]').empty().append(optionsAsString);
    $('select[name="optionsBalance"]').empty().append(optionsAsString);
}

function getAllValuesBalanceApertura() {
    accountsBalance = [];
    amountBalance = [];
    inputValuesBalanceApertura = [];
    inputValuesAsientoApertura = [];
    detailBalance = [];
    totalActivo = 0;
    $('#balanceApertura select').each(function() {
        if ($(this).val()==="0") {return}
         accountsBalance.push($(this).val()); 
    });
    $('#balanceApertura input').each(function() {
        amountBalance.push($(this).val()); 
    });
    for (var i = 0; i <accountsBalance.length; i++) {
       inputValuesBalanceApertura.push(accountsBalance[i]);
       inputValuesBalanceApertura.push(amountBalance[i]); 
    }
    calculateTotalActivo();
    initializeAsientoApertura();
    document.getElementById("totalActivo").innerHTML = totalActivo;
    document.getElementById("capital").innerHTML = totalActivo;
    if (verifyIfBalanceAperturaIsComplete('balance')){
        getDetailsBalanceApertura();
    }
}

function calculateTotalActivo(){
    for (var i = 1; i < inputValuesBalanceApertura.length; i=i+2) {
        totalActivo += parseInt(inputValuesBalanceApertura[i]);
    }
    inputValuesBalanceApertura.push("capital");
    inputValuesBalanceApertura.push(totalActivo);
}

function initializeAsientoApertura(){
    totalDebe = totalActivo;
    totalHaber = totalActivo;
    fechaBalance = $('#dateBalance').val();
    for (var i = 0; i < inputValuesBalanceApertura.length; i=i+2) {
        inputValuesAsientoApertura.push(fechaBalance);
        if (inputValuesBalanceApertura[i] != "capital") {
            inputValuesAsientoApertura.push(inputValuesBalanceApertura[i]);
            inputValuesAsientoApertura.push(inputValuesBalanceApertura[i+1]);
            inputValuesAsientoApertura.push(0);
        }else{
            inputValuesAsientoApertura.push(inputValuesBalanceApertura[i]);
            inputValuesAsientoApertura.push(0);
            inputValuesAsientoApertura.push(inputValuesBalanceApertura[i+1]);
        }
    }
    inputValuesAsientoApertura.push("Inicio de actividades");
    drawAsientoApertura();
}

function drawAsientoApertura(){
    for (var i = 0; i < inputValuesAsientoApertura.length; i++) {
        document.getElementById("balance-"+ i).innerHTML = inputValuesAsientoApertura[i];   
    }
    document.getElementById("totalDebe").innerHTML = totalDebe;
    document.getElementById("totalHaber").innerHTML = totalHaber;
}


function getDetailsBalanceApertura(){
    for (var j = 0 ; j<inputValuesBalanceApertura.length; j = j+2) {
        detailBalance.push(inputValuesBalanceApertura[j]);
    }
}

function registerAsiento(){
    fechaAsiento = $('#dateAsiento').val();
    registroAsiento = [];
    detailAsiento = [];
    j=0;
    $('#registroAsiento input').each(function() {
        registroAsiento.push($(this).val()); 
    });
    $('#registroAsiento select').each(function() {
         detailAsiento.push($(this).val()); 
    });
   for (var i = 0; i < registroAsiento.length-1; i=i+2) {
    inputValuesAsientoApertura.push(fechaAsiento);
    inputValuesAsientoApertura.push(detailAsiento[j]);
    inputValuesAsientoApertura.push(registroAsiento[i]);
    inputValuesAsientoApertura.push(registroAsiento[i+1]);
    j++;
   }
   inputValuesAsientoApertura.push(registroAsiento[registroAsiento.length-1]);
   setSpaceFromArray();
   getTotalDebeYhaber(registroAsiento);
   drawAsientoApertura();
   $('#dateAsiento').val("");
   $('#registroAsiento input').each(function() {
        $(this).val("");
    });
    $('#registroAsiento select').each(function() {
       $(this).val("0");
    });
}

function setSpaceFromArray(){
    for (var i = 0; i < inputValuesAsientoApertura.length; i++) {
        if (inputValuesAsientoApertura[i] === '') {
            inputValuesAsientoApertura[i] = 0;
        }
    }
}

function getTotalDebeYhaber(debeHaber){
    for (var i = 0; i < debeHaber.length-1; i=i+2) {
        var value = debeHaber[i];
        if(value != 0){
            totalDebe += parseInt(debeHaber[i]);    
        }else{
            i++;
            totalHaber += parseInt(debeHaber[i]);
            i--;   
        }
    }
}

function generateLibrosMayores(){
    var inicio = (detailBalance.length * 4) + 1;
    libro1 = [], libro2 = [], libro3 = [], libro4 = [], libro5 = [], libro6 = [], libro7 = [];
    saldo1 = 0, saldo2 = 0, saldo3 = 0, saldo4 = 0; saldo5 = 0, saldo6 = 0, saldo7 = 0;
    initializeLibrosMayores(detailBalance.length * 4);
    var q = inicio;
    for (var p = q; p < inputValuesAsientoApertura.length; p = p+9 ) {
        var bloque = inicio+7;
        detalle = inputValuesAsientoApertura[bloque+1]; 
        for (var r = inicio + 1; r < bloque; r = r+4) {
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
                 case 8:
                    libro8.push(inputValuesAsientoApertura[r-1]);
                    libro8.push(detalle);
                    libro8.push(inputValuesAsientoApertura[r+1]);
                    libro8.push(inputValuesAsientoApertura[r+2]);
                    calculateSaldo(8,inputValuesAsientoApertura[r+1],inputValuesAsientoApertura[r+2]);
                    libro8.push(saldo8);
                    break;
                 case 9:
                    libro9.push(inputValuesAsientoApertura[r-1]);
                    libro9.push(detalle);
                    libro9.push(inputValuesAsientoApertura[r+1]);
                    libro9.push(inputValuesAsientoApertura[r+2]);
                    calculateSaldo(9,inputValuesAsientoApertura[r+1],inputValuesAsientoApertura[r+2]);
                    libro9.push(saldo9);
                    break;
                 case 10:
                    libro10.push(inputValuesAsientoApertura[r-1]);
                    libro10.push(detalle);
                    libro10.push(inputValuesAsientoApertura[r+1]);
                    libro10.push(inputValuesAsientoApertura[r+2]);
                    calculateSaldo(10,inputValuesAsientoApertura[r+1],inputValuesAsientoApertura[r+2]);
                    libro10.push(saldo10);
                    break;
            }
        }
        inicio = bloque + 2;
    }
    drawLibrosMayores();
 }

 function initializeLibrosMayores(inicio){
    for (var m = 0 ; m < detailBalance.length + 1; m++) {
        if(m>1){
            calculateSaldo(1,inputValuesAsientoApertura[m],0);
            calculateSaldo(2,inputValuesAsientoApertura[m+4],0);
            calculateSaldo(3,inputValuesAsientoApertura[m+8],0);
            libro1.push(inputValuesAsientoApertura[m]);
            libro2.push(inputValuesAsientoApertura[m+4]);
            libro3.push(inputValuesAsientoApertura[m+8]);  
        }else if(m===1){
            libro1.push(inputValuesAsientoApertura[inicio]);
            libro2.push(inputValuesAsientoApertura[inicio]);
            libro3.push(inputValuesAsientoApertura[inicio]);
        }else{
            libro1.push(inputValuesAsientoApertura[m]);
            libro2.push(inputValuesAsientoApertura[m+4]);
            libro3.push(inputValuesAsientoApertura[m+8]);     
        }
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
        case 8:
            saldo8 = saldo8 + parseInt(AmountDebe) - parseInt(AmountHaber);
            if (saldo8 < 0) {saldo8*=-1}
            break;
        case 9:
            saldo9 = saldo9 + parseInt(AmountDebe) - parseInt(AmountHaber);
            if (saldo9 < 0) {saldo9*=-1}
            break;
        case 10:
            saldo10 = saldo10 + parseInt(AmountDebe) - parseInt(AmountHaber);
            if (saldo10 < 0) {saldo10*=-1}
            break;
    }
 }

 function drawLibrosMayores(){
    if (libro1[0]!=undefined){
        document.getElementById("libro1").innerHTML = detailMayores[0];
        for (var i = 0; i < libro1.length; i++) {
            document.getElementById("libro1-"+ i).innerHTML = libro1[i];
        }
    }
    if (libro2[0]!=undefined){
        document.getElementById("libro2").innerHTML = detailMayores[1];
         for (var i = 0; i < libro2.length; i++) {
            document.getElementById("libro2-"+ i).innerHTML = libro2[i];
        }
    }
    if (libro3[0]!=undefined){
        document.getElementById("libro3").innerHTML =detailMayores[2];
         for (var i = 0; i < libro3.length; i++) {
            document.getElementById("libro3-"+ i).innerHTML = libro3[i];
        }
    }
    if (libro4[0]!=undefined){
        document.getElementById("libro4").innerHTML = detailMayores[3];
         for (var i = 0; i < libro4.length; i++) {
            document.getElementById("libro4-"+ i).innerHTML = libro4[i];
        }
    }
    if (libro5[0]!=undefined){
        document.getElementById("libro5").innerHTML = detailMayores[4];
         for (var i = 0; i < libro5.length; i++) {
            document.getElementById("libro5-"+ i).innerHTML = libro5[i];
        }
    }
    if (libro6[0]!=undefined){
        document.getElementById("libro6").innerHTML = detailMayores[5];
         for (var i = 0; i < libro6.length; i++) {
            document.getElementById("libro6-"+ i).innerHTML = libro6[i];
        }
    }
    if (libro7[0]!=undefined){
        document.getElementById("libro7").innerHTML = detailMayores[6];
         for (var i = 0; i < libro7.length; i++) {
            document.getElementById("libro7-"+ i).innerHTML = libro7[i];
        }
    }
    if (libro8[0]!=undefined){
        document.getElementById("libro8").innerHTML = detailMayores[7];
         for (var i = 0; i < libro8.length; i++) {
            document.getElementById("libro8-"+ i).innerHTML = libro8[i];
        }
    }
    if (libro9[0]!=undefined){
        document.getElementById("libro9").innerHTML = detailMayores[8];
         for (var i = 0; i < libro9.length; i++) {
            document.getElementById("libro9-"+ i).innerHTML = libro9[i];
        }
    }
    if (libro10[0]!=undefined){
        document.getElementById("libro10").innerHTML = detailMayores[9];
         for (var i = 0; i < libro10.length; i++) {
            document.getElementById("libro10-"+ i).innerHTML = libro10[i];
        }
    }
 }

function findDetailBalance(detalle){
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
    calculateDebeHaberLibro(libro1,0);
    calculateDebeHaberLibro(libro2,1);
    calculateDebeHaberLibro(libro3,2);
    calculateDebeHaberLibro(libro4,3);
    calculateDebeHaberLibro(libro5,4);
    calculateDebeHaberLibro(libro6,5);
    calculateDebeHaberLibro(libro7,6);
    calculateDebeHaberLibro(libro8,7);
    calculateDebeHaberLibro(libro9,8);
    calculateDebeHaberLibro(libro10,9);
    drawBalanceSumasSaldor();
}

function calculateDebeHaberLibro(libro,detalle){
    var totalD = 0 , totalH = 0;
    if (libro[0]===undefined){return}
    for (var i = 2; i <libro.length; i = i + 5) {
        totalD += parseInt(libro[i]);
        totalH += parseInt(libro[i+1]);
    }
    balanceSumasSaldos.push(detailMayores[detalle]);
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
}

function generateHojaTrabajo(){
    hojaTrabajo = [];
    totalGastoHt = 0, totalIngresoHt = 0, totalActivoHt = 0, totalCapitalHt = 0;
    var j = 1;
    var valor;
    for (var i = 0; i < balanceSumasSaldos.length-1; i=i+5) {
        hojaTrabajo.push(balanceSumasSaldos[i]);
        hojaTrabajo.push(balanceSumasSaldos[i+3]);
        hojaTrabajo.push(balanceSumasSaldos[i+4]);
        if (balanceSumasSaldos[i+3] != 0) {valor = balanceSumasSaldos[i+3];}else{valor = balanceSumasSaldos[i+4];}
        if (accounts[j] === "A") {hojaTrabajo.push(0,0,valor,0); totalActivoHt+=valor;}
        if (accounts[j] === "P" || accounts[j] === "C") {hojaTrabajo.push(0,0,0,valor); totalCapitalHt+=valor;}
        if (accounts[j] === "G") {hojaTrabajo.push(valor,0,0,0); totalGastoHt+=valor;}
        if (accounts[j] === "I") {hojaTrabajo.push(0,valor,0,0);totalIngresoHt+=valor;}
        j=j+2;
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
    // else{
    //     document.getElementById("utilidadNeta").innerHTML = "Mala seleccion";
    // }
}