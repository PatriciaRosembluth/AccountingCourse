var libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8, libro9, libro10, libro11, libro12, libro13, libro14, libro15, libro16, libro17, libro18, libro19, libro20, libro21, libro22, libro23, libro24, libro25, libro26, libro27, libro28, libro29, libro30, libro31, libro32, libro33, libro34, libro35, libro36, libro37, libro38, libro39, libro40;
var saldo1, saldo2, saldo3, saldo4, saldo5, saldo6, saldo7, saldo8, saldo9, saldo10, saldo11, saldo12, saldo13, saldo14, saldo15, saldo16, saldo17, saldo18, saldo19, saldo20, saldo21, saldo22, saldo23, saldo24, saldo25, saldo26, saldo27, saldo28, saldo29, saldo30, saldo31, saldo32, saldo33, saldo34, saldo35, saldo36, saldo37, saldo38, saldo39, saldo40;
var detailMayores;
var stringLibro;
window.onload = cargarLibros;

function cargarLibros(){
	detailMayores = localStorage.detailMayores.split(',');
    stringLibro = "";
	libro1 = localStorage.libro1.split(',');   
    libro2 = localStorage.libro2.split(',');   
    libro3 = localStorage.libro3.split(',');   
    libro4 = localStorage.libro4.split(',');   
    libro5 = localStorage.libro5.split(',');   
    libro6 = localStorage.libro6.split(',');   
    libro7 = localStorage.libro7.split(',');   
    libro8 = localStorage.libro8.split(',');   
    libro9 = localStorage.libro9.split(',');   
    libro10 = localStorage.libro10.split(',');
    libro11 = localStorage.libro11.split(',');
    libro12 = localStorage.libro12.split(',');
    libro13 = localStorage.libro13.split(',');
    libro14 = localStorage.libro14.split(',');
    libro15 = localStorage.libro15.split(',');
    libro16 = localStorage.libro16.split(',');
    libro17 = localStorage.libro17.split(',');
    libro18 = localStorage.libro18.split(',');
    libro19 = localStorage.libro19.split(',');
    libro20 = localStorage.libro20.split(',');
    libro21 = localStorage.libro21.split(',');
    libro22 = localStorage.libro22.split(',');
    libro23 = localStorage.libro23.split(',');
    libro24 = localStorage.libro24.split(',');
    libro25 = localStorage.libro25.split(',');
    libro26 = localStorage.libro26.split(',');
    libro27 = localStorage.libro27.split(',');
    libro28 = localStorage.libro28.split(',');
    libro29 = localStorage.libro29.split(',');
    libro30 = localStorage.libro30.split(',');
    libro31 = localStorage.libro31.split(',');
    libro32 = localStorage.libro32.split(',');
    libro33 = localStorage.libro33.split(',');
    libro34 = localStorage.libro34.split(',');
    libro35 = localStorage.libro35.split(',');
    libro36 = localStorage.libro36.split(',');
    libro37 = localStorage.libro37.split(',');
    libro38 = localStorage.libro38.split(',');
    libro39 = localStorage.libro39.split(',');
    libro40 = localStorage.libro40.split(',');

    saldo1 = parseInt(localStorage.saldo1);
    saldo2 = parseInt(localStorage.saldo2);
    saldo3 = parseInt(localStorage.saldo3);
    saldo4 = parseInt(localStorage.saldo4);
    saldo5 = parseInt(localStorage.saldo5);
    saldo6 = parseInt(localStorage.saldo6);
    saldo7 = parseInt(localStorage.saldo7);
    saldo8 = parseInt(localStorage.saldo8);
    saldo9 = parseInt(localStorage.saldo9);
    saldo10 = parseInt(localStorage.saldo10);
    saldo11 = parseInt(localStorage.saldo11);
    saldo12 = parseInt(localStorage.saldo12);
    saldo13 = parseInt(localStorage.saldo13);
    saldo14 = parseInt(localStorage.saldo14);
    saldo15 = parseInt(localStorage.saldo15);
    saldo16 = parseInt(localStorage.saldo16);
    saldo17 = parseInt(localStorage.saldo17);
    saldo18 = parseInt(localStorage.saldo18);
    saldo19 = parseInt(localStorage.saldo19);
    saldo20 = parseInt(localStorage.saldo20);
    saldo21 = parseInt(localStorage.saldo21);
    saldo22 = parseInt(localStorage.saldo22);
    saldo23 = parseInt(localStorage.saldo23);
    saldo24 = parseInt(localStorage.saldo24);
    saldo25 = parseInt(localStorage.saldo25);
    saldo26 = parseInt(localStorage.saldo26);
    saldo27 = parseInt(localStorage.saldo27);
    saldo28 = parseInt(localStorage.saldo28);
    saldo29 = parseInt(localStorage.saldo29);
    saldo30 = parseInt(localStorage.saldo30);
    saldo31 = parseInt(localStorage.saldo31);
    saldo32 = parseInt(localStorage.saldo32);
    saldo33 = parseInt(localStorage.saldo33);
    saldo34 = parseInt(localStorage.saldo34);
    saldo35 = parseInt(localStorage.saldo35);
    saldo36 = parseInt(localStorage.saldo36);
    saldo37 = parseInt(localStorage.saldo37);
    saldo38 = parseInt(localStorage.saldo38);
    saldo39 = parseInt(localStorage.saldo39);
    saldo40 = parseInt(localStorage.saldo40);
    $('select').empty().append(localStorage.optionsAsString);
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
        case 31:
        drawLibro(libro32,31);
        break;
        case 32:
        drawLibro(libro33,32);
        break;
        case 33:
        drawLibro(libro34,33);
        break;
        case 34:
        drawLibro(libro35,34);
        break;
        case 35:
        drawLibro(libro36,35);
        break;
        case 36:
        drawLibro(libro37,36);
        break;
        case 37:
        drawLibro(libro38,37);
        break;
        case 38:
        drawLibro(libro39,38);
        break;
        case 39:
        drawLibro(libro40,39);
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