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
var estadoResultados;
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
    estadoResultados = [];
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
        if (getTypeAccount(balanceSumasSaldos[i]) === "G") {hojaTrabajo.push(valor,0,0,0); totalGastoHt+=valor; estadoResultados.push(balanceSumasSaldos[i],valor);}
        if (getTypeAccount(balanceSumasSaldos[i]) === "I") {hojaTrabajo.push(0,valor,0,0);totalIngresoHt+=valor; estadoResultados.push(balanceSumasSaldos[i],valor);}
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
    stringHojaTrabajo = "";
    for (var i = 0; i < hojaTrabajo.length; i=i+7) {
        stringHojaTrabajo+= "<tr><td>'"+hojaTrabajo[i]+"'</td><td>'"+hojaTrabajo[i+1]+"'</td><td>'"+hojaTrabajo[i+2]+"'</td><td>'"+hojaTrabajo[i+3]+"'</td><td>'"+hojaTrabajo[i+4]+"'</td><td>'"+hojaTrabajo[i+5]+"'</td><td>'"+hojaTrabajo[i+6]+"'</td></tr>";
    }
    stringHojaTrabajo+= "<tr bgcolor='#A9E2F3'><td><b>Sumas:</b></td><td>'"+totalDeudorSs+"'</td><td>'"+totalAcreedorSs+"'</td><td>'"+totalGastoHt+"'</td><td>'"+totalIngresoHt+"'</td><td>'"+totalActivoHt+"'</td><td>'"+totalCapitalHt+"'</td></tr>";
    
    utilidadNeta = totalIngresoHt - totalGastoHt;
    balanceGeneral.push("utilidad neta",utilidadNeta);
    estadoResultados.push("utilidad neta",utilidadNeta);
    if (utilidadNeta >= 0) {
        stringHojaTrabajo+= "<tr bgcolor='#00FF40'><td><b>Utilidad:</b></td><td></td><td></td><td>'"+utilidadNeta+"'</td><td></td><td></td><td>'"+utilidadNeta+"'</td></tr>";
        stringHojaTrabajo+= "<tr><td><b>Total:</b></td><td></td><td></td><td>'"+(totalGastoHt + utilidadNeta)+"'</td><td>'"+totalIngresoHt+"'</td><td>'"+totalActivoHt+"'</td><td>'"+(totalCapitalHt + utilidadNeta)+"'</td></tr>";
    }else{
        utilidadNeta*=-1;
        stringHojaTrabajo+= "<tr bgcolor='#F5A9A9'><td><b>Perdida:</b></td><td></td><td></td><td></td><td>'"+utilidadNeta+"'</td><td>'"+utilidadNeta+"'</td><td></td></tr>";
        stringHojaTrabajo+= "<tr><td><b>Total:</b></td><td></td><td></td><td>'"+totalGastoHt+"'</td><td>'"+(totalIngresoHt + utilidadNeta)+"'</td><td>'"+(totalActivoHt + utilidadNeta)+"'</td><td>'"+totalCapitalHt+"'</td></tr>";
    }
    $('#hojaTrabajo tbody').empty().append(stringHojaTrabajo);
     //variables de sesion
    sessionStorage.setItem('balanceGeneral',balanceGeneral);
    sessionStorage.setItem('estadoResultados',estadoResultados);
    //end
}