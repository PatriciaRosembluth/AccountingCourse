var inputValuesBalanceApertura;
var inputValuesAsientoApertura;
var totalActivo;
var numberAsientos;
var totalDebe;
var totalHaber;
var glosaAsiento;
var posLastAsiento;
var libro1, libro2, libro3;
var saldo1, saldo2, saldo3;
var detailMayores;
window.onload = cargarCuentas;

function cargarCuentas(){
    $("#balanceApertura select").empty().append(sessionStorage.optionsAsString);
    detailMayores = sessionStorage.detailMayores.split(',');
}

function getAllValuesBalanceApertura() {
    libro1 = [], libro2 = [], libro3 = [];
    saldo1 = 0, saldo2 = 0, saldo3 = 0;
    accountsBalance = [];
    amountBalance = [];
    inputValuesBalanceApertura = [];
    inputValuesAsientoApertura = [];
    totalActivo = 0;
    fechaBalance = $('#dateBalance').val();
    $('#balanceApertura select').each(function() {
        if ($(this).val()==="0") {return}
         accountsBalance.push($(this).val()); 
    });
    $('#balanceApertura input').each(function() {
        amountBalance.push($(this).val()); 
    });
    if (fechaBalance != "") {
        for (var i = 0; i <accountsBalance.length; i++) {
           inputValuesBalanceApertura.push(accountsBalance[i]);
           inputValuesBalanceApertura.push(amountBalance[i]); 
        }
        calculateTotalActivo();
        initializeAsientoApertura();
        document.getElementById("totalActivo").innerHTML = totalActivo;
        document.getElementById("capital").innerHTML = totalActivo;
    }else{
        alert("Ingrese la fecha de incio de actividades");
        return;
    }
}

function calculateTotalActivo(){
    for (var i = 1; i < inputValuesBalanceApertura.length; i=i+2) {
        totalActivo += parseInt(inputValuesBalanceApertura[i]);
    }
    inputValuesBalanceApertura.push("capital");
    inputValuesBalanceApertura.push(totalActivo);
    //variables de sesion
    sessionStorage.setItem('inputValuesBalanceApertura',inputValuesBalanceApertura);
    //end
}

function initializeAsientoApertura(){
    numberAsientos = 0;
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
    numberAsientos++;
    //variables de sesion
    sessionStorage.setItem('inputValuesAsientoApertura',inputValuesAsientoApertura);
    sessionStorage.setItem('numberAsientos',numberAsientos);
    sessionStorage.setItem('totalDebe',totalHaber);
    sessionStorage.setItem('totalHaber',totalHaber);
    //end
    generateLibrosMayores(inputValuesAsientoApertura);
}

function generateLibrosMayores(values){
    detalle = values[values.length-1];
    for (var r = 0; r < values.length-1; r+=4) {
        var libro = findLibro(inputValuesAsientoApertura[r+1]);
        switch (libro) {
            case 1:
                libro1.push(values[r]);
                libro1.push(detalle);
                libro1.push(values[r+2]);
                libro1.push(values[r+3]);
                calculateSaldo(1,values[r+2],values[r+3]);
                libro1.push(saldo1);
            break;
            case 2:
                libro2.push(values[r]);
                libro2.push(detalle);
                libro2.push(values[r+2]);
                libro2.push(values[r+3]);
                calculateSaldo(2,values[r+2],values[r+3]);
                libro2.push(saldo2);
            break;
            case 3:
                libro3.push(values[r]);
                libro3.push(detalle);
                libro3.push(values[r+2]);
                libro3.push(values[r+3]);
                calculateSaldo(3,values[r+2],values[r+3]);
                libro3.push(saldo3);
            break;
        }
    }
    //variables de sesion
    sessionStorage.setItem('libro1',libro1);
    sessionStorage.setItem('saldo1',saldo1);
    sessionStorage.setItem('libro2',libro2);
    sessionStorage.setItem('saldo2',saldo2);
    sessionStorage.setItem('libro3',libro3);
    sessionStorage.setItem('saldo3',saldo3);
    //end
 }

 function findLibro(detalle){
    for (var i = 0; i < detailMayores.length; i++) {
        if (detalle === detailMayores[i]){
            return i+1;
        }
    }
        return 0;
}

function calculateSaldo(saldo,AmountDebe, AmountHaber){
    switch (saldo) {
        case 1:
            saldo1 = saldo1 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 2:
            saldo2 = saldo2 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 3:
            saldo3 = saldo3 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;    
    }
 }