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
var libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8, libro9, libro10, libro11, libro12, libro13, libro14, libro15, libro16, libro17, libro18, libro19, libro20, libro21, libro22, libro23, libro24, libro25, libro26, libro27, libro28, libro29, libro30, libro31, libro32, libro33, libro34, libro35, libro36, libro37, libro38, libro39, libro40;
var saldo1, saldo2, saldo3, saldo4, saldo5, saldo6, saldo7, saldo8, saldo9, saldo10, saldo11, saldo12, saldo13, saldo14, saldo15, saldo16, saldo17, saldo18, saldo19, saldo20, saldo21, saldo22, saldo23, saldo24, saldo25, saldo26, saldo27, saldo28, saldo29, saldo30, saldo31, saldo32, saldo33, saldo34, saldo35, saldo36, saldo37, saldo38, saldo39, saldo40;
var detailMayores;
var stringAsientoApertura;
var fechaBalance;
var lastDate;
var preloadActivo;
var preloadPasivo;
window.onload = cargarCuentas;

function cargarCuentas(){
    detailMayores = localStorage.detailMayores.split(',');
    //cargar balance de apertura
     totalActivo = 0;        
     totalPasivoPatrimonio = 0;     
     preloadActivo = [];        
     preloadPasivo = [];        
     activo = false;        
     pasivo = false;        
     if (localStorage.inputValuesBalanceAperturaActivo != undefined) {      
         preloadActivo = localStorage.inputValuesBalanceAperturaActivo.split(',');      
         activo = true;     
     }      
     if (localStorage.inputValuesBalanceAperturaPasivo != undefined) {      
         preloadPasivo = localStorage.inputValuesBalanceAperturaPasivo.split(',');      
         pasivo = true;     
     }      
     stringActivo = "";     
     stringPasivo = "";     
     if (activo) {      
         for (var i = 0; i < preloadActivo.length; i=i+2) {     
             stringActivo += "<tr><td><input type='text'/ style = 'width:196px;height:18px;' value ='"+preloadActivo[i]+"'></td><td><input type='text' value ='"+preloadActivo[i+1]+"'></td></tr>";     
             totalActivo += parseInt(preloadActivo[i+1]);       
         }      
     }      
     if (pasivo) {      
         for (var i = 0; i < preloadPasivo.length; i=i+2) {     
             stringPasivo += "<tr><td><input type='text'/ style = 'width:196px;height:18px;' value ='"+preloadPasivo[i]+"'></td><td><input type='text' value ='"+preloadPasivo[i+1]+"'></td></tr>";     
             totalPasivoPatrimonio += parseInt(preloadPasivo[i+1]);     
         }      
     }      
     $('#dateBalance').val(localStorage.fechaBalance.split("-").reverse().join("-"));       
     $('#balanceAperturaActivo tbody').append(stringActivo);        
     $('#balanceAperturaPasivo tbody').append(stringPasivo);        
     document.getElementById("totalActivo").innerHTML = totalActivo;        
     document.getElementById("totalPasivoPatrimonio").innerHTML = totalPasivoPatrimonio;
     //end
}

function addTransaccionActivo(){
    stringTransaccionActivo = "<tr>"+
                "<td><select style = 'width:200px;height:24px;'></select></td>"+
                "<td><input type='text'/></td>"+
                "</tr>";
    $('#balanceAperturaActivo tbody').append(stringTransaccionActivo);
    $("#balanceAperturaActivo select").empty().append(localStorage.optionsAsString);             
}

function addTransaccionPasivo(){
    stringTransaccionPasivo = "<tr>"+
                "<td><select style = 'width:200px;height:24px;'></select></td>"+
                "<td><input type='text'/></td>"+
                "</tr>";
    $('#balanceAperturaPasivo tbody').append(stringTransaccionPasivo);
    $("#balanceAperturaPasivo select").empty().append(localStorage.optionsAsString);
}

