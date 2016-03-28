var libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8, libro9, libro10;
var saldo1, saldo2, saldo3, saldo4, saldo5, saldo6, saldo7, saldo8, saldo9, saldo10;
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
	saldo1 = parseInt(sessionStorage.saldo1);
	saldo2 = parseInt(sessionStorage.saldo2);
	saldo3 = parseInt(sessionStorage.saldo3);
	saldo4 = parseInt(sessionStorage.saldo4);
	saldo5 = parseInt(sessionStorage.saldo5);
	saldo6 = parseInt(sessionStorage.saldo6);
	saldo7 = parseInt(sessionStorage.saldo7);
	saldo8 = parseInt(sessionStorage.saldo8);
	saldo9 = parseInt(sessionStorage.saldo9);
	saldo10 = parseInt(sessionStorage.saldo10);
}

function drawLibrosMayores(){
    if (libro1[0]!=""){
        document.getElementById("libro1").innerHTML = detailMayores[0];
        for (var i = 0; i < libro1.length; i++) {
            document.getElementById("libro1-"+ i).innerHTML = libro1[i];
        }
    }
    if (libro2[0]!=""){
        document.getElementById("libro2").innerHTML = detailMayores[1];
         for (var i = 0; i < libro2.length; i++) {
            document.getElementById("libro2-"+ i).innerHTML = libro2[i];
        }
    }
    if (libro3[0]!=""){
        document.getElementById("libro3").innerHTML =detailMayores[2];
         for (var i = 0; i < libro3.length; i++) {
            document.getElementById("libro3-"+ i).innerHTML = libro3[i];
        }
    }
    if (libro4[0]!=""){
        document.getElementById("libro4").innerHTML = detailMayores[3];
         for (var i = 0; i < libro4.length; i++) {
            document.getElementById("libro4-"+ i).innerHTML = libro4[i];
        }
    }
    if (libro5[0]!=""){
        document.getElementById("libro5").innerHTML = detailMayores[4];
         for (var i = 0; i < libro5.length; i++) {
            document.getElementById("libro5-"+ i).innerHTML = libro5[i];
        }
    }
    if (libro6[0]!=""){
        document.getElementById("libro6").innerHTML = detailMayores[5];
         for (var i = 0; i < libro6.length; i++) {
            document.getElementById("libro6-"+ i).innerHTML = libro6[i];
        }
    }
    if (libro7[0]!=""){
        document.getElementById("libro7").innerHTML = detailMayores[6];
         for (var i = 0; i < libro7.length; i++) {
            document.getElementById("libro7-"+ i).innerHTML = libro7[i];
        }
    }
    if (libro8[0]!=""){
        document.getElementById("libro8").innerHTML = detailMayores[7];
         for (var i = 0; i < libro8.length; i++) {
            document.getElementById("libro8-"+ i).innerHTML = libro8[i];
        }
    }
    if (libro9[0]!=""){
        document.getElementById("libro9").innerHTML = detailMayores[8];
         for (var i = 0; i < libro9.length; i++) {
            document.getElementById("libro9-"+ i).innerHTML = libro9[i];
        }
    }
    if (libro10[0]!=""){
        document.getElementById("libro10").innerHTML = detailMayores[9];
         for (var i = 0; i < libro10.length; i++) {
            document.getElementById("libro10-"+ i).innerHTML = libro10[i];
        }
    }
 }