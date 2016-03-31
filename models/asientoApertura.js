var inputValuesBalanceApertura;
var inputValuesAsientoApertura;
var numberAsientos;
var posLastAsiento;
var glosaAsiento;
var totalDebe;
var totalHaber;
var detailMayores;
var libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8, libro9, libro10;
var saldo1, saldo2, saldo3, saldo4, saldo5, saldo6, saldo7, saldo8, saldo9, saldo10;
var stringAsientoApertura;
window.onload = cargarCuentas;

function cargarCuentas(){
	numberAsientos = parseInt(sessionStorage.numberAsientos);
    stringAsientoApertura = (sessionStorage.stringAsientoApertura);
	totalDebe = parseInt(sessionStorage.totalDebe);
	totalHaber = parseInt(sessionStorage.totalHaber);
    inputValuesBalanceApertura = sessionStorage.inputValuesBalanceApertura.split(',');
	inputValuesAsientoApertura = sessionStorage.inputValuesAsientoApertura.split(',');
	libro1 = sessionStorage.libro1.split(',');
    if (libro1.length === 1) {libro1 = [];}
	libro2 = sessionStorage.libro2.split(',');
    if (libro2.length === 1) {libro2 = [];}
	libro3 = sessionStorage.libro3.split(',');
    if (libro3.length === 1) {libro3 = [];}
    libro4 = sessionStorage.libro4.split(',');
    if (libro4.length === 1) {libro4 = [];}
    libro5 = sessionStorage.libro5.split(',');
    if (libro5.length === 1) {libro5 = [];}
    libro6 = sessionStorage.libro6.split(',');
    if (libro6.length === 1) {libro6 = [];}
    libro7 = sessionStorage.libro7.split(',');
    if (libro7.length === 1) {libro7 = [];}
    libro8 = sessionStorage.libro8.split(',');
    if (libro8.length === 1) {libro8 = [];}
    libro9 = sessionStorage.libro9.split(',');
    if (libro9.length === 1) {libro9 = [];}
    libro10 = sessionStorage.libro10.split(',');
    if (libro10.length === 1) {libro10 = [];}
	saldo1 = parseInt(sessionStorage.saldo1);
	saldo2 = parseInt(sessionStorage.saldo2);
	saldo3 = parseInt(sessionStorage.saldo3);
    saldo4 = parseInt(sessionStorage.saldo4);
    saldo5 = parseInt(sessionStorage.saldo5);
    saldo6 = parseInt(sessionStorage.saldo6);
    saldo7 = parseInt(sessionStorage.saldo7);
    saldo8 = parseInt(sessionStorage.saldo8);
    saldo9 = parseInt(sessionStorage.saldo9);
    saldo10 = parseInt(sessionStorage.saldo10);
	document.getElementById("numberAsiento").innerHTML = "Asiento # "+ (numberAsientos+1);
    $('#registroAsiento select').empty().append(sessionStorage.optionsAsString);
    detailMayores = sessionStorage.detailMayores.split(',');
    drawAsientoApertura();
}

function appendAsientoApertura(fin){
    for (var i = 0; i < fin; i=i+4) {
        if (i===0) {
            stringAsientoApertura += "<tr><td colspan = '4' align ='center'>A-'"+numberAsientos+"'</td></tr>";
        }
        stringAsientoApertura += "<tr><td>'"+inputValuesAsientoApertura[i]+"'</td><td>'"+inputValuesAsientoApertura[i+1]+"'</td><td>'"+inputValuesAsientoApertura[i+2]+"'</td><td>'"+inputValuesAsientoApertura[i+3]+"'</td></tr>";
    }
    stringAsientoApertura += "<tr><td bgcolor='#D8D8D8' colspan = '4'>'"+inputValuesAsientoApertura[fin]+"'</td></tr>";
    
    stringAsientoApertura += "<tr bgcolor='#A9E2F3'><td colspan = '2'><b>Total:</b></td><td>'"+totalDebe+"'</td><td>'"+totalHaber+"'</td></tr>";
    //variables de session
    sessionStorage.setItem('stringAsientoApertura',stringAsientoApertura);
    sessionStorage.setItem('totalDebe',totalHaber);
    sessionStorage.setItem('totalHaber',totalHaber);
    //end
    drawAsientoApertura();
}

function drawAsientoApertura(){
    $('#asientoApertura tbody').empty().append(sessionStorage.stringAsientoApertura);
}

