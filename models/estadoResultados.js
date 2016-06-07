var estadoResultados;
var accounts;
window.onload = cargarDatos;

function cargarDatos() {
	estadoResultados = localStorage.estadoResultados.split(',');
	accounts = localStorage.accounts.split(',');
}

function generateEstadoResultados(){
	gastos = 0;
	ingresos = 0;
	stringGastos="";
	stringIngresos="";
	for (var i = 0; i < estadoResultados.length; i=i+2) {
		if (estadoResultados[i]==="ventas") {
			document.getElementById("ventas").innerHTML = estadoResultados[i]+" --------------------------- " + estadoResultados[i+1];
			localStorage.setItem('stringVentas',estadoResultados[i]+" --------------------------- " + estadoResultados[i+1]);
			ventas = parseInt(estadoResultados[i+1]);  
		}else if(estadoResultados[i]==="costo de ventas") { 
			document.getElementById("costo-ventas").innerHTML = estadoResultados[i]+" ------------ " + estadoResultados[i+1];
			localStorage.setItem('stringCostoVentas',estadoResultados[i]+" ------------ " + estadoResultados[i+1]);
			costoVentas = parseInt(estadoResultados[i+1]);
		}else if (estadoResultados[i]==="utilidad neta") { 
			document.getElementById("utilidad-neta").innerHTML = estadoResultados[i].toUpperCase()+" ----------------------------------------------------- " + estadoResultados[i+1];
			localStorage.setItem('stringUtilidadNeta',estadoResultados[i].toUpperCase()+" ----------------------------------------------------- " + estadoResultados[i+1]);
		}else if(findTypeAccount(estadoResultados[i])==="G"){
			gastos+=parseInt(estadoResultados[i+1]);
			stringGastos+="<i><h3>"+estadoResultados[i]+" ---------------- " + estadoResultados[i+1]+"</h3></i>"
		}else if(findTypeAccount(estadoResultados[i])==="I"){
			ingresos+=parseInt(estadoResultados[i+1]);
			stringIngresos+="<i><h3>"+estadoResultados[i]+" ---------------- " + estadoResultados[i+1]+"</h3></i>"
		}
	}
	$('#gastos').empty().append(stringGastos);
	$('#ingresos').empty().append(stringIngresos);
	utilidadBruta = ventas - costoVentas;
	//variable de sesion
	localStorage.setItem('stringGastos',stringGastos);
	localStorage.setItem('stringIngresos',stringIngresos);

	localStorage.setItem('stringTotalGastos',gastos);
	localStorage.setItem('stringTotalIngresos',ingresos);
	localStorage.setItem('stringUtilidadBruta',utilidadBruta);
	//end
	document.getElementById("total-gastos").innerHTML = "total gastos --------------------------------- " + gastos;
	document.getElementById("total-ingresos").innerHTML = "total ingresos --------------------------------- " + ingresos;
	document.getElementById("utilidad-bruta").innerHTML = "utilidad bruta --------------------------------- " + utilidadBruta;  	
}

function findTypeAccount(account){
	for (var i = 0; i < accounts.length; i++) {
        if (account === accounts[i]) {
            return accounts[i+1];
        }
    }

}