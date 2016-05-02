var balanceSumasSaldos;
var libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8, libro9, libro10, libro11, libro12, libro13, libro14, libro15, libro16, libro17, libro18, libro19, libro20, libro21, libro22, libro23, libro24, libro25, libro26, libro27, libro28, libro29, libro30, libro31, libro32, libro33, libro34, libro35, libro36, libro37, libro38, libro39, libro40;
var saldo1, saldo2, saldo3, saldo4, saldo5, saldo6, saldo7, saldo8, saldo9, saldo10, saldo11, saldo12, saldo13, saldo14, saldo15, saldo16, saldo17, saldo18, saldo19, saldo20, saldo21, saldo22, saldo23, saldo24, saldo25, saldo26, saldo27, saldo28, saldo29, saldo30, saldo31, saldo32, saldo33, saldo34, saldo35, saldo36, saldo37, saldo38, saldo39, saldo40;
var totalDebeSs;
var totalHaberSs;
var totalDeudorSs;
var totalAcreedorSs;
var detailMayores;
window.onload = cargarLibros;

function cargarLibros(){
    detailMayores = sessionStorage.detailMayores.split(',');
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
    libro16 = sessionStorage.libro16.split(',');
    libro17 = sessionStorage.libro17.split(',');
    libro18 = sessionStorage.libro18.split(',');
    libro19 = sessionStorage.libro19.split(',');
    libro20 = sessionStorage.libro20.split(',');
    libro21 = sessionStorage.libro21.split(',');
    libro22 = sessionStorage.libro22.split(',');
    libro23 = sessionStorage.libro23.split(',');
    libro24 = sessionStorage.libro24.split(',');
    libro25 = sessionStorage.libro25.split(',');
    libro26 = sessionStorage.libro26.split(',');
    libro27 = sessionStorage.libro27.split(',');
    libro28 = sessionStorage.libro28.split(',');
    libro29 = sessionStorage.libro29.split(',');
    libro30 = sessionStorage.libro30.split(',');
    libro31 = sessionStorage.libro31.split(',');
    libro32 = sessionStorage.libro32.split(',');
    libro33 = sessionStorage.libro33.split(',');
    libro34 = sessionStorage.libro34.split(',');
    libro35 = sessionStorage.libro35.split(',');
    libro36 = sessionStorage.libro36.split(',');
    libro37 = sessionStorage.libro37.split(',');
    libro38 = sessionStorage.libro38.split(',');
    libro39 = sessionStorage.libro39.split(',');
    libro40 = sessionStorage.libro40.split(',');
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
    calculateDebeHaberLibro(libro16,15);
    calculateDebeHaberLibro(libro17,16);
    calculateDebeHaberLibro(libro18,17);
    calculateDebeHaberLibro(libro19,18);
    calculateDebeHaberLibro(libro20,19);
    calculateDebeHaberLibro(libro21,20);
    calculateDebeHaberLibro(libro22,21);
    calculateDebeHaberLibro(libro23,22);
    calculateDebeHaberLibro(libro24,23);
    calculateDebeHaberLibro(libro25,24);
    calculateDebeHaberLibro(libro26,25);
    calculateDebeHaberLibro(libro27,26);
    calculateDebeHaberLibro(libro28,27);
    calculateDebeHaberLibro(libro29,28);
    calculateDebeHaberLibro(libro30,29);
    calculateDebeHaberLibro(libro31,30);
    calculateDebeHaberLibro(libro32,31);
    calculateDebeHaberLibro(libro33,32);
    calculateDebeHaberLibro(libro34,33);
    calculateDebeHaberLibro(libro35,34);
    calculateDebeHaberLibro(libro36,35);
    calculateDebeHaberLibro(libro37,36);
    calculateDebeHaberLibro(libro38,37);
    calculateDebeHaberLibro(libro39,38);
    calculateDebeHaberLibro(libro40,39);
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