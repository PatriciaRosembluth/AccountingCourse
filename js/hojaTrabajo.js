$(function(){
    //Add, Save, Edit and Delete functions code
    $(".btnEdit").bind("click", Edit);
    $(".btnDelete").bind("click", Delete);
    $("#btnAdd").bind("click", Add);
});

function Add(){
    $("#tblData tbody").append(
        "<tr>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><img src='/AccountingCourse/img/disk.jpg' class='btnSave'><img src='/AccountingCourse/img/delete.png' class='btnDelete'/></td>"+
        "</tr>");
    
        $(".btnSave").bind("click", Save);      
        $(".btnDelete").bind("click", Delete);
}; 

function Save(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdDeudor = par.children("td:nth-child(2)");
    var tdAcreedor = par.children("td:nth-child(3)");
    var tdDebe = par.children("td:nth-child(4)");
    var tdHaber = par.children("td:nth-child(5)");
    var tdDeudor2 = par.children("td:nth-child(6)");
    var tdAcreedor2 = par.children("td:nth-child(7)");
    var tdEgreso = par.children("td:nth-child(8)");
    var tdIngreso = par.children("td:nth-child(9)");
    var tdActivo = par.children("td:nth-child(10)");
    var tdPasivoPat = par.children("td:nth-child(11)");
    var tdButtons = par.children("td:nth-child(12)");

    tdDetail.html(tdDetail.children("input[type=text]").val());
    tdDeudor.html(tdDeudor.children("input[type=text]").val());
    tdAcreedor.html(tdAcreedor.children("input[type=text]").val());
    tdDebe.html(tdDebe.children("input[type=text]").val());
    tdHaber.html(tdHaber.children("input[type=text]").val());
    tdDeudor2.html(tdDeudor2.children("input[type=text]").val());
    tdAcreedor2.html(tdAcreedor2.children("input[type=text]").val());
    tdEgreso.html(tdEgreso.children("input[type=text]").val());
    tdIngreso.html(tdIngreso.children("input[type=text]").val());
    tdActivo.html(tdActivo.children("input[type=text]").val());
    tdPasivoPat.html(tdPasivoPat.children("input[type=text]").val());
    tdButtons.html("<img src='/AccountingCourse/img/delete.png' class='btnDelete'/><img src='/AccountingCourse/img/pencil.png' class='btnEdit'/>");

    $(".btnEdit").bind("click", Edit);
    $(".btnDelete").bind("click", Delete);
}; 

function Edit(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdDeudor = par.children("td:nth-child(2)");
    var tdAcreedor = par.children("td:nth-child(3)");
    var tdDebe = par.children("td:nth-child(4)");
    var tdHaber = par.children("td:nth-child(5)");
    var tdDeudor2 = par.children("td:nth-child(6)");
    var tdAcreedor2 = par.children("td:nth-child(7)");
    var tdEgreso = par.children("td:nth-child(8)");
    var tdIngreso = par.children("td:nth-child(9)");
    var tdActivo = par.children("td:nth-child(10)");
    var tdPasivoPat = par.children("td:nth-child(11)");
    var tdButtons = par.children("td:nth-child(12)");

    tdDetail.html("<input type='text' id='txtDetail' value='"+tdDetail.html()+"'/>");
    tdDeudor.html("<input type='text' id='txtDeudor' value='"+tdDeudor.html()+"'/>");
    tdAcreedor.html("<input type='text' id='txtAcreedor' value='"+tdAcreedor.html()+"'/>");
    tdDebe.html("<input type='text' id='txtDebe' value='"+tdDebe.html()+"'/>");
    tdHaber.html("<input type='text' id='txtHaber' value='"+tdHaber.html()+"'/>");
    tdDeudor2.html("<input type='text' id='txtDeudor2' value='"+tdDeudor2.html()+"'/>");
    tdAcreedor2.html("<input type='text' id='txtAcreedor2' value='"+tdAcreedor2.html()+"'/>");
    tdEgreso.html("<input type='text' id='txtEgreso' value='"+tdEgreso.html()+"'/>");
    tdIngreso.html("<input type='text' id='txtIngreso' value='"+tdIngreso.html()+"'/>");
    tdActivo.html("<input type='text' id='txtActivo' value='"+tdActivo.html()+"'/>");
    tdPasivoPat.html("<input type='text' id='txtPasivoPat' value='"+tdPasivoPat.html()+"'/>");
    tdButtons.html("<img src='/AccountingCourse/img/disk.jpg' class='btnSave'/>");

    $(".btnSave").bind("click", Save);
    $(".btnEdit").bind("click", Edit);
    $(".btnDelete").bind("click", Delete);
};

function Delete(){
    var par = $(this).parent().parent(); //tr
    par.remove();
}; 
