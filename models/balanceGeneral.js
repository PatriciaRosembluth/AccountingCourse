var accounts;
var balanceGeneral;
var accountsBG;
var typesBalanceGeneral;
window.onload = cargarAccounts;

function cargarAccounts(){
	accounts = sessionStorage.accounts.split(',');
    balanceGeneral = sessionStorage.balanceGeneral.split(',');
	putActivoPasivo();
}

function putActivoPasivo(){
    accountsBG = [];
    accountsA = [];
    accountsP = [];
    indexA = 1;
    indexP = 1;
    for (var i = 1; i < accounts.length; i = i+2) {
        if (accounts[i] === "A") {
            document.getElementById("activo-"+indexA).innerHTML = accounts[i-1];
            accountsA.push(accounts[i-1]);
            indexA ++;  
        }else if(accounts[i] === "P" || accounts[i] === "C"){
            document.getElementById("pasivo-"+indexP).innerHTML = accounts[i-1];  
            accountsP.push(accounts[i-1]);
            indexP++;
        }
    }
    accountsBG = accountsA.concat(accountsP); 
    document.getElementById("pasivo-"+indexP).innerHTML = "utilidad neta";  
    accountsBG.push("utilidad neta");
}

function getTypesBalanceGeneral(){
    selectTypes = [];
    typesBalanceGeneral = [];
    $('td select').each(function() {
        if ($(this).val()==="0") {return}
        selectTypes.push($(this).val()); 
    });
    for (var i = 0; i < accountsBG.length; i++) {
        typesBalanceGeneral.push(accountsBG[i],selectTypes[i]);
    }
    drawBalanceGeneral();
    
}

function drawBalanceGeneral(){
    activoD = 1, activoE = 1, activoF = 1, pasivoE = 1, pasivoP = 1;
    totalActivo = 0, totalPasivo = 0;
    for (var i = 1; i < 5; i++) {
        document.getElementById("activoD-"+i).innerHTML = "";
        document.getElementById("activoE-"+i).innerHTML = "";
        document.getElementById("activoF-"+i).innerHTML = "";
        document.getElementById("pasivoP-"+i).innerHTML = "";
        document.getElementById("pasivoE-"+i).innerHTML = "";
    }
    for (var i = 0; i < balanceGeneral.length; i=i+2) {
        if (findType(balanceGeneral[i]) === "D" ) {
            document.getElementById("activoD-"+activoD).innerHTML = balanceGeneral[i] +" ------- " +balanceGeneral[i+1];
            totalActivo += parseInt(balanceGeneral[i+1]);
            activoD++;  
        }
        if (findType(balanceGeneral[i]) === "AE" ) {
            document.getElementById("activoE-"+activoE).innerHTML = balanceGeneral[i] +" ------- " +balanceGeneral[i+1];
            totalActivo += parseInt(balanceGeneral[i+1]);  
            activoE++;
        }
        if (findType(balanceGeneral[i]) === "AF" ) {
            document.getElementById("activoF-"+activoF).innerHTML = balanceGeneral[i] +" ------- " +balanceGeneral[i+1];
            totalActivo += parseInt(balanceGeneral[i+1]); 
            activoF++; 
        }
        if (findType(balanceGeneral[i]) === "P" ) {
            document.getElementById("pasivoP-"+pasivoP).innerHTML = balanceGeneral[i] +" ------- " +balanceGeneral[i+1];
            totalPasivo += parseInt(balanceGeneral[i+1]);  
            pasivoP++;
        }
        if (findType(balanceGeneral[i]) === "PE" ) {
            document.getElementById("pasivoE-"+pasivoE).innerHTML = balanceGeneral[i] +" ------- " +balanceGeneral[i+1];
            totalPasivo += parseInt(balanceGeneral[i+1]);
            pasivoE++;  
        }
    }
    document.getElementById("totalActivo").innerHTML = "TOTAL ACTIVO:  " + totalActivo;
    document.getElementById("totalPasivo").innerHTML = "TOTAL PASIVO/PATRIMONIO:  "+totalPasivo;
}   

function findType(account){
    for (var i = 0; i < typesBalanceGeneral.length; i=i+2) {
        if(account === typesBalanceGeneral[i]){
            return typesBalanceGeneral[i+1];
        }
    }
}