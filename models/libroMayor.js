var libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8, libro9, libro10, libro11, libro12, libro13, libro14, libro15, libro16, libro17, libro18, libro19, libro20, libro21, libro22, libro23, libro25, libro25, libro26, libro27, libro28, libro29, libro30;
var saldo1, saldo2, saldo3, saldo4, saldo5, saldo6, saldo7, saldo8, saldo9, saldo10, saldo11, saldo12, saldo13, saldo14, saldo15, saldo16, saldo17, saldo18, saldo19, saldo20, saldo21, saldo22, saldo23, saldo24, saldo25, saldo26, saldo27, saldo28, saldo29, saldo30;
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
    libro16 = sessionStorage.libro16.split(',');
    libro17 = sessionStorage.libro17.split(',');
    libro18 = sessionStorage.libro18.split(',');
    libro19 = sessionStorage.libro19.split(',');
    libro20 = sessionStorage.libro20.split(',');
    libro21 = sessionStorage.libro21.split(',');
    libro22 = sessionStorage.libro22.split(',');
    libro23 = sessionStorage.libro23.split(',');
    libro24 = sessionStorage.libro24.split(',');
    libro25 = sessionStorage.libro25.split(',');
    libro26 = sessionStorage.libro26.split(',');
    libro27 = sessionStorage.libro27.split(',');
    libro28 = sessionStorage.libro28.split(',');
    libro29 = sessionStorage.libro29.split(',');
    libro30 = sessionStorage.libro30.split(',');
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
    saldo16 = parseInt(sessionStorage.saldo16);
    saldo17 = parseInt(sessionStorage.saldo17);
    saldo18 = parseInt(sessionStorage.saldo18);
    saldo19 = parseInt(sessionStorage.saldo19);
    saldo20 = parseInt(sessionStorage.saldo20);
    saldo21 = parseInt(sessionStorage.saldo21);
    saldo22 = parseInt(sessionStorage.saldo22);
    saldo23 = parseInt(sessionStorage.saldo23);
    saldo24 = parseInt(sessionStorage.saldo24);
    saldo25 = parseInt(sessionStorage.saldo25);
    saldo26 = parseInt(sessionStorage.saldo26);
    saldo27 = parseInt(sessionStorage.saldo27);
    saldo28 = parseInt(sessionStorage.saldo28);
    saldo29 = parseInt(sessionStorage.saldo29);
    saldo30 = parseInt(sessionStorage.saldo30);
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
        case 15:
        drawLibro(libro16,15);
        break;
        case 16:
        drawLibro(libro17,16);
        break;
        case 17:
        drawLibro(libro18,17);
        break;
        case 18:
        drawLibro(libro19,18);
        break;
        case 19:
        drawLibro(libro20,19);
        break;
        case 20:
        drawLibro(libro21,20);
        break;
        case 21:
        drawLibro(libro22,21);
        break;
        case 22:
        drawLibro(libro23,22);
        break;
        case 23:
        drawLibro(libro24,23);
        break;
        case 24:
        drawLibro(libro25,24);
        break;
        case 25:
        drawLibro(libro26,25);
        break;
        case 26:
        drawLibro(libro27,26);
        break;
        case 27:
        drawLibro(libro28,27);
        break;
        case 28:
        drawLibro(libro29,28);
        break;
        case 29:
        drawLibro(libro30,29);
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