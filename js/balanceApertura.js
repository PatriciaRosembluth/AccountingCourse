var totalActivo = 0;
var totalPasPat = 0;
var intAmount;
$(function(){
    //Add, Save, Edit and Delete functions code
    $(".btnEditACD").bind("click", EditACD);
    $(".btnEditACE").bind("click", EditACE);
    $(".btnEditANCF").bind("click", EditANCF);
    $(".btnEditPC").bind("click", EditPC);
    $(".btnEditPAC").bind("click", EditPAC);

    $(".btnDeleteActivo").bind("click", DeleteActivo);
    $(".btnDeletePasivo").bind("click", DeletePasivo);
    
    $("#btnAddACD").bind("click", AddACD);
    $("#btnAddACE").bind("click", AddACE);
    $("#btnAddANCF").bind("click", AddANCF);
    $("#btnAddPC").bind("click", AddPC);
    $("#btnAddPAC").bind("click", AddPAC);
});


function AddACD(){
    $("#tblACD tbody").append(
        "<tr>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><img src='/AccountingCourse/img/disk.jpg' class='btnSaveACD'><img src='/AccountingCourse/img/delete.png' class='btnDeleteActivo'/></td>"+
        "</tr>");
    
        $(".btnSaveACD").bind("click", SaveACD);      
        $(".btnDeleteActivo").bind("click", DeleteActivo);
}; 

function AddACE(){
    $("#tblACE tbody").append(
        "<tr>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><img src='/AccountingCourse/img/disk.jpg' class='btnSaveACE'><img src='/AccountingCourse/img/delete.png' class='btnDeleteActivo'/></td>"+
        "</tr>");
    
        $(".btnSaveACE").bind("click", SaveACE);      
        $(".btnDeleteActivo").bind("click", DeleteActivo);
}; 

function AddANCF(){
    $("#tblANCF tbody").append(
        "<tr>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><img src='/AccountingCourse/img/disk.jpg' class='btnSaveANCF'><img src='/AccountingCourse/img/delete.png' class='btnDeleteActivo'/></td>"+
        "</tr>");
    
        $(".btnSaveANCF").bind("click", SaveANCF);      
        $(".btnDeleteActivo").bind("click", DeleteActivo);
}; 

function AddPC(){
    $("#tblPC tbody").append(
        "<tr>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><img src='/AccountingCourse/img/disk.jpg' class='btnSavePC'><img src='/AccountingCourse/img/delete.png' class='btnDeletePasivo'/></td>"+
        "</tr>");
    
        $(".btnSavePC").bind("click", SavePC);      
        $(".btnDeletePasivo").bind("click", DeletePasivo);
}; 

function AddPAC(){
    $("#tblPAC tbody").append(
        "<tr>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><img src='/AccountingCourse/img/disk.jpg' class='btnSavePAC'><img src='/AccountingCourse/img/delete.png' class='btnDeletePasivo'/></td>"+
        "</tr>");
    
        $(".btnSavePAC").bind("click", SavePAC);      
        $(".btnDeletePasivo").bind("click", DeletePasivo);
}; 

function SaveACD(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    tdDetail.html(tdDetail.children("input[type=text]").val());
    tdAmount.html(tdAmount.children("input[type=text]").val());
    tdButtons.html("<img src='/AccountingCourse/img/delete.png' class='btnDeleteActivo'/><img src='/AccountingCourse/img/pencil.png' class='btnEditACD'/>");

    intAmount = parseInt(tdAmount.html());
    
    if(isNaN(intAmount) == false){
    totalActivo = totalActivo + intAmount;
    $("#totalActivo").text(totalActivo);
    }

    $(".btnEditACD").bind("click", EditACD);
    $(".btnDeleteActivo").bind("click", DeleteActivo);
}; 

function SaveACE(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    tdDetail.html(tdDetail.children("input[type=text]").val());
    tdAmount.html(tdAmount.children("input[type=text]").val());
    tdButtons.html("<img src='/AccountingCourse/img/delete.png' class='btnDeleteActivo'/><img src='/AccountingCourse/img/pencil.png' class='btnEditACE'/>");

    intAmount = parseInt(tdAmount.html());
    
    if(isNaN(intAmount) == false){
    totalActivo = totalActivo + intAmount;
    $("#totalActivo").text(totalActivo);
    }

    $(".btnEditACE").bind("click", EditACE);
    $(".btnDeleteActivo").bind("click", DeleteActivo);
}; 

function SaveANCF(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    tdDetail.html(tdDetail.children("input[type=text]").val());
    tdAmount.html(tdAmount.children("input[type=text]").val());
    tdButtons.html("<img src='/AccountingCourse/img/delete.png' class='btnDeleteActivo'/><img src='/AccountingCourse/img/pencil.png' class='btnEditANCF'/>");

    intAmount = parseInt(tdAmount.html());
    
    if(isNaN(intAmount) == false){
    totalActivo = totalActivo + intAmount;
    $("#totalActivo").text(totalActivo);
    }

    $(".btnEditANCF").bind("click", EditANCF);
    $(".btnDeleteActivo").bind("click", DeleteActivo);
}; 

