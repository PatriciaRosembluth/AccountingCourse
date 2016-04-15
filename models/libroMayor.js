var libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8, libro9, libro10;
var saldo1, saldo2, saldo3, saldo4, saldo5, saldo6, saldo7, saldo8, saldo9, saldo10;
var detailMayores;
var stringLibro;
window.onload = cargarLibros;

function cargarLibros(){
	detailMayores = sessionStorage.detailMayores.split(',');
    stringLibro = "";
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
    $('select').empty().append(sessionStorage.optionsAsString);
}

function drawLibrosMayores(){
    libro = $('select').val();
    mostrar = findLibro(libro);
    switch (mostrar){
        case 0:
        drawLibro(libro1,0);
        break;
        case 1:
        drawLibro(libro2,1);
        break;
        case 2:
        drawLibro(libro3,2);
        break;
        case 3:
        drawLibro(libro4,3);
        break;
        case 4:
        drawLibro(libro5,4);
        break;
        case 5:
        drawLibro(libro6,5);
        break;
        case 6:
        drawLibro(libro7,6);
        break;
        case 7:
        drawLibro(libro8,7);
        break;
        case 8:
        drawLibro(libro9,8);
        break;
        case 9:
        drawLibro(libro10,9);
        break;
    }    
}

function drawLibro(libro, index){
    stringLibro = "";
    if (libro[0]!=""){
        document.getElementById("libro").innerHTML = detailMayores[index];
        for (var i = 0; i < libro.length; i=i+5) {
            stringLibro += "<tr><td>"+libro[i]+"</td><td>"+libro[i+1]+"</td><td>"+libro[i+2]+"</td><td>"+libro[i+3]+"</td><td>"+libro[i+4]+"</td></tr>";
        }
    }else{
        alert("No se registraron movimietos en la cuenta '"+detailMayores[index]+"'");
    }
    $('#showLibro tbody').empty().append(stringLibro);
}

 function findLibro(libro){
    for (var i = 0; i < detailMayores.length; i++) {
        if (libro === detailMayores[i]) {
            return i;
        }
    }
 }