function registerAsiento(){
    inputValuesAsientoApertura = [];
    fechaAsiento = $('#dateAsiento').val();
    glosa = $('#glosa').val();
    amountAsiento = [];
    accountAsiento = [];
    indexAsiento = 0;
    j=0;
    $('#registroAsiento select').each(function() {
        if ($(this).val()!= "0"){
            accountAsiento.push($(this).val()); 
            indexAsiento++;
        }
    });
    indexAsiento *=2;
    $('#registroAsiento input').each(function() {
        if (indexAsiento != 0) {
            amountAsiento.push($(this).val()); 
            indexAsiento--;
        }
    });

    if(getTotalDebeYhaber(amountAsiento)){
        if (fechaAsiento!= "") {
            if (glosa != "") {
                for (var i = 0; i < amountAsiento.length-1; i=i+2) {
                    inputValuesAsientoApertura.push(fechaAsiento);
                    inputValuesAsientoApertura.push(accountAsiento[j]);
                    inputValuesAsientoApertura.push(amountAsiento[i]);
                    inputValuesAsientoApertura.push(amountAsiento[i+1]);
                    j++;
                }
                inputValuesAsientoApertura.push(glosa);
                setSpaceFromArray();
                numberAsientos++;
                sessionStorage.setItem('numberAsientos',numberAsientos);
                generateLibrosMayores(inputValuesAsientoApertura);
                bloque = posLastAsiento + inputValuesAsientoApertura.length;
                appendAsientoApertura(inputValuesAsientoApertura.length-1)
            }else{
                alert("Debe poner glosa al asiento");
                return;
            }
        }else{
            alert("Debe poner fecha de inicio a al asiento");
            return;
        }
    }else{
        return;
    }
    document.getElementById("numberAsiento").innerHTML = "Asiento # "+ (numberAsientos+1);
    $('#dateAsiento').val("");
    $('#glosa').val("");
    document.getElementById("totalDebeR").innerHTML = "";
    document.getElementById("totalHaberR").innerHTML = "";
    $('#registroAsiento input').each(function() {
        $(this).val("");
    });
    $('#registroAsiento select').each(function() {
       $(this).val("0");
    });
}

function getTotalDebeYhaber(debeHaber){
    totalDebeR = 0;
    totalHaberR = 0;
    for (var i = 0; i < debeHaber.length-1; i=i+2) {
        var value = debeHaber[i];
        if(value != ""){
            totalDebeR += parseInt(debeHaber[i]);    
        }else{
            i++;
            totalHaberR += parseInt(debeHaber[i]);
            i--;   
        }
    }
    document.getElementById("totalDebeR").innerHTML = totalDebeR;
    document.getElementById("totalHaberR").innerHTML = totalHaberR;
    if(totalDebeR===totalHaberR){
        totalHaber+=totalHaberR;
        totalDebe+=totalDebeR;
        return true;
    }else{
        alert("Total Debe y Haber del registro deben ser iguales");
        return false;
    }
}

function setSpaceFromArray(){
    for (var i = 0; i < inputValuesAsientoApertura.length; i++) {
        if (inputValuesAsientoApertura[i] === '') {
            inputValuesAsientoApertura[i] = 0;
        }
    }
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
            case 4:
                libro4.push(values[r]);
                libro4.push(detalle);
                libro4.push(values[r+2]);
                libro4.push(values[r+3]);
                calculateSaldo(4,values[r+2],values[r+3]);
                libro4.push(saldo4);
            break;
            case 5:
                libro5.push(values[r]);
                libro5.push(detalle);
                libro5.push(values[r+2]);
                libro5.push(values[r+3]);
                calculateSaldo(5,values[r+2],values[r+3]);
                libro5.push(saldo5);
            break;
            case 6:
                libro6.push(values[r]);
                libro6.push(detalle);
                libro6.push(values[r+2]);
                libro6.push(values[r+3]);
                calculateSaldo(6,values[r+2],values[r+3]);
                libro6.push(saldo6);
            break;
            case 7:
                libro7.push(values[r]);
                libro7.push(detalle);
                libro7.push(values[r+2]);
                libro7.push(values[r+3]);
                calculateSaldo(7,values[r+2],values[r+3]);
                libro7.push(saldo7);
            break;
            case 8:
                libro8.push(values[r]);
                libro8.push(detalle);
                libro8.push(values[r+2]);
                libro8.push(values[r+3]);
                calculateSaldo(8,values[r+2],values[r+3]);
                libro8.push(saldo8);
            break;
            case 9:
                libro9.push(values[r]);
                libro9.push(detalle);
                libro9.push(values[r+2]);
                libro9.push(values[r+3]);
                calculateSaldo(9,values[r+2],values[r+3]);
                libro9.push(saldo9);
            break;
            case 10:
                libro10.push(values[r]);
                libro10.push(detalle);
                libro10.push(values[r+2]);
                libro10.push(values[r+3]);
                calculateSaldo(10,values[r+2],values[r+3]);
                libro10.push(saldo10);
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
    }
 }