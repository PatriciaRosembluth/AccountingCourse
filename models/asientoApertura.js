var inputValuesAsientoApertura;
var numberAsientos;
var posLastAsiento;
var glosaAsiento;
var totalDebe;
var totalHaber;
var detailMayores;
var libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8, libro9, libro10, libro11, libro12, libro13, libro14, libro15;
var saldo1, saldo2, saldo3, saldo4, saldo5, saldo6, saldo7, saldo8, saldo9, saldo10, saldo11, saldo12, saldo13, saldo14, saldo15;
var stringAsientoApertura;
var fechaAsiento;
var lastDate;
window.onload = cargarCuentas;

function cargarCuentas(){
    lastDate = sessionStorage.lastDate.split('-');
    lastDate = new Date(lastDate[2], lastDate[1]-1, lastDate[0]);
	numberAsientos = parseInt(sessionStorage.numberAsientos);
    stringAsientoApertura = (sessionStorage.stringAsientoApertura);
	totalDebe = parseInt(sessionStorage.totalDebe);
	totalHaber = parseInt(sessionStorage.totalHaber);
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
    libro11 = sessionStorage.libro11.split(',');
    if (libro11.length === 1) {libro11 = [];}
    libro12 = sessionStorage.libro12.split(',');
    if (libro12.length === 1) {libro12 = [];}
    libro13 = sessionStorage.libro13.split(',');
    if (libro13.length === 1) {libro13 = [];}
    libro14 = sessionStorage.libro14.split(',');
    if (libro14.length === 1) {libro14 = [];}
    libro15 = sessionStorage.libro15.split(',');
    if (libro15.length === 1) {libro15 = [];}
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
    saldo11 = parseInt(sessionStorage.saldo10);
    saldo12 = parseInt(sessionStorage.saldo10);
    saldo13 = parseInt(sessionStorage.saldo10);
    saldo14 = parseInt(sessionStorage.saldo10);
    saldo15 = parseInt(sessionStorage.saldo10);
	document.getElementById("numberAsiento").innerHTML = "Asiento # "+ (numberAsientos+1);
    $('#registroAsiento select').empty().append(sessionStorage.optionsAsString);
    detailMayores = sessionStorage.detailMayores.split(',');
    drawAsientoApertura();
}

