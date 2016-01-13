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

    $(".btnDelete").bind("click", Delete);
    
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
        "<td><img src='/AccountingCourse/img/disk.jpg' class='btnSaveACD'><img src='/AccountingCourse/img/delete.png' class='btnDelete'/></td>"+
        "</tr>");
    
        $(".btnSaveACD").bind("click", SaveACD);      
        $(".btnDelete").bind("click", Delete);
}; 

function AddACE(){
    $("#tblACE tbody").append(
        "<tr>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><img src='/AccountingCourse/img/disk.jpg' class='btnSaveACE'><img src='/AccountingCourse/img/delete.png' class='btnDelete'/></td>"+
        "</tr>");
    
        $(".btnSaveACE").bind("click", SaveACE);      
        $(".btnDelete").bind("click", Delete);
}; 

function AddANCF(){
    $("#tblANCF tbody").append(
        "<tr>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><img src='/AccountingCourse/img/disk.jpg' class='btnSaveANCF'><img src='/AccountingCourse/img/delete.png' class='btnDelete'/></td>"+
        "</tr>");
    
        $(".btnSaveANCF").bind("click", SaveANCF);      
        $(".btnDelete").bind("click", Delete);
}; 

function AddPC(){
    $("#tblPC tbody").append(
        "<tr>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><img src='/AccountingCourse/img/disk.jpg' class='btnSavePC'><img src='/AccountingCourse/img/delete.png' class='btnDelete'/></td>"+
        "</tr>");
    
        $(".btnSavePC").bind("click", SavePC);      
        $(".btnDelete").bind("click", Delete);
}; 

function AddPAC(){
    $("#tblPAC tbody").append(
        "<tr>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><img src='/AccountingCourse/img/disk.jpg' class='btnSavePAC'><img src='/AccountingCourse/img/delete.png' class='btnDelete'/></td>"+
        "</tr>");
    
        $(".btnSavePAC").bind("click", SavePAC);      
        $(".btnDelete").bind("click", Delete);
}; 

function SaveACD(){
    var par = $(this).closest('tr') //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    tdDetail.html(tdDetail.children("input[type=text]").val());
    tdAmount.html(tdAmount.children("input[type=text]").val());
    tdButtons.html("<img src='/AccountingCourse/img/delete.png' class='btnDelete'/><img src='/AccountingCourse/img/pencil.png' class='btnEditACD'/>");

    intAmount = parseInt(tdAmount.html());
    
    if(isNaN(intAmount) == false){
    totalActivo = totalActivo + intAmount;
    $("#totalActivo").text(totalActivo);
    }

    $(".btnEditACD").bind("click", EditACD);
    $(".btnDelete").bind("click", Delete);
}; 

function SaveACE(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    tdDetail.html(tdDetail.children("input[type=text]").val());
    tdAmount.html(tdAmount.children("input[type=text]").val());
    tdButtons.html("<img src='/AccountingCourse/img/delete.png' class='btnDelete'/><img src='/AccountingCourse/img/pencil.png' class='btnEditACE'/>");

    intAmount = parseInt(tdAmount.html());
    
    if(isNaN(intAmount) == false){
    totalActivo = totalActivo + intAmount;
    $("#totalActivo").text(totalActivo);
    }

    $(".btnEditACE").bind("click", EditACE);
    $(".btnDelete").bind("click", Delete);
}; 

function SaveANCF(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    tdDetail.html(tdDetail.children("input[type=text]").val());
    tdAmount.html(tdAmount.children("input[type=text]").val());
    tdButtons.html("<img src='/AccountingCourse/img/delete.png' class='btnDelete'/><img src='/AccountingCourse/img/pencil.png' class='btnEditANCF'/>");

    intAmount = parseInt(tdAmount.html());
    
    if(isNaN(intAmount) == false){
    totalActivo = totalActivo + intAmount;
    $("#totalActivo").text(totalActivo);
    }

    $(".btnEditANCF").bind("click", EditANCF);
    $(".btnDelete").bind("click", Delete);
}; 

