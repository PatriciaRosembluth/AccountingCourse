var estadoResultados;
window.onload = cargarDatos;

function cargarDatos() {
	estadoResultados = sessionStorage.estadoResultados.split(',');
}

function generateEstadoResultados(){
	for (var i = 0; i < estadoResultados.length; i=i+2) {
		if (estadoResultados[i]==="ventas") {
			document.getElementById("ventas").innerHTML = estadoResultados[i]+" --------------------------- " + estadoResultados[i+1];
			ventas = estadoResultados[i+1];  
		}
		if (estadoResultados[i]==="costo de ventas") {
			document.getElementById("costo-ventas").innerHTML = estadoResultados[i]+" ------------ " + estadoResultados[i+1];
			costoVentas = estadoResultados[i+1];
		}
		if (estadoResultados[i]==="utilidad neta") {
			document.getElementById("utilidad-neta").innerHTML = estadoResultados[i]+" ---------------------------------- " + estadoResultados[i+1];
		}
	}
	utilidadBruta = ventas - costoVentas;
	document.getElementById("utilidad-bruta").innerHTML = "utilidad bruta --------------------------------- " + utilidadBruta;  	
}