var libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8, libro9, libro10, libro11, libro12, libro13, libro14, libro15;
var saldo1, saldo2, saldo3, saldo4, saldo5, saldo6, saldo7, saldo8, saldo9, saldo10, saldo11, saldo12, saldo13, saldo14, saldo15;
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
    libro11 = sessionStorage.libro11.split(',');
    libro12 = sessionStorage.libro12.split(',');
    libro13 = sessionStorage.libro13.split(',');
    libro14 = sessionStorage.libro14.split(',');
    libro15 = sessionStorage.libro15.split(',');
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
    saldo11 = parseInt(sessionStorage.saldo11);
    saldo12 = parseInt(sessionStorage.saldo12);
    saldo13 = parseInt(sessionStorage.saldo13);
    saldo14 = parseInt(sessionStorage.saldo14);
    saldo15 = parseInt(sessionStorage.saldo15);
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
        case 10:
        drawLibro(libro11,10);
        break;
        case 11:
        drawLibro(libro12,11);
        break;
        case 12:
        drawLibro(libro13,12);
        break;
        case 13:
        drawLibro(libro14,13);
        break;
        case 14:
        drawLibro(libro15,14);
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