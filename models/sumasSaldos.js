var balanceSumasSaldos;
var libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8, libro9, libro10, libro11, libro12, libro13, libro14, libro15;
var saldo1, saldo2, saldo3, saldo4, saldo5, saldo6, saldo7, saldo8, saldo9, saldo10, saldo11, saldo12, saldo13, saldo14, saldo15;
var totalDebeSs;
var totalHaberSs;
var totalDeudorSs;
var totalAcreedorSs;
var detailMayores;
window.onload = cargarLibros;

function cargarLibros(){
    libro1 = sessionStorage.libro1.split(',');
    libro2 = sessionStorage.libro2.split(',');
    libro3 = sessionStorage.libro3.split(',');
    libro4 = sessionStorage.libro4.split(',');
    libro5 = sessionStorage.libro5.split(',');
    libro6 = sessionStorage.libro6.split(',');
    libro7 = sessionStorage.libro7.split(',');
    libro8 = sessionStorage.libro8.split(',');
    libro9 = sessionStorage.libro9.split(',');
    libro10 = sessionStorage.libro10.split(',');
    libro11 = sessionStorage.libro11.split(',');
    libro12 = sessionStorage.libro12.split(',');
    libro13 = sessionStorage.libro13.split(',');
    libro14 = sessionStorage.libro14.split(',');
    libro15 = sessionStorage.libro15.split(',');
    detailMayores = sessionStorage.detailMayores.split(',');
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
    calculateDebeHaberLibro(libro11,10);
    calculateDebeHaberLibro(libro12,11);
    calculateDebeHaberLibro(libro13,12);
    calculateDebeHaberLibro(libro14,13);
    calculateDebeHaberLibro(libro15,14);
    drawBalanceSumasSaldor();
}

function calculateDebeHaberLibro(libro,detalle){
    var totalD = 0 , totalH = 0;
    if (libro[0]===""){return}
    for (var i = 2; i <libro.length; i = i + 5) {
        totalD += parseInt(libro[i]);
        totalH += parseInt(libro[i+1]);
    }
    balanceSumasSaldos.push(detailMayores[detalle]);
    balanceSumasSaldos.push(totalD);
    balanceSumasSaldos.push(totalH);
    totalDebeSs += totalD;
    totalHaberSs += totalH;
    resultado = totalD - totalH;
    if (resultado >= 0) {
        balanceSumasSaldos.push(resultado);
        balanceSumasSaldos.push(0);
        totalDeudorSs += resultado;
         
    }else{
        resultado*=-1;
        balanceSumasSaldos.push(0);
        balanceSumasSaldos.push(resultado);
        totalAcreedorSs += resultado;
    }
}

function drawBalanceSumasSaldor(){
    stringSumasSaldos = "";
    //variables de sesion
    sessionStorage.setItem('balanceSumasSaldos',balanceSumasSaldos);
    sessionStorage.setItem('totalDeudorSs',totalDeudorSs);
    sessionStorage.setItem('totalAcreedorSs',totalAcreedorSs);
    //end
    for (var i = 0; i < balanceSumasSaldos.length; i=i+5) {
        stringSumasSaldos += "<tr><td>"+balanceSumasSaldos[i]+"</td><td>"+balanceSumasSaldos[i+1]+"</td><td>"+balanceSumasSaldos[i+2]+"</td><td>"+balanceSumasSaldos[i+3]+"</td><td>"+balanceSumasSaldos[i+4]+"</td></tr>";
    }
    stringSumasSaldos += "<tr bgcolor='#A9E2F3'><td><b>Total:</b></td><td>"+totalDebeSs+"</td><td>"+totalHaberSs+"</td><td>"+totalDeudorSs+"</td><td>"+totalAcreedorSs+"</td></tr>";
    $('#showSumasSaldos tbody').empty().append(stringSumasSaldos);
}