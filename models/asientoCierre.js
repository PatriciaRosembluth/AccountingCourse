var estadoResultados;
var balanceGeneral;
var accounts;
window.onload = cargarDatos;

function cargarDatos(){
	estadoResultados = localStorage.estadoResultados.split(',');
	balanceGeneral = localStorage.balanceGeneral.split(',');
	accounts = localStorage.accounts.split(',');
}

function generateAsientoCierre(){
	stringEstadoResultados = "<tr><td colspan = '3' align ='center'>A-1</td></tr>";
	stringBalanceGeneral = "<tr><td colspan = '3' align ='center'>A-2</td></tr>";
	totalDebeA1 = 0;
	totalHaberA1 = 0;
	totalDebeA2 = 0;
	totalHaberA2 = 0;
	utilidadGestionER = parseInt(estadoResultados[estadoResultados.length-1]);
	utilidadGestionBG = parseInt(balanceGeneral[balanceGeneral.length-1]);
	//Asiento 1 ER
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
	if (utilidadGestionER>=0) {
		stringEstadoResultados += "<tr><td> utilidad de la gestion</td><td></td><td>"+utilidadGestionER+"</td></tr>";
		totalHaberA1+=utilidadGestionER;
	}else{
		utilidadGestionER*=-1;
		stringEstadoResultados += "<tr bgcolor='#F5A9A9'><td> perdida de la gestion</td><td>"+utilidadGestionER+"</td><td></td></tr>";
		totalDebeA1+=utilidadGestionER;
	}
	stringEstadoResultados += "<tr bgcolor='#A9E2F3'><td><b>Total:</b></td><td>"+totalDebeA1+"</td><td>"+totalHaberA1+"</td></tr>";
	//Asiento 2 BG
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
	if (utilidadGestionBG>=0) {
		stringBalanceGeneral += "<tr><td> utilidad de la gestion</td><td>"+utilidadGestionBG+"</td><td></td></tr>";
		totalDebeA2 += utilidadGestionBG;
	}else{
		utilidadGestionBG*=-1;
		stringBalanceGeneral += "<tr bgcolor='#F5A9A9'><td> perdida de la gestion</td><td></td><td>"+utilidadGestionBG+"</td></tr>";
		totalHaberA2 +=utilidadGestionBG;
	}
	stringBalanceGeneral+= "<tr bgcolor='#A9E2F3'><td><b>Total:</b></td><td>"+totalDebeA2+"</td><td>"+totalHaberA2+"</td></tr>";
	
	asientoCierre = stringEstadoResultados+stringBalanceGeneral;
	localStorage.setItem('stringAsientoCierre',asientoCierre);
	$('#asientoCierre tbody').empty().append(asientoCierre);
}

function findTypeAccount(account){
	for (var i = 0; i < accounts.length; i++) {
        if (account === accounts[i]) {
            return accounts[i+1];
        }
    }
}
