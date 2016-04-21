var inputValuesBalanceAperturaActivo;
var inputValuesBalanceAperturaPasivo;
var inputValuesAsientoApertura;
var totalActivo;
var capital;
var totalPasivoPatrimonio;
var numberAsientos;
var totalDebe;
var totalHaber;
var glosaAsiento;
var posLastAsiento;
var libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8, libro9, libro10, libro11, libro12, libro13, libro14, libro15;
var saldo1, saldo2, saldo3, saldo4, saldo5, saldo6, saldo7, saldo8, saldo9, saldo10, saldo11, saldo12, saldo13, saldo14, saldo15;
var detailMayores;
var stringAsientoApertura;
var fechaBalance;
var lastDate;
window.onload = cargarCuentas;

function cargarCuentas(){
    detailMayores = sessionStorage.detailMayores.split(',');
}

function addTransaccionActivo(){
    stringTransaccionActivo = "<tr>"+
                "<td><select style = 'width:200px;height:24px;'></select></td>"+
                "<td><input type='text'/></td>"+
                "</tr>";
    $('#balanceAperturaActivo tbody').append(stringTransaccionActivo);
    $("#balanceAperturaActivo select").empty().append(sessionStorage.optionsAsString);             
}

function addTransaccionPasivo(){
    stringTransaccionPasivo = "<tr>"+
                "<td><select style = 'width:200px;height:24px;'></select></td>"+
                "<td><input type='text'/></td>"+
                "</tr>";
    $('#balanceAperturaPasivo tbody').append(stringTransaccionPasivo);
    $("#balanceAperturaPasivo select").empty().append(sessionStorage.optionsAsString);
}

function getAllValuesBalanceApertura() {
    libro1 = [], libro2 = [], libro3 = [], libro4 = [], libro5 = [], libro6 = [],libro7 = [], libro8 = [], libro9 = [], libro10 = [], libro11 = [], libro12 = [], libro13 = [], libro14 = [], libro15 = [];
    saldo1 = 0, saldo2 = 0, saldo3 = 0, saldo4 = 0, saldo5 = 0, saldo6 = 0, saldo7 = 0, saldo8 = 0, saldo9 = 0, saldo10 = 0, saldo11 = 0, saldo12 = 0, saldo13 = 0, saldo14 = 0, saldo15 = 0;
    accountsBalanceActivo = [];
    accountsBalancePasivo = [];
    amountBalanceActivo = [];
    amountBalancePasivo = [];
    inputValuesBalanceAperturaActivo = [];
    inputValuesBalanceAperturaPasivo = [];
    inputValuesAsientoApertura = [];
    totalActivo = 0;
    capital = 0;
    totalPasivoPatrimonio = 0;
    fechaBalance = $('#dateBalance').val().split("-").reverse().join("-");
    lastDate = fechaBalance;
    sessionStorage.setItem('fechaBalance',fechaBalance);
    $('#balanceAperturaActivo select').each(function() {
        if ($(this).val()==="0") {return}
         accountsBalanceActivo.push($(this).val()); 
    });
    $('#balanceAperturaPasivo select').each(function() {
        if ($(this).val()==="0") {return}
         accountsBalancePasivo.push($(this).val()); 
    });
    $('#balanceAperturaActivo input').each(function() {
        amountBalanceActivo.push($(this).val()); 
    });
    $('#balanceAperturaPasivo input').each(function() {
        amountBalancePasivo.push($(this).val()); 
    });
    if (fechaBalance != "") {
        for (var i = 0; i <accountsBalanceActivo.length; i++) {
           inputValuesBalanceAperturaActivo.push(accountsBalanceActivo[i]);
           inputValuesBalanceAperturaActivo.push(amountBalanceActivo[i]); 
        }
        for (var i = 0; i <accountsBalancePasivo.length; i++) {
           inputValuesBalanceAperturaPasivo.push(accountsBalancePasivo[i]);
           inputValuesBalanceAperturaPasivo.push(amountBalancePasivo[i]); 
        }
        calculateTotalActivoCapital();
        initializeAsientoApertura();
        document.getElementById("totalActivo").innerHTML = totalActivo;
        document.getElementById("capital").innerHTML = capital;
        document.getElementById("totalPasivoPatrimonio").innerHTML = totalPasivoPatrimonio;
    }else{
        alert("Ingrese la fecha de incio de actividades");
        return;
    }
}