function SavePC(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    tdDetail.html(tdDetail.children("input[type=text]").val());
    tdAmount.html(tdAmount.children("input[type=text]").val());
    tdButtons.html("<img src='/AccountingCourse/img/delete.png' class='btnDeletePasivo'/><img src='/AccountingCourse/img/pencil.png' class='btnEditPC'/>");

    intAmount = parseInt(tdAmount.html());

    if(isNaN(intAmount) == false){
    totalPasPat = totalPasPat + intAmount;
    $("#totalPasivoPatrimonio").text(totalPasPat);
    }

    $(".btnEditPC").bind("click", EditPC);
    $(".btnDeletePasivo").bind("click", DeletePasivo);
}; 

function SavePAC(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    tdDetail.html(tdDetail.children("input[type=text]").val());
    tdAmount.html(tdAmount.children("input[type=text]").val());
    tdButtons.html("<img src='/AccountingCourse/img/delete.png' class='btnDeletePasivo'/><img src='/AccountingCourse/img/pencil.png' class='btnEditPAC'/>");

    intAmount = parseInt(tdAmount.html());

    if(isNaN(intAmount) == false){
    totalPasPat = totalPasPat + intAmount;
    $("#totalPasivoPatrimonio").text(totalPasPat);
    }

    $(".btnEditPAC").bind("click", EditPAC);
    $(".btnDeletePasivo").bind("click", DeletePasivo);
}; 

function EditACD(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    intAmount = parseInt(tdAmount.html());
    
    if(isNaN(intAmount) == false){
    totalActivo = totalActivo - intAmount;
    }

    tdDetail.html("<input type='text' id='txtDetail' value='"+tdDetail.html()+"'/>");
    tdAmount.html("<input type='text' id='txtAmount' value='"+tdAmount.html()+"'/>");
    tdButtons.html("<img src='/AccountingCourse/img/disk.jpg' class='btnSaveACD'/>");

    $(".btnSaveACD").bind("click", SaveACD);
    $(".btnEditACD").bind("click", EditACD);
    $(".btnDeleteActivo").bind("click", DeleteActivo);
};

function EditACE(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    intAmount = parseInt(tdAmount.html());
    
    if(isNaN(intAmount) == false){
    totalActivo = totalActivo - intAmount;
    }

    tdDetail.html("<input type='text' id='txtDetail' value='"+tdDetail.html()+"'/>");
    tdAmount.html("<input type='text' id='txtAmount' value='"+tdAmount.html()+"'/>");
    tdButtons.html("<img src='/AccountingCourse/img/disk.jpg' class='btnSaveACE'/>");

    $(".btnSaveACE").bind("click", SaveACE);
    $(".btnEditACE").bind("click", EditACE);
    $(".btnDeleteActivo").bind("click", DeleteActivo);
};

function EditANCF(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    intAmount = parseInt(tdAmount.html());
    
    if(isNaN(intAmount) == false){
    totalActivo = totalActivo - intAmount;
    }

    tdDetail.html("<input type='text' id='txtDetail' value='"+tdDetail.html()+"'/>");
    tdAmount.html("<input type='text' id='txtAmount' value='"+tdAmount.html()+"'/>");
    tdButtons.html("<img src='/AccountingCourse/img/disk.jpg' class='btnSaveANCF'/>");

    $(".btnSaveANCF").bind("click", SaveANCF);
    $(".btnEditANCF").bind("click", EditANCF);
    $(".btnDeleteActivo").bind("click", DeleteActivo);
};

function EditPC(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    intAmount = parseInt(tdAmount.html());
    
    if(isNaN(intAmount) == false){
    totalPasPat = totalPasPat - intAmount;
    }

    tdDetail.html("<input type='text' id='txtDetail' value='"+tdDetail.html()+"'/>");
    tdAmount.html("<input type='text' id='txtAmount' value='"+tdAmount.html()+"'/>");
    tdButtons.html("<img src='/AccountingCourse/img/disk.jpg' class='btnSavePC'/>");

    $(".btnSavePC").bind("click", SavePC);
    $(".btnEditPC").bind("click", EditPC);
    $(".btnDeletePasivo").bind("click", DeletePasivo);
};

function EditPAC(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    intAmount = parseInt(tdAmount.html());
    
    if(isNaN(intAmount) == false){
    totalPasPat = totalPasPat - intAmount;
    }

    tdDetail.html("<input type='text' id='txtDetail' value='"+tdDetail.html()+"'/>");
    tdAmount.html("<input type='text' id='txtAmount' value='"+tdAmount.html()+"'/>");
    tdButtons.html("<img src='/AccountingCourse/img/disk.jpg' class='btnSavePAC'/>");

    $(".btnSavePAC").bind("click", SavePAC);
    $(".btnEditPAC").bind("click", EditPAC);
    $(".btnDeletePasivo").bind("click", DeletePasivo);
};

function DeleteActivo(){
    var par = $(this).parent().parent(); //tr
    var tdAmount = par.children("td:nth-child(2)");

    intAmount = parseInt(tdAmount.html());
    if(isNaN(intAmount) == false){
        totalActivo = totalActivo - intAmount;
        $("#totalActivo").text(totalActivo);
    }
    par.remove();
};

function DeletePasivo(){
    var par = $(this).parent().parent(); //tr
    var tdAmount = par.children("td:nth-child(2)");

    intAmount = parseInt(tdAmount.html());
    if(isNaN(intAmount) == false){
        totalPasPat = totalPasPat - intAmount;
        $("#totalPasivoPatrimonio").text(totalPasPat);
    }
    par.remove();
}; 
