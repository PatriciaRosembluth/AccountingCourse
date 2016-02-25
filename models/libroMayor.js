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
        "<td><img src='/AccountingCourse/img/disk.jpg' class='btnSave'><img src='/AccountingCourse/img/delete.png' class='btnDelete'/></td>"+
        "</tr>");
    
        $(".btnSave").bind("click", Save);      
        $(".btnDelete").bind("click", Delete);
}; 

function Save(){
    var par = $(this).parent().parent(); //tr
    var tdDate = par.children("td:nth-child(1)");
    var tdDetail = par.children("td:nth-child(2)");
    var tdDebe = par.children("td:nth-child(3)");
    var tdHaber = par.children("td:nth-child(4)");
    var tdSaldo = par.children("td:nth-child(5)");
    var tdButtons = par.children("td:nth-child(6)");

    tdDate.html(tdDate.children("input[type=text]").val());
    tdDetail.html(tdDetail.children("input[type=text]").val());
    tdDebe.html(tdDebe.children("input[type=text]").val());
    tdHaber.html(tdHaber.children("input[type=text]").val());
    tdSaldo.html(tdSaldo.children("input[type=text]").val());
    tdButtons.html("<img src='/AccountingCourse/img/delete.png' class='btnDelete'/><img src='/AccountingCourse/img/pencil.png' class='btnEdit'/>");

    $(".btnEdit").bind("click", Edit);
    $(".btnDelete").bind("click", Delete);
}; 

function Edit(){
    var par = $(this).parent().parent(); //tr
    var tdDate = par.children("td:nth-child(1)");
    var tdDetail = par.children("td:nth-child(2)");
    var tdDebe = par.children("td:nth-child(3)");
    var tdHaber = par.children("td:nth-child(4)");
    var tdSaldo = par.children("td:nth-child(5)");
    var tdButtons = par.children("td:nth-child(6)");

    tdDate.html("<input type='text' id='txtDate' value='"+tdDate.html()+"'/>");
    tdDetail.html("<input type='text' id='txtDetail' value='"+tdDetail.html()+"'/>");
    tdDebe.html("<input type='text' id='txtDebe' value='"+tdDebe.html()+"'/>");
    tdHaber.html("<input type='text' id='txtHaber' value='"+tdHaber.html()+"'/>");
    tdSaldo.html("<input type='text' id='txtSaldo' value='"+tdSaldo.html()+"'/>");
    tdButtons.html("<img src='/AccountingCourse/img/disk.jpg' class='btnSave'/>");

    $(".btnSave").bind("click", Save);
    $(".btnEdit").bind("click", Edit);
    $(".btnDelete").bind("click", Delete);
};

function Delete(){
    var par = $(this).parent().parent(); //tr
    par.remove();
}; 
