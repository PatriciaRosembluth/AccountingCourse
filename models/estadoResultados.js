var estadoResultados;
window.onload = cargarDatos;

function cargarDatos() {
	estadoResultados = sessionStorage.estadoResultados.split(',');
}

function generateEstadoResultados(){
	gastos = 0;
	stringGastos="";
	for (var i = 0; i < estadoResultados.length; i=i+2) {
		if (estadoResultados[i]==="ventas") {
			document.getElementById("ventas").innerHTML = estadoResultados[i]+" --------------------------- " + estadoResultados[i+1];
			ventas = parseInt(estadoResultados[i+1]);  
		}else if(estadoResultados[i]==="costo de ventas") { 
			document.getElementById("costo-ventas").innerHTML = estadoResultados[i]+" ------------ " + estadoResultados[i+1];
			costoVentas = parseInt(estadoResultados[i+1]);
		}else if (estadoResultados[i]==="utilidad neta") { 
			document.getElementById("utilidad-neta").innerHTML = estadoResultados[i].toUpperCase()+" ----------------------------------------------------- " + estadoResultados[i+1];
		}else if (estadoResultados[i]!= "almacenes") {
			gastos+=parseInt(estadoResultados[i+1]);
			stringGastos+="<i><h3>"+estadoResultados[i]+" ---------------- " + estadoResultados[i+1]+"</h3></i>"
		}
	}
	$('#gastos').empty().append(stringGastos);
	utilidadBruta = ventas - costoVentas;
	document.getElementById("total-gastos").innerHTML = "total gastos --------------------------------- " + gastos;  	
	document.getElementById("utilidad-bruta").innerHTML = "utilidad bruta --------------------------------- " + utilidadBruta;  	
}