function calculateTotalActivoCapital(){
    for (var i = 1; i < inputValuesBalanceAperturaActivo.length; i=i+2) {
        totalActivo += parseInt(inputValuesBalanceAperturaActivo[i]);
        capital += parseInt(inputValuesBalanceAperturaActivo[i]);
    }
    for (var i = 1; i < inputValuesBalanceAperturaPasivo.length; i=i+2) { 
        capital -= parseInt(inputValuesBalanceAperturaPasivo[i]);
        totalPasivoPatrimonio += parseInt(inputValuesBalanceAperturaPasivo[i]);
        totalPasivoPatrimonio += capital;
    }
    inputValuesBalanceAperturaPasivo.push("capital");
    inputValuesBalanceAperturaPasivo.push(capital);
    //variables de sesion
    sessionStorage.setItem('inputValuesBalanceAperturaActivo',inputValuesBalanceAperturaActivo);
    sessionStorage.setItem('inputValuesBalanceAperturaPasivo',inputValuesBalanceAperturaPasivo);
    //end
}

function initializeAsientoApertura(){
    stringAsientoApertura = "";
    numberAsientos = 0;
    totalDebe = totalActivo;
    totalHaber = totalActivo;
    for (var i = 0; i < inputValuesBalanceAperturaActivo.length; i=i+2) {
            inputValuesAsientoApertura.push(inputValuesBalanceAperturaActivo[i]);
            inputValuesAsientoApertura.push(inputValuesBalanceAperturaActivo[i+1]);
            inputValuesAsientoApertura.push(0);
    }
    for (var i = 0; i < inputValuesBalanceAperturaPasivo.length; i=i+2) {
        inputValuesAsientoApertura.push(inputValuesBalanceAperturaPasivo[i]);
        inputValuesAsientoApertura.push(0);
        inputValuesAsientoApertura.push(inputValuesBalanceAperturaPasivo[i+1]);
    }
    inputValuesAsientoApertura.push("Inicio de actividades");
    numberAsientos++;
    //variables de sesion
    sessionStorage.setItem('inputValuesAsientoApertura',inputValuesAsientoApertura);
    sessionStorage.setItem('numberAsientos',numberAsientos);
    sessionStorage.setItem('totalDebe',totalHaber);
    sessionStorage.setItem('totalHaber',totalHaber);
    sessionStorage.setItem('lastDate',lastDate);
    //end
    appendAsientoApertura(inputValuesAsientoApertura.length-1)
    generateLibrosMayores(inputValuesAsientoApertura);
}

function appendAsientoApertura(fin){
    for (var i = 0; i < fin; i=i+3) {
        if (i===0) {
            stringAsientoApertura += "<tr><td colspan = '3' align ='center'>A-"+numberAsientos+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+fechaBalance+"</td></tr>";
        }
        stringAsientoApertura += "<tr><td>"+inputValuesAsientoApertura[i]+"</td><td>"+inputValuesAsientoApertura[i+1]+"</td><td>"+inputValuesAsientoApertura[i+2]+"</td></tr>";
    }
    stringAsientoApertura += "<tr><td bgcolor='#D8D8D8' colspan = '3'>"+inputValuesAsientoApertura[fin]+"</td></tr>";
    
    stringAsientoApertura += "<tr bgcolor='#A9E2F3'><td><b>Total:</b></td><td>"+totalDebe+"</td><td>"+totalHaber+"</td></tr>";
    //variables de session
    sessionStorage.setItem('stringAsientoApertura',stringAsientoApertura);
    //end
}


