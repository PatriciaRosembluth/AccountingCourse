var balanceSumasSaldos;
var totalDeudorSs;
var totalAcreedorSs;
var hojaTrabajo;
var totalGastoHt;
var totalIngresoHt;
var totalActivoHt;
var totalCapitalHt;
var accounts;
var balanceGeneral;
window.onload = cargarSumasSaldos;

function cargarSumasSaldos(){
	balanceSumasSaldos = sessionStorage.balanceSumasSaldos.split(','); 
	accounts = sessionStorage.accounts.split(',');
	totalDeudorSs = parseInt(sessionStorage.totalDeudorSs);
	totalAcreedorSs = parseInt(sessionStorage.totalAcreedorSs);
}

function generateHojaTrabajo(){
    hojaTrabajo = [];
    balanceGeneral = [];
    totalGastoHt = 0, totalIngresoHt = 0, totalActivoHt = 0, totalCapitalHt = 0;
    var j = 1;
    var valor;
    for (var i = 0; i < balanceSumasSaldos.length-1; i=i+5) {
        hojaTrabajo.push(balanceSumasSaldos[i]);
        hojaTrabajo.push(balanceSumasSaldos[i+3]);
        hojaTrabajo.push(balanceSumasSaldos[i+4]);
        if (balanceSumasSaldos[i+3] != 0) {valor = parseInt(balanceSumasSaldos[i+3]);}else{valor = parseInt(balanceSumasSaldos[i+4]);}
        if (getTypeAccount(balanceSumasSaldos[i]) === "A") {hojaTrabajo.push(0,0,valor,0); totalActivoHt+=valor; balanceGeneral.push(balanceSumasSaldos[i],valor);}
        if (getTypeAccount(balanceSumasSaldos[i]) === "P" || getTypeAccount(balanceSumasSaldos[i]) === "C") {hojaTrabajo.push(0,0,0,valor); totalCapitalHt+=valor; balanceGeneral.push(balanceSumasSaldos[i],valor)}
        if (getTypeAccount(balanceSumasSaldos[i]) === "G") {hojaTrabajo.push(valor,0,0,0); totalGastoHt+=valor;}
        if (getTypeAccount(balanceSumasSaldos[i]) === "I") {hojaTrabajo.push(0,valor,0,0);totalIngresoHt+=valor;}
        j=j+2;
    }
    drawHojaTrabajo();
}

function getTypeAccount(account){
    for (var i = 0; i < accounts.length; i++) {
        if (account === accounts[i]) {
            return accounts[i+1];
        }
    }
}

function drawHojaTrabajo(){
     $('#uGastos').val("");
     $('#uIngresos').val("");
     $('#uActivo').val("");
     $('#uPasivo').val("");
    for (var i = 0; i < hojaTrabajo.length; i++) {
        document.getElementById("hoja-"+ i).innerHTML = hojaTrabajo[i];
    }
    document.getElementById("totalDeudorHt").innerHTML = totalDeudorSs;
    document.getElementById("totalAcreedorHt").innerHTML = totalAcreedorSs;
    document.getElementById("totalGastoHt").innerHTML = totalGastoHt;
    document.getElementById("totalIngresoHt").innerHTML = totalIngresoHt;
    document.getElementById("totalActivoHt").innerHTML = totalActivoHt;
    document.getElementById("totalCapitalHt").innerHTML = totalCapitalHt;
    utilidadNeta = totalIngresoHt - totalGastoHt;
    balanceGeneral.push("utilidad neta",utilidadNeta);
    if (utilidadNeta >= 0) {
        document.getElementById("uGastos").innerHTML = utilidadNeta;
        document.getElementById("uPasivo").innerHTML = utilidadNeta;
        document.getElementById("totalGastosTs").innerHTML = totalGastoHt + utilidadNeta;
        document.getElementById("totalIngresosTs").innerHTML = totalIngresoHt;
        document.getElementById("totalActivoTs").innerHTML = totalActivoHt;
        document.getElementById("totalPasivoTs").innerHTML = totalCapitalHt + utilidadNeta;
    }else{
        utilidadNeta*=-1;
        document.getElementById("uIngresos").innerHTML = utilidadNeta;
        document.getElementById("uActivo").innerHTML = utilidadNeta;
        document.getElementById("totalGastosTs").innerHTML = totalGastoHt;
        document.getElementById("totalIngresosTs").innerHTML = totalIngresoHt + utilidadNeta;
        document.getElementById("totalActivoTs").innerHTML = totalActivoHt + utilidadNeta;
        document.getElementById("totalPasivoTs").innerHTML = totalCapitalHt;
    }
     //variables de sesion
    sessionStorage.setItem('balanceGeneral',balanceGeneral);
    //end
}