function SavePC(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    tdDetail.html(tdDetail.children("input[type=text]").val());
    tdAmount.html(tdAmount.children("input[type=text]").val());
    tdButtons.html("<img src='/AccountingCourse/img/delete.png' class='btnDelete'/><img src='/AccountingCourse/img/pencil.png' class='btnEditPC'/>");

    intAmount = parseInt(tdAmount.html());

    if(isNaN(intAmount) == false){
    totalPasPat = totalPasPat + intAmount;
    $("#totalPasivoPatrimonio").text(totalPasPat);
    }

    $(".btnEditPC").bind("click", EditPC);
    $(".btnDelete").bind("click", Delete);
}; 

function SavePAC(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    tdDetail.html(tdDetail.children("input[type=text]").val());
    tdAmount.html(tdAmount.children("input[type=text]").val());
    tdButtons.html("<img src='/AccountingCourse/img/delete.png' class='btnDelete'/><img src='/AccountingCourse/img/pencil.png' class='btnEditPAC'/>");

    intAmount = parseInt(tdAmount.html());

    if(isNaN(intAmount) == false){
    totalPasPat = totalPasPat + intAmount;
    $("#totalPasivoPatrimonio").text(totalPasPat);
    }

    $(".btnEditPAC").bind("click", EditPAC);
    $(".btnDelete").bind("click", Delete);
}; 

function EditACD(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    tdDetail.html("<input type='text' id='txtDetail' value='"+tdDetail.html()+"'/>");
    tdAmount.html("<input type='text' id='txtAmount' value='"+tdAmount.html()+"'/>");
    tdButtons.html("<img src='/AccountingCourse/img/disk.jpg' class='btnSaveACD'/>");

    $(".btnSaveACD").bind("click", SaveACD);
    $(".btnEditACD").bind("click", EditACD);
    $(".btnDelete").bind("click", Delete);
};

function EditACE(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    tdDetail.html("<input type='text' id='txtDetail' value='"+tdDetail.html()+"'/>");
    tdAmount.html("<input type='text' id='txtAmount' value='"+tdAmount.html()+"'/>");
    tdButtons.html("<img src='/AccountingCourse/img/disk.jpg' class='btnSaveACE'/>");

    $(".btnSaveACE").bind("click", SaveACE);
    $(".btnEditACE").bind("click", EditACE);
    $(".btnDelete").bind("click", Delete);
};

function EditANCF(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    tdDetail.html("<input type='text' id='txtDetail' value='"+tdDetail.html()+"'/>");
    tdAmount.html("<input type='text' id='txtAmount' value='"+tdAmount.html()+"'/>");
    tdButtons.html("<img src='/AccountingCourse/img/disk.jpg' class='btnSaveANCF'/>");

    $(".btnSaveANCF").bind("click", SaveANCF);
    $(".btnEditANCF").bind("click", EditANCF);
    $(".btnDelete").bind("click", Delete);
};

function EditPC(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    tdDetail.html("<input type='text' id='txtDetail' value='"+tdDetail.html()+"'/>");
    tdAmount.html("<input type='text' id='txtAmount' value='"+tdAmount.html()+"'/>");
    tdButtons.html("<img src='/AccountingCourse/img/disk.jpg' class='btnSavePC'/>");

    $(".btnSavePC").bind("click", SavePC);
    $(".btnEditPC").bind("click", EditPC);
    $(".btnDelete").bind("click", Delete);
};

function EditPAC(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    tdDetail.html("<input type='text' id='txtDetail' value='"+tdDetail.html()+"'/>");
    tdAmount.html("<input type='text' id='txtAmount' value='"+tdAmount.html()+"'/>");
    tdButtons.html("<img src='/AccountingCourse/img/disk.jpg' class='btnSavePAC'/>");

    $(".btnSavePAC").bind("click", SavePAC);
    $(".btnEditPAC").bind("click", EditPAC);
    $(".btnDelete").bind("click", Delete);
};

function Delete(){
    var par = $(this).parent().parent(); //tr
    par.remove();
}; 