function getAllValuesBalanceApertura() {
    libro1 = [], libro2 = [], libro3 = [], libro4 = [], libro5 = [], libro6 = [],libro7 = [], libro8 = [], libro9 = [], libro10 = [], libro11 = [], libro12 = [], libro13 = [], libro14 = [], libro15 = [], libro16 = [], libro17 = [], libro18 = [], libro19 = [], libro20 = [], libro21 = [],libro22 = [], libro23 = [], libro24 = [], libro25 = [], libro26 = [], libro27 = [], libro28 = [], libro29 = [], libro30 = [], libro31 = [], libro32 = [],libro33 = [], libro34 = [], libro35 = [], libro36 = [], libro37 = [], libro38 = [], libro39 = [], libro40 = [];
    saldo1 = 0, saldo2 = 0, saldo3 = 0, saldo4 = 0, saldo5 = 0, saldo6 = 0, saldo7 = 0, saldo8 = 0, saldo9 = 0, saldo10 = 0, saldo11 = 0, saldo12 = 0, saldo13 = 0, saldo14 = 0, saldo15 = 0, saldo16 = 0, saldo17 = 0, saldo18 = 0, saldo19 = 0, saldo20 = 0, saldo21 = 0, saldo22 = 0, saldo23 = 0, saldo24 = 0, saldo25 = 0, saldo26 = 0, saldo27 = 0, saldo28 = 0, saldo29 = 0, saldo30 = 0, saldo31 = 0, saldo32 = 0, saldo33 = 0, saldo34 = 0, saldo35 = 0, saldo36 = 0, saldo37 = 0, saldo38 = 0, saldo39 = 0, saldo40 = 0;
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
    localStorage.setItem('fechaBalance',fechaBalance);
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
        stringCapital = "<tr><td><input type='text'/ style = 'width:196px;height:18px;' value = 'capital'></td><td><input type='text' value ='"+capital+"'></td></tr>";
        $('#balanceAperturaPasivo tbody').append(stringCapital);
        document.getElementById("totalPasivoPatrimonio").innerHTML = totalPasivoPatrimonio;
    }else{
        jAlert('Ingrese la fecha de incio de actividades', 'Registro incorrecto');
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
    }
    totalPasivoPatrimonio += capital;
    inputValuesBalanceAperturaPasivo.push("capital");
    inputValuesBalanceAperturaPasivo.push(capital);
    //variables de sesion
    localStorage.setItem('inputValuesBalanceAperturaActivo',inputValuesBalanceAperturaActivo);
    localStorage.setItem('inputValuesBalanceAperturaPasivo',inputValuesBalanceAperturaPasivo);
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
    localStorage.setItem('inputValuesAsientoApertura',inputValuesAsientoApertura);
    localStorage.setItem('numberAsientos',numberAsientos);
    localStorage.setItem('totalDebe',totalHaber);
    localStorage.setItem('totalHaber',totalHaber);
    localStorage.setItem('lastDate',lastDate);
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
    localStorage.setItem('stringAsientoApertura',stringAsientoApertura);
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
                libro15.push(fechaBalance);
                libro15.push(detalle);
                libro15.push(values[r+1]);
                libro15.push(values[r+2]);
                calculateSaldo(15,values[r+1],values[r+2]);
                libro15.push(saldo15);
            break;
            case 16:
                libro16.push(fechaBalance);
                libro16.push(detalle);
                libro16.push(values[r+1]);
                libro16.push(values[r+2]);
                calculateSaldo(16,values[r+1],values[r+2]);
                libro16.push(saldo16);
            break;
            case 17:
                libro17.push(fechaBalance);
                libro17.push(detalle);
                libro17.push(values[r+1]);
                libro17.push(values[r+2]);
                calculateSaldo(17,values[r+1],values[r+2]);
                libro17.push(saldo17);
            break;
            case 18:
                libro18.push(fechaBalance);
                libro18.push(detalle);
                libro18.push(values[r+1]);
                libro18.push(values[r+2]);
                calculateSaldo(18,values[r+1],values[r+2]);
                libro18.push(saldo18);
            break;
            case 19:
                libro19.push(fechaBalance);
                libro19.push(detalle);
                libro19.push(values[r+1]);
                libro19.push(values[r+2]);
                calculateSaldo(19,values[r+1],values[r+2]);
                libro19.push(saldo19);
            break;
            case 20:
                libro20.push(fechaBalance);
                libro20.push(detalle);
                libro20.push(values[r+1]);
                libro20.push(values[r+2]);
                calculateSaldo(20,values[r+1],values[r+2]);
                libro20.push(saldo20);
            break;
            case 21:
                libro21.push(fechaBalance);
                libro21.push(detalle);
                libro21.push(values[r+1]);
                libro21.push(values[r+2]);
                calculateSaldo(21,values[r+1],values[r+2]);
                libro21.push(saldo21);
            break;
            case 22:
                libro22.push(fechaBalance);
                libro22.push(detalle);
                libro22.push(values[r+1]);
                libro22.push(values[r+2]);
                calculateSaldo(22,values[r+1],values[r+2]);
                libro22.push(saldo22);
            break;
            case 23:
                libro23.push(fechaBalance);
                libro23.push(detalle);
                libro23.push(values[r+1]);
                libro23.push(values[r+2]);
                calculateSaldo(23,values[r+1],values[r+2]);
                libro23.push(saldo23);
            break;
            case 24:
                libro24.push(fechaBalance);
                libro24.push(detalle);
                libro24.push(values[r+1]);
                libro24.push(values[r+2]);
                calculateSaldo(24,values[r+1],values[r+2]);
                libro24.push(saldo24);
            break;
            case 25:
                libro25.push(fechaBalance);
                libro25.push(detalle);
                libro25.push(values[r+1]);
                libro25.push(values[r+2]);
                calculateSaldo(25,values[r+1],values[r+2]);
                libro25.push(saldo25);
            break;
            case 26:
                libro26.push(fechaBalance);
                libro26.push(detalle);
                libro26.push(values[r+1]);
                libro26.push(values[r+2]);
                calculateSaldo(26,values[r+1],values[r+2]);
                libro26.push(saldo26);
            break;
            case 27:
                libro27.push(fechaBalance);
                libro27.push(detalle);
                libro27.push(values[r+1]);
                libro27.push(values[r+2]);
                calculateSaldo(27,values[r+1],values[r+2]);
                libro27.push(saldo27);
            break;
            case 28:
                libro28.push(fechaBalance);
                libro28.push(detalle);
                libro28.push(values[r+1]);
                libro28.push(values[r+2]);
                calculateSaldo(28,values[r+1],values[r+2]);
                libro28.push(saldo28);
             break;
            case 29:
                libro29.push(fechaBalance);
                libro29.push(detalle);
                libro29.push(values[r+1]);
                libro29.push(values[r+2]);
                calculateSaldo(29,values[r+1],values[r+2]);
                libro29.push(saldo29);
            break;
            case 30:
                libro30.push(fechaBalance);
                libro30.push(detalle);
                libro30.push(values[r+1]);
                libro30.push(values[r+2]);
                calculateSaldo(30,values[r+1],values[r+2]);
                libro30.push(saldo30);
            break;
            case 31:
                libro31.push(fechaBalance);
                libro31.push(detalle);
                libro31.push(values[r+1]);
                libro31.push(values[r+2]);
                calculateSaldo(31,values[r+1],values[r+2]);
                libro31.push(saldo31);
            break;
            case 32:
                libro32.push(fechaBalance);
                libro32.push(detalle);
                libro32.push(values[r+1]);
                libro32.push(values[r+2]);
                calculateSaldo(32,values[r+1],values[r+2]);
                libro32.push(saldo32);
            break;
            case 33:
                libro33.push(fechaBalance);
                libro33.push(detalle);
                libro33.push(values[r+1]);
                libro33.push(values[r+2]);
                calculateSaldo(33,values[r+1],values[r+2]);
                libro33.push(saldo33);
            break;
            case 34:
                libro34.push(fechaBalance);
                libro34.push(detalle);
                libro34.push(values[r+1]);
                libro34.push(values[r+2]);
                calculateSaldo(34,values[r+1],values[r+2]);
                libro34.push(saldo34);
            break;
            case 35:
                libro35.push(fechaBalance);
                libro35.push(detalle);
                libro35.push(values[r+1]);
                libro35.push(values[r+2]);
                calculateSaldo(35,values[r+1],values[r+2]);
                libro35.push(saldo35);
            break;
            case 36:
                libro36.push(fechaBalance);
                libro36.push(detalle);
                libro36.push(values[r+1]);
                libro36.push(values[r+2]);
                calculateSaldo(36,values[r+1],values[r+2]);
                libro36.push(saldo36);
            break;
            case 37:
                libro37.push(fechaBalance);
                libro37.push(detalle);
                libro37.push(values[r+1]);
                libro37.push(values[r+2]);
                calculateSaldo(37,values[r+1],values[r+2]);
                libro37.push(saldo37);
            break;
            case 38:
                libro38.push(fechaBalance);
                libro38.push(detalle);
                libro38.push(values[r+1]);
                libro38.push(values[r+2]);
                calculateSaldo(38,values[r+1],values[r+2]);
                libro38.push(saldo38);
             break;
            case 39:
                libro39.push(fechaBalance);
                libro39.push(detalle);
                libro39.push(values[r+1]);
                libro39.push(values[r+2]);
                calculateSaldo(39,values[r+1],values[r+2]);
                libro39.push(saldo39);
            break;
            case 40:
                libro40.push(fechaBalance);
                libro40.push(detalle);
                libro40.push(values[r+1]);
                libro40.push(values[r+2]);
                calculateSaldo(40,values[r+1],values[r+2]);
                libro40.push(saldo40);
            break;
        }
    }
    //variables de sesion
    localStorage.setItem('libro1',libro1);
    localStorage.setItem('saldo1',saldo1);
    localStorage.setItem('libro2',libro2);
    localStorage.setItem('saldo2',saldo2);
    localStorage.setItem('libro3',libro3);
    localStorage.setItem('saldo3',saldo3);
    localStorage.setItem('libro4',libro4);
    localStorage.setItem('saldo4',saldo4);
    localStorage.setItem('libro5',libro5);
    localStorage.setItem('saldo5',saldo5);
    localStorage.setItem('libro6',libro6);
    localStorage.setItem('saldo6',saldo6);
    localStorage.setItem('libro7',libro7);
    localStorage.setItem('saldo7',saldo7);
    localStorage.setItem('libro8',libro8);
    localStorage.setItem('saldo8',saldo8);
    localStorage.setItem('libro9',libro9);
    localStorage.setItem('saldo9',saldo9);
    localStorage.setItem('libro10',libro10);
    localStorage.setItem('saldo10',saldo10);
    localStorage.setItem('libro11',libro11);
    localStorage.setItem('saldo11',saldo11);
    localStorage.setItem('libro12',libro12);
    localStorage.setItem('saldo12',saldo12);
    localStorage.setItem('libro13',libro13);
    localStorage.setItem('saldo13',saldo13);
    localStorage.setItem('libro14',libro14);
    localStorage.setItem('saldo14',saldo14);
    localStorage.setItem('libro15',libro15);
    localStorage.setItem('saldo15',saldo15);
    localStorage.setItem('libro16',libro16);
    localStorage.setItem('saldo16',saldo16);
    localStorage.setItem('libro17',libro17);
    localStorage.setItem('saldo17',saldo17);
    localStorage.setItem('libro18',libro18);
    localStorage.setItem('saldo18',saldo18);
    localStorage.setItem('libro19',libro19);
    localStorage.setItem('saldo19',saldo19);
    localStorage.setItem('libro20',libro20);
    localStorage.setItem('saldo20',saldo20);
    localStorage.setItem('libro21',libro21);
    localStorage.setItem('saldo21',saldo21);
    localStorage.setItem('libro22',libro22);
    localStorage.setItem('saldo22',saldo22);
    localStorage.setItem('libro23',libro23);
    localStorage.setItem('saldo23',saldo23);
    localStorage.setItem('libro24',libro24);
    localStorage.setItem('saldo24',saldo24);
    localStorage.setItem('libro25',libro25);
    localStorage.setItem('saldo25',saldo25);
    localStorage.setItem('libro26',libro26);
    localStorage.setItem('saldo26',saldo26);
    localStorage.setItem('libro27',libro27);
    localStorage.setItem('saldo27',saldo27);
    localStorage.setItem('libro28',libro28);
    localStorage.setItem('saldo28',saldo28);
    localStorage.setItem('libro29',libro29);
    localStorage.setItem('saldo29',saldo29);
    localStorage.setItem('libro30',libro30);
    localStorage.setItem('saldo30',saldo30);
    localStorage.setItem('libro31',libro31);
    localStorage.setItem('saldo31',saldo31);
    localStorage.setItem('libro32',libro32);
    localStorage.setItem('saldo32',saldo32);
    localStorage.setItem('libro33',libro33);
    localStorage.setItem('saldo33',saldo33);
    localStorage.setItem('libro34',libro34);
    localStorage.setItem('saldo34',saldo34);
    localStorage.setItem('libro35',libro35);
    localStorage.setItem('saldo35',saldo35);
    localStorage.setItem('libro36',libro36);
    localStorage.setItem('saldo36',saldo36);
    localStorage.setItem('libro37',libro37);
    localStorage.setItem('saldo37',saldo37);
    localStorage.setItem('libro38',libro38);
    localStorage.setItem('saldo38',saldo38);
    localStorage.setItem('libro39',libro39);
    localStorage.setItem('saldo39',saldo39);
    localStorage.setItem('libro40',libro40);
    localStorage.setItem('saldo40',saldo40);
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