function generateLibrosMayores(values){
    detalle = values[values.length-1];
    for (var r = 0; r < values.length; r+=3) {
        var libro = findLibro(values[r]);
        switch (libro) {
            case 1:
                libro1.push(fechaBalance);
                libro1.push(detalle);
                libro1.push(values[r+1]);
                libro1.push(values[r+2]);
                calculateSaldo(1,values[r+1],values[r+2]);
                libro1.push(saldo1);
            break;
            case 2:
                libro2.push(fechaBalance);
                libro2.push(detalle);
                libro2.push(values[r+1]);
                libro2.push(values[r+2]);
                calculateSaldo(2,values[r+1],values[r+2]);
                libro2.push(saldo2);
            break;
            case 3:
                libro3.push(fechaBalance);
                libro3.push(detalle);
                libro3.push(values[r+1]);
                libro3.push(values[r+2]);
                calculateSaldo(3,values[r+1],values[r+2]);
                libro3.push(saldo3);
            break;
            case 4:
                libro4.push(fechaBalance);
                libro4.push(detalle);
                libro4.push(values[r+1]);
                libro4.push(values[r+2]);
                calculateSaldo(4,values[r+1],values[r+2]);
                libro4.push(saldo4);
            break;
            case 5:
                libro5.push(fechaBalance);
                libro5.push(detalle);
                libro5.push(values[r+1]);
                libro5.push(values[r+2]);
                calculateSaldo(5,values[r+1],values[r+2]);
                libro5.push(saldo5);
            break;
            case 6:
                libro6.push(fechaBalance);
                libro6.push(detalle);
                libro6.push(values[r+1]);
                libro6.push(values[r+2]);
                calculateSaldo(6,values[r+1],values[r+2]);
                libro6.push(saldo6);
            break;
            case 7:
                libro7.push(fechaBalance);
                libro7.push(detalle);
                libro7.push(values[r+1]);
                libro7.push(values[r+2]);
                calculateSaldo(7,values[r+1],values[r+2]);
                libro7.push(saldo7);
            break;
            case 8:
                libro8.push(fechaBalance);
                libro8.push(detalle);
                libro8.push(values[r+1]);
                libro8.push(values[r+2]);
                calculateSaldo(8,values[r+1],values[r+2]);
                libro8.push(saldo8);
            break;
            case 9:
                libro9.push(fechaBalance);
                libro9.push(detalle);
                libro9.push(values[r+1]);
                libro9.push(values[r+2]);
                calculateSaldo(9,values[r+1],values[r+2]);
                libro9.push(saldo9);
            break;
            case 10:
                libro10.push(fechaBalance);
                libro10.push(detalle);
                libro10.push(values[r+1]);
                libro10.push(values[r+2]);
                calculateSaldo(10,values[r+1],values[r+2]);
                libro10.push(saldo10);
             break;
            case 11:
                libro11.push(fechaBalance);
                libro11.push(detalle);
                libro11.push(values[r+1]);
                libro11.push(values[r+2]);
                calculateSaldo(11,values[r+1],values[r+2]);
                libro11.push(saldo11);
             break;
            case 12:
                libro12.push(fechaBalance);
                libro12.push(detalle);
                libro12.push(values[r+1]);
                libro12.push(values[r+2]);
                calculateSaldo(12,values[r+1],values[r+2]);
                libro12.push(saldo12);
             break;
            case 13:
                libro13.push(fechaBalance);
                libro13.push(detalle);
                libro13.push(values[r+1]);
                libro13.push(values[r+2]);
                calculateSaldo(13,values[r+1],values[r+2]);
                libro13.push(saldo13);
             break;
            case 14:
                libro14.push(fechaBalance);
                libro14.push(detalle);
                libro14.push(values[r+1]);
                libro14.push(values[r+2]);
                calculateSaldo(14,values[r+1],values[r+2]);
                libro14.push(saldo14);
             break;
            case 15:
                libro5.push(fechaBalance);
                libro5.push(detalle);
                libro5.push(values[r+1]);
                libro5.push(values[r+2]);
                calculateSaldo(5,values[r+1],values[r+2]);
                libro5.push(saldo15);
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
    sessionStorage.setItem('libro4',libro4);
    sessionStorage.setItem('saldo4',saldo4);
    sessionStorage.setItem('libro5',libro5);
    sessionStorage.setItem('saldo5',saldo5);
    sessionStorage.setItem('libro6',libro6);
    sessionStorage.setItem('saldo6',saldo6);
    sessionStorage.setItem('libro7',libro7);
    sessionStorage.setItem('saldo7',saldo7);
    sessionStorage.setItem('libro8',libro8);
    sessionStorage.setItem('saldo8',saldo8);
    sessionStorage.setItem('libro9',libro9);
    sessionStorage.setItem('saldo9',saldo9);
    sessionStorage.setItem('libro10',libro10);
    sessionStorage.setItem('saldo10',saldo10);
    sessionStorage.setItem('libro11',libro11);
    sessionStorage.setItem('saldo11',saldo11);
    sessionStorage.setItem('libro12',libro12);
    sessionStorage.setItem('saldo12',saldo12);
    sessionStorage.setItem('libro13',libro13);
    sessionStorage.setItem('saldo13',saldo13);
    sessionStorage.setItem('libro14',libro14);
    sessionStorage.setItem('saldo14',saldo14);
    sessionStorage.setItem('libro15',libro15);
    sessionStorage.setItem('saldo15',saldo15);
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
        case 4:
            saldo4 = saldo4 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 5:
            saldo5 = saldo5 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 6:
            saldo6 = saldo6 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 7:
            saldo7 = saldo7 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 8:
            saldo8 = saldo8 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 9:
            saldo9 = saldo9 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 10:
            saldo10 = saldo10 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 11:
            saldo11 = saldo11 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 12:
            saldo12 = saldo12 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 13:
            saldo13 = saldo13 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 14:
            saldo14 = saldo14 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 15:
            saldo15 = saldo15 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;

    }
 }