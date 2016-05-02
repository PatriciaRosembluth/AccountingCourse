var inputValuesAsientoApertura;
var numberAsientos;
var posLastAsiento;
var glosaAsiento;
var totalDebe;
var totalHaber;
var detailMayores;
var libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8, libro9, libro10, libro11, libro12, libro13, libro14, libro15, libro16, libro17, libro18, libro19, libro20, libro21, libro22, libro23, libro24, libro25, libro26, libro27, libro28, libro29, libro30, libro31, libro32, libro33, libro34, libro35, libro36, libro37, libro38, libro39, libro40;
var saldo1, saldo2, saldo3, saldo4, saldo5, saldo6, saldo7, saldo8, saldo9, saldo10, saldo11, saldo12, saldo13, saldo14, saldo15, saldo16, saldo17, saldo18, saldo19, saldo20, saldo21, saldo22, saldo23, saldo24, saldo25, saldo26, saldo27, saldo28, saldo29, saldo30, saldo31, saldo32, saldo33, saldo34, saldo35, saldo36, saldo37, saldo38, saldo39, saldo40;
var stringAsientoApertura;
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
    libro16 = sessionStorage.libro16.split(',');
    if (libro16.length === 1) {libro16 = [];}
    libro17 = sessionStorage.libro17.split(',');
    if (libro17.length === 1) {libro17 = [];}
    libro18 = sessionStorage.libro18.split(',');
    if (libro18.length === 1) {libro18 = [];}
    libro19 = sessionStorage.libro19.split(',');
    if (libro19.length === 1) {libro19 = [];}
    libro20 = sessionStorage.libro20.split(',');
    if (libro20.length === 1) {libro20 = [];}
    libro21 = sessionStorage.libro21.split(',');
    if (libro21.length === 1) {libro21 = [];}
    libro22 = sessionStorage.libro22.split(',');
    if (libro22.length === 1) {libro22 = [];}
    libro23 = sessionStorage.libro23.split(',');
    if (libro23.length === 1) {libro23 = [];}
    libro24 = sessionStorage.libro24.split(',');
    if (libro24.length === 1) {libro24 = [];}
    libro25 = sessionStorage.libro25.split(',');
    if (libro25.length === 1) {libro25 = [];}
    libro26 = sessionStorage.libro26.split(',');
    if (libro26.length === 1) {libro26 = [];}
    libro27 = sessionStorage.libro27.split(',');
    if (libro27.length === 1) {libro27 = [];}
    libro28 = sessionStorage.libro28.split(',');
    if (libro28.length === 1) {libro28 = [];}
    libro29 = sessionStorage.libro29.split(',');
    if (libro29.length === 1) {libro29 = [];}
    libro30 = sessionStorage.libro30.split(',');
    if (libro30.length === 1) {libro30 = [];}
    libro31 = sessionStorage.libro31.split(',');
    if (libro31.length === 1) {libro31 = [];}
    libro32 = sessionStorage.libro32.split(',');
    if (libro32.length === 1) {libro32 = [];}
    libro33 = sessionStorage.libro33.split(',');
    if (libro33.length === 1) {libro33 = [];}
    libro34 = sessionStorage.libro34.split(',');
    if (libro34.length === 1) {libro34 = [];}
    libro35 = sessionStorage.libro35.split(',');
    if (libro35.length === 1) {libro35 = [];}
    libro36 = sessionStorage.libro36.split(',');
    if (libro36.length === 1) {libro36 = [];}
    libro37 = sessionStorage.libro37.split(',');
    if (libro37.length === 1) {libro37 = [];}
    libro38 = sessionStorage.libro38.split(',');
    if (libro38.length === 1) {libro38 = [];}
    libro39 = sessionStorage.libro39.split(',');
    if (libro39.length === 1) {libro39 = [];}
    libro40 = sessionStorage.libro40.split(',');
    if (libro40.length === 1) {libro40 = [];}

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
    saldo11 = parseInt(sessionStorage.saldo11);
    saldo12 = parseInt(sessionStorage.saldo12);
    saldo13 = parseInt(sessionStorage.saldo13);
    saldo14 = parseInt(sessionStorage.saldo14);
    saldo15 = parseInt(sessionStorage.saldo15);
    saldo16 = parseInt(sessionStorage.saldo16);
    saldo17 = parseInt(sessionStorage.saldo17);
    saldo18 = parseInt(sessionStorage.saldo18);
    saldo19 = parseInt(sessionStorage.saldo19);
    saldo20 = parseInt(sessionStorage.saldo20);
    saldo21 = parseInt(sessionStorage.saldo21);
    saldo22 = parseInt(sessionStorage.saldo22);
    saldo23 = parseInt(sessionStorage.saldo23);
    saldo24 = parseInt(sessionStorage.saldo24);
    saldo25 = parseInt(sessionStorage.saldo25);
    saldo26 = parseInt(sessionStorage.saldo26);
    saldo27 = parseInt(sessionStorage.saldo27);
    saldo28 = parseInt(sessionStorage.saldo28);
    saldo29 = parseInt(sessionStorage.saldo29);
    saldo30 = parseInt(sessionStorage.saldo30);
    saldo31 = parseInt(sessionStorage.saldo31);
    saldo32 = parseInt(sessionStorage.saldo32);
    saldo33 = parseInt(sessionStorage.saldo33);
    saldo34 = parseInt(sessionStorage.saldo34);
    saldo35 = parseInt(sessionStorage.saldo35);
    saldo36 = parseInt(sessionStorage.saldo36);
    saldo37 = parseInt(sessionStorage.saldo37);
    saldo38 = parseInt(sessionStorage.saldo38);
    saldo39 = parseInt(sessionStorage.saldo39);
    saldo40 = parseInt(sessionStorage.saldo40);

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
                libro15.push(fechaAsiento);
                libro15.push(detalle);
                libro15.push(values[r+1]);
                libro15.push(values[r+2]);
                calculateSaldo(15,values[r+1],values[r+2]);
                libro15.push(saldo15);
            break;
            case 16:
                libro16.push(fechaAsiento);
                libro16.push(detalle);
                libro16.push(values[r+1]);
                libro16.push(values[r+2]);
                calculateSaldo(16,values[r+1],values[r+2]);
                libro16.push(saldo16);
            break;
            case 17:
                libro17.push(fechaAsiento);
                libro17.push(detalle);
                libro17.push(values[r+1]);
                libro17.push(values[r+2]);
                calculateSaldo(17,values[r+1],values[r+2]);
                libro17.push(saldo17);
            break;
            case 18:
                libro18.push(fechaAsiento);
                libro18.push(detalle);
                libro18.push(values[r+1]);
                libro18.push(values[r+2]);
                calculateSaldo(18,values[r+1],values[r+2]);
                libro18.push(saldo18);
            break;
            case 19:
                libro19.push(fechaAsiento);
                libro19.push(detalle);
                libro19.push(values[r+1]);
                libro19.push(values[r+2]);
                calculateSaldo(19,values[r+1],values[r+2]);
                libro19.push(saldo19);
            break;
            case 20:
                libro20.push(fechaAsiento);
                libro20.push(detalle);
                libro20.push(values[r+1]);
                libro20.push(values[r+2]);
                calculateSaldo(20,values[r+1],values[r+2]);
                libro20.push(saldo20);
            break;
            case 21:
                libro21.push(fechaAsiento);
                libro21.push(detalle);
                libro21.push(values[r+1]);
                libro21.push(values[r+2]);
                calculateSaldo(21,values[r+1],values[r+2]);
                libro21.push(saldo21);
            break;
            case 22:
                libro22.push(fechaAsiento);
                libro22.push(detalle);
                libro22.push(values[r+1]);
                libro22.push(values[r+2]);
                calculateSaldo(22,values[r+1],values[r+2]);
                libro22.push(saldo22);
            break;
            case 23:
                libro23.push(fechaAsiento);
                libro23.push(detalle);
                libro23.push(values[r+1]);
                libro23.push(values[r+2]);
                calculateSaldo(23,values[r+1],values[r+2]);
                libro23.push(saldo23);
            break;
            case 24:
                libro24.push(fechaAsiento);
                libro24.push(detalle);
                libro24.push(values[r+1]);
                libro24.push(values[r+2]);
                calculateSaldo(24,values[r+1],values[r+2]);
                libro24.push(saldo24);
            break;
            case 25:
                libro25.push(fechaAsiento);
                libro25.push(detalle);
                libro25.push(values[r+1]);
                libro25.push(values[r+2]);
                calculateSaldo(25,values[r+1],values[r+2]);
                libro25.push(saldo25);
            break;
            case 26:
                libro26.push(fechaAsiento);
                libro26.push(detalle);
                libro26.push(values[r+1]);
                libro26.push(values[r+2]);
                calculateSaldo(26,values[r+1],values[r+2]);
                libro26.push(saldo26);
            break;
            case 27:
                libro27.push(fechaAsiento);
                libro27.push(detalle);
                libro27.push(values[r+1]);
                libro27.push(values[r+2]);
                calculateSaldo(27,values[r+1],values[r+2]);
                libro27.push(saldo27);
            break;
            case 28:
                libro28.push(fechaAsiento);
                libro28.push(detalle);
                libro28.push(values[r+1]);
                libro28.push(values[r+2]);
                calculateSaldo(28,values[r+1],values[r+2]);
                libro28.push(saldo28);
             break;
            case 29:
                libro29.push(fechaAsiento);
                libro29.push(detalle);
                libro29.push(values[r+1]);
                libro29.push(values[r+2]);
                calculateSaldo(29,values[r+1],values[r+2]);
                libro29.push(saldo29);
            break;
            case 30:
                libro30.push(fechaAsiento);
                libro30.push(detalle);
                libro30.push(values[r+1]);
                libro30.push(values[r+2]);
                calculateSaldo(30,values[r+1],values[r+2]);
                libro30.push(saldo30);
            break;
            case 31:
                libro31.push(fechaAsiento);
                libro31.push(detalle);
                libro31.push(values[r+1]);
                libro31.push(values[r+2]);
                calculateSaldo(31,values[r+1],values[r+2]);
                libro31.push(saldo31);
            break;
            case 32:
                libro32.push(fechaAsiento);
                libro32.push(detalle);
                libro32.push(values[r+1]);
                libro32.push(values[r+2]);
                calculateSaldo(32,values[r+1],values[r+2]);
                libro32.push(saldo32);
            break;
            case 33:
                libro33.push(fechaAsiento);
                libro33.push(detalle);
                libro33.push(values[r+1]);
                libro33.push(values[r+2]);
                calculateSaldo(33,values[r+1],values[r+2]);
                libro33.push(saldo33);
            break;
            case 34:
                libro34.push(fechaAsiento);
                libro34.push(detalle);
                libro34.push(values[r+1]);
                libro34.push(values[r+2]);
                calculateSaldo(34,values[r+1],values[r+2]);
                libro34.push(saldo34);
            break;
            case 35:
                libro35.push(fechaAsiento);
                libro35.push(detalle);
                libro35.push(values[r+1]);
                libro35.push(values[r+2]);
                calculateSaldo(35,values[r+1],values[r+2]);
                libro35.push(saldo35);
            break;
            case 36:
                libro36.push(fechaAsiento);
                libro36.push(detalle);
                libro36.push(values[r+1]);
                libro36.push(values[r+2]);
                calculateSaldo(36,values[r+1],values[r+2]);
                libro36.push(saldo36);
            break;
            case 37:
                libro37.push(fechaAsiento);
                libro37.push(detalle);
                libro37.push(values[r+1]);
                libro37.push(values[r+2]);
                calculateSaldo(37,values[r+1],values[r+2]);
                libro37.push(saldo37);
            break;
            case 38:
                libro38.push(fechaAsiento);
                libro38.push(detalle);
                libro38.push(values[r+1]);
                libro38.push(values[r+2]);
                calculateSaldo(38,values[r+1],values[r+2]);
                libro38.push(saldo38);
             break;
            case 39:
                libro39.push(fechaAsiento);
                libro39.push(detalle);
                libro39.push(values[r+1]);
                libro39.push(values[r+2]);
                calculateSaldo(39,values[r+1],values[r+2]);
                libro39.push(saldo39);
            break;
            case 40:
                libro40.push(fechaAsiento);
                libro40.push(detalle);
                libro40.push(values[r+1]);
                libro40.push(values[r+2]);
                calculateSaldo(40,values[r+1],values[r+2]);
                libro40.push(saldo40);
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
    sessionStorage.setItem('libro16',libro16);
    sessionStorage.setItem('saldo16',saldo16);
    sessionStorage.setItem('libro17',libro17);
    sessionStorage.setItem('saldo17',saldo17);
    sessionStorage.setItem('libro18',libro18);
    sessionStorage.setItem('saldo18',saldo18);
    sessionStorage.setItem('libro19',libro19);
    sessionStorage.setItem('saldo19',saldo19);
    sessionStorage.setItem('libro20',libro20);
    sessionStorage.setItem('saldo20',saldo20);
    sessionStorage.setItem('libro21',libro21);
    sessionStorage.setItem('saldo21',saldo21);
    sessionStorage.setItem('libro22',libro22);
    sessionStorage.setItem('saldo22',saldo22);
    sessionStorage.setItem('libro23',libro23);
    sessionStorage.setItem('saldo23',saldo23);
    sessionStorage.setItem('libro24',libro24);
    sessionStorage.setItem('saldo24',saldo24);
    sessionStorage.setItem('libro25',libro25);
    sessionStorage.setItem('saldo25',saldo25);
    sessionStorage.setItem('libro26',libro26);
    sessionStorage.setItem('saldo26',saldo26);
    sessionStorage.setItem('libro27',libro27);
    sessionStorage.setItem('saldo27',saldo27);
    sessionStorage.setItem('libro28',libro28);
    sessionStorage.setItem('saldo28',saldo28);
    sessionStorage.setItem('libro29',libro29);
    sessionStorage.setItem('saldo29',saldo29);
    sessionStorage.setItem('libro30',libro30);
    sessionStorage.setItem('libro31',libro31);
    sessionStorage.setItem('saldo31',saldo31);
    sessionStorage.setItem('libro32',libro32);
    sessionStorage.setItem('saldo32',saldo32);
    sessionStorage.setItem('libro33',libro33);
    sessionStorage.setItem('saldo33',saldo33);
    sessionStorage.setItem('libro34',libro34);
    sessionStorage.setItem('saldo34',saldo34);
    sessionStorage.setItem('libro35',libro35);
    sessionStorage.setItem('saldo35',saldo35);
    sessionStorage.setItem('libro36',libro36);
    sessionStorage.setItem('saldo36',saldo36);
    sessionStorage.setItem('libro37',libro37);
    sessionStorage.setItem('saldo37',saldo37);
    sessionStorage.setItem('libro38',libro38);
    sessionStorage.setItem('saldo38',saldo38);
    sessionStorage.setItem('libro39',libro39);
    sessionStorage.setItem('saldo39',saldo39);
    sessionStorage.setItem('libro40',libro40);
    sessionStorage.setItem('saldo40',saldo40);
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
        case 16:
            saldo16 = saldo16 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 17:
            saldo17 = saldo17 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 18:
            saldo18 = saldo18 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;    
        case 19:
            saldo19 = saldo19 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 20:
            saldo20 = saldo20 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 21:
            saldo21 = saldo21 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 22:
            saldo22 = saldo22 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 23:
            saldo23 = saldo23 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 24:
            saldo24 = saldo24 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 25:
            saldo25 = saldo25 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 26:
            saldo26 = saldo26 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 27:
            saldo27 = saldo27 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 28:
            saldo28 = saldo28 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 29:
            saldo29 = saldo29 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 30:
            saldo30 = saldo30 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 31:
            saldo31 = saldo31 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 32:
            saldo32 = saldo32 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 33:
            saldo33 = saldo33 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 34:
            saldo34 = saldo34 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 35:
            saldo35 = saldo35 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 36:
            saldo36 = saldo36 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 37:
            saldo37 = saldo37 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 38:
            saldo38 = saldo38 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 39:
            saldo39 = saldo39 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
        case 40:
            saldo40 = saldo40 + parseInt(AmountDebe) - parseInt(AmountHaber);
            break;
    }
 }