function appendAsientoApertura(fin){
    for (var i = 0; i < fin; i=i+3) {
        if (i===0) {
            stringAsientoApertura += "<tr><td colspan = '3' align ='center'>A-"+numberAsientos+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+fechaAsiento+"</td></tr>";
        }
        stringAsientoApertura += "<tr><td>"+inputValuesAsientoApertura[i]+"</td><td>"+inputValuesAsientoApertura[i+1]+"</td><td>"+inputValuesAsientoApertura[i+2]+"</td></tr>";
    }
    stringAsientoApertura += "<tr><td bgcolor='#D8D8D8' colspan = '3'>"+inputValuesAsientoApertura[fin]+"</td></tr>";
    
    stringAsientoApertura += "<tr bgcolor='#A9E2F3'><td><b>Total:</b></td><td>"+totalDebe+"</td><td>"+totalHaber+"</td></tr>";
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
    fechaAsiento = $('#dateAsiento').val().split("-").reverse().join("-");
    fechAux = fechaAsiento.split('-');
    fechAux = new Date(fechAux[2], fechAux[1]-1, fechAux[0]);
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
    
    if (fechaAsiento!= "") {
        if (lastDate<=fechAux) {
            if (glosa != "") {
                if(getTotalDebeYhaber(amountAsiento)){
                    for (var i = 0; i < amountAsiento.length-1; i=i+2) {
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
                    appendAsientoApertura(inputValuesAsientoApertura.length-1)
                    lastDate = fechAux;
                    sessionStorage.setItem('lastDate',fechaAsiento);
                }else{
                    alert("Total Debe y Haber del registro deben ser iguales"); 
                    return;
                }
            }else{
                alert("Debe poner glosa al asiento");
                return; 
            }
        }else{
            alert("Debe seleccionar una fecha posterior o igual a la del ultimo asiento");
            return;
        }
    }else{
        alert("Debe seleccionar una fecha para el asiento");
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
    for (var r = 0; r < values.length; r+=3) {
        var libro = findLibro(values[r]);
        switch (libro) {
            case 1:
                libro1.push(fechaAsiento);
                libro1.push(detalle);
                libro1.push(values[r+1]);
                libro1.push(values[r+2]);
                calculateSaldo(1,values[r+1],values[r+2]);
                libro1.push(saldo1);
            break;
            case 2:
                libro2.push(fechaAsiento);
                libro2.push(detalle);
                libro2.push(values[r+1]);
                libro2.push(values[r+2]);
                calculateSaldo(2,values[r+1],values[r+2]);
                libro2.push(saldo2);
            break;
            case 3:
                libro3.push(fechaAsiento);
                libro3.push(detalle);
                libro3.push(values[r+1]);
                libro3.push(values[r+2]);
                calculateSaldo(3,values[r+1],values[r+2]);
                libro3.push(saldo3);
            break;
            case 4:
                libro4.push(fechaAsiento);
                libro4.push(detalle);
                libro4.push(values[r+1]);
                libro4.push(values[r+2]);
                calculateSaldo(4,values[r+1],values[r+2]);
                libro4.push(saldo4);
            break;
            case 5:
                libro5.push(fechaAsiento);
                libro5.push(detalle);
                libro5.push(values[r+1]);
                libro5.push(values[r+2]);
                calculateSaldo(5,values[r+1],values[r+2]);
                libro5.push(saldo5);
            break;
            case 6:
                libro6.push(fechaAsiento);
                libro6.push(detalle);
                libro6.push(values[r+1]);
                libro6.push(values[r+2]);
                calculateSaldo(6,values[r+1],values[r+2]);
                libro6.push(saldo6);
            break;
            case 7:
                libro7.push(fechaAsiento);
                libro7.push(detalle);
                libro7.push(values[r+1]);
                libro7.push(values[r+2]);
                calculateSaldo(7,values[r+1],values[r+2]);
                libro7.push(saldo7);
            break;
            case 8:
                libro8.push(fechaAsiento);
                libro8.push(detalle);
                libro8.push(values[r+1]);
                libro8.push(values[r+2]);
                calculateSaldo(8,values[r+1],values[r+2]);
                libro8.push(saldo8);
            break;
            case 9:
                libro9.push(fechaAsiento);
                libro9.push(detalle);
                libro9.push(values[r+1]);
                libro9.push(values[r+2]);
                calculateSaldo(9,values[r+1],values[r+2]);
                libro9.push(saldo9);
            break;
            case 10:
                libro10.push(fechaAsiento);
                libro10.push(detalle);
                libro10.push(values[r+1]);
                libro10.push(values[r+2]);
                calculateSaldo(10,values[r+1],values[r+2]);
                libro10.push(saldo10);
             break;
            case 11:
                libro11.push(fechaAsiento);
                libro11.push(detalle);
                libro11.push(values[r+1]);
                libro11.push(values[r+2]);
                calculateSaldo(11,values[r+1],values[r+2]);
                libro11.push(saldo11);
             break;
            case 12:
                libro12.push(fechaAsiento);
                libro12.push(detalle);
                libro12.push(values[r+1]);
                libro12.push(values[r+2]);
                calculateSaldo(12,values[r+1],values[r+2]);
                libro12.push(saldo12);
             break;
            case 13:
                libro13.push(fechaAsiento);
                libro13.push(detalle);
                libro13.push(values[r+1]);
                libro13.push(values[r+2]);
                calculateSaldo(13,values[r+1],values[r+2]);
                libro13.push(saldo13);
             break;
            case 14:
                libro14.push(fechaAsiento);
                libro14.push(detalle);
                libro14.push(values[r+1]);
                libro14.push(values[r+2]);
                calculateSaldo(14,values[r+1],values[r+2]);
                libro14.push(saldo14);
             break;
            case 15:
                libro5.push(fechaAsiento);
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