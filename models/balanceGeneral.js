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
    stringAccountsA = "";
    stringAccountsP = "";
    stringSelectA = "<td><select style = 'width:200px;height:24px;'>"+
            "<option value='0'>Seleccionar</option>"+
            "<option value='D'>Disponible</option>"+
            "<option value='AR'>Realizable</option>"+
            "<option value='AE'>Exigible</option>"+
            "<option value='AF'>Activo Fijo</option>"+
            "</select></td></tr>";
    stringSelectP = "<td><select style = 'width:200px;height:24px;'>"+
            "<option value='0'>Seleccionar</option>"+
            "<option value='PE'>Exigible</option>"+
            "<option value='P'>Patrimonio</option>"+
            "</select></td></tr>";
    for (var i = 1; i < accounts.length; i = i+2) {
        if (accounts[i] === "A" || accounts[i-1].indexOf("DA") != -1) {
            stringAccountsA += "<tr><td>"+accounts[i-1]+"</td>" + stringSelectA;
            accountsA.push(accounts[i-1]);
        }else if(accounts[i] === "P" || accounts[i] === "C"){
            stringAccountsP += "<tr><td>"+accounts[i-1]+"</td>" + stringSelectP;  
            accountsP.push(accounts[i-1]);
        }
    }
    accountsBG = accountsA.concat(accountsP);
    stringAccountsP += "<tr><td>utilidad neta</td>" + stringSelectP;
    accountsBG.push("utilidad neta");
    $('#accountsActivo tbody').empty().append(stringAccountsA);
    $('#accountsPasivoCapital tbody').empty().append(stringAccountsP);
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
    if (selectTypes.length>0) {
        drawBalanceGeneral();
    }else{
        alert("Debe seleccionar los tipos de las cuentas para generar el balance");
    } 
}

function drawBalanceGeneral(){
    totalActivo = 0, totalPasivo = 0;
    stringActivoD = "";
    stringActivoE = "";
    stringActivoF = "";
    stringActivoR = "";
    stringPasivoP = "";
    stringPasivoE = "";
    for (var i = 0; i < balanceGeneral.length; i=i+2) {
        if (findType(balanceGeneral[i]) === "D" ) {
            stringActivoD += "<i><h3 style='color:#0000FF'>"+balanceGeneral[i]+" ------- " +balanceGeneral[i+1]+"</h3></i>";
            totalActivo += parseInt(balanceGeneral[i+1]); 
        }
        if (findType(balanceGeneral[i]) === "AE" ) {
            stringActivoE += "<i><h3 style='color:#0000FF'>"+balanceGeneral[i]+" ------- " +balanceGeneral[i+1]+"</h3></i>";
            totalActivo += parseInt(balanceGeneral[i+1]);  
        }
        if (findType(balanceGeneral[i]) === "AF" ) {
            
            if(balanceGeneral[i].indexOf("DA") != -1){
                stringActivoF += "<i><h3 style='color:#0000FF'>-/"+balanceGeneral[i]+" ------- " +balanceGeneral[i+1]+"</h3></i>";
                totalActivo -= parseInt(balanceGeneral[i+1]);
            }else{
            stringActivoF += "<i><h3 style='color:#0000FF'>"+balanceGeneral[i]+" ------- " +balanceGeneral[i+1]+"</h3></i>";
            totalActivo += parseInt(balanceGeneral[i+1]); 
            }
        }
        if (findType(balanceGeneral[i]) === "AR" ) {
            stringActivoR += "<i><h3 style='color:#0000FF'>"+balanceGeneral[i]+" ------- " +balanceGeneral[i+1]+"</h3></i>";
            totalActivo += parseInt(balanceGeneral[i+1]); 
        }
        if (findType(balanceGeneral[i]) === "P" ) {
            stringPasivoP += "<i><h3 style='color:#0000FF'>"+balanceGeneral[i]+" ------- " +balanceGeneral[i+1]+"</h3></i>";
            totalPasivo += parseInt(balanceGeneral[i+1]);
        }
        if (findType(balanceGeneral[i]) === "PE" ) {
            stringPasivoE += "<i><h3 style='color:#0000FF'>"+balanceGeneral[i]+" ------- " +balanceGeneral[i+1]+"</h3></i>";
            totalPasivo += parseInt(balanceGeneral[i+1]);
        }
    }
    $('#activoD').empty().append(stringActivoD);
    $('#activoE').empty().append(stringActivoE);
    $('#activoF').empty().append(stringActivoF);
    $('#activoR').empty().append(stringActivoR);
    
     $('#pasivoE').empty().append(stringPasivoE);
     $('#pasivoP').empty().append(stringPasivoP);
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