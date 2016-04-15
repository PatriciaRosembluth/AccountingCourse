var estadoResultados;
var balanceGeneral;
var accounts;
window.onload = cargarDatos;

function cargarDatos(){
	estadoResultados = sessionStorage.estadoResultados.split(',');
	balanceGeneral = sessionStorage.balanceGeneral.split(',');
	accounts = sessionStorage.accounts.split(',');
}

function generateAsientoCierre(){
	stringEstadoResultados = "<tr><td colspan = '3' align ='center'>A-1</td></tr>";
	stringBalanceGeneral = "<tr><td colspan = '3' align ='center'>A-2</td></tr>";
	totalDebeA1 = 0;
	totalHaberA1 = 0;
	totalDebeA2 = 0;
	totalHaberA2 = 0;
	for (var i = 0; i < estadoResultados.length-2; i=i+2) {
		type = findTypeAccount(estadoResultados[i]);
		if (type === "G") {
			stringEstadoResultados += "<tr><td>"+estadoResultados[i]+"</td><td></td><td>"+estadoResultados[i+1]+"</td></tr>";
			totalHaberA1+=parseInt(estadoResultados[i+1]);
		}else{
			stringEstadoResultados += "<tr><td>"+estadoResultados[i]+"</td><td>"+estadoResultados[i+1]+"</td><td></td></tr>";
			totalDebeA1+=parseInt(estadoResultados[i+1]);
		}
	}
	
	stringEstadoResultados += "<tr><td>"+estadoResultados[estadoResultados.length-2]+"</td><td></td><td>"+estadoResultados[estadoResultados.length-1]+"</td></tr>";
	totalHaberA1+=parseInt(estadoResultados[estadoResultados.length-1]);
	stringEstadoResultados += "<tr bgcolor='#A9E2F3'><td><b>Total:</b></td><td>"+totalDebeA1+"</td><td>"+totalHaberA1+"</td></tr>";
	for (var i = 0; i < balanceGeneral.length-2; i=i+2) {
		type = findTypeAccount(balanceGeneral[i]);
		if (type === "A") {
			stringBalanceGeneral += "<tr><td>"+balanceGeneral[i]+"</td><td></td><td>"+balanceGeneral[i+1]+"</td></tr>";
			totalHaberA2+=parseInt(balanceGeneral[i+1]);
		}else{
			stringBalanceGeneral += "<tr><td>"+balanceGeneral[i]+"</td><td>"+balanceGeneral[i+1]+"</td><td></td></tr>";
			totalDebeA2+=parseInt(balanceGeneral[i+1]);
		}
	}
	stringBalanceGeneral += "<tr><td>"+balanceGeneral[balanceGeneral.length-2]+"</td><td>"+balanceGeneral[balanceGeneral.length-1]+"</td><td></td></tr>";
	totalDebeA2 += parseInt(balanceGeneral[balanceGeneral.length-1]);
	stringBalanceGeneral+= "<tr bgcolor='#A9E2F3'><td><b>Total:</b></td><td>"+totalDebeA2+"</td><td>"+totalHaberA2+"</td></tr>";
	
	asientoCierre = stringEstadoResultados+stringBalanceGeneral;
	$('#asientoCierre tbody').empty().append(asientoCierre);
}

function findTypeAccount(account){
	for (var i = 0; i < accounts.length; i++) {
        if (account === accounts[i]) {
            return accounts[i+1];
        }
    }
}
