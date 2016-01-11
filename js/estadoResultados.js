$(function(){
    //Add, Save, Edit and Delete functions code
    $(".btnEditV").bind("click", EditV);
    $(".btnEditCV").bind("click", EditCV);
    $(".btnEditOP").bind("click", EditOP);
    $(".btnEditOI").bind("click", EditOI);

    $(".btnDelete").bind("click", Delete);
    
    $("#btnAddV").bind("click", AddV);
    $("#btnAddCV").bind("click", AddCV);
    $("#btnAddOP").bind("click", AddOP);
    $("#btnAddOI").bind("click", AddOI);
});

function AddV(){
    $("#tblV tbody").append(
        "<tr>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><img src='/AccountingCourse/img/disk.jpg' class='btnSaveV'><img src='/AccountingCourse/img/delete.png' class='btnDelete'/></td>"+
        "</tr>");
    
        $(".btnSaveV").bind("click", SaveV);      
        $(".btnDelete").bind("click", Delete);
}; 

function AddCV(){
    $("#tblCV tbody").append(
        "<tr>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><img src='/AccountingCourse/img/disk.jpg' class='btnSaveCV'><img src='/AccountingCourse/img/delete.png' class='btnDelete'/></td>"+
        "</tr>");
    
        $(".btnSaveCV").bind("click", SaveCV);      
        $(".btnDelete").bind("click", Delete);
}; 

function AddOP(){
    $("#tblOP tbody").append(
        "<tr>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><img src='/AccountingCourse/img/disk.jpg' class='btnSaveOP'><img src='/AccountingCourse/img/delete.png' class='btnDelete'/></td>"+
        "</tr>");
    
        $(".btnSaveOP").bind("click", SaveOP);      
        $(".btnDelete").bind("click", Delete);
}; 

function AddOI(){
    $("#tblOI tbody").append(
        "<tr>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><img src='/AccountingCourse/img/disk.jpg' class='btnSaveOI'><img src='/AccountingCourse/img/delete.png' class='btnDelete'/></td>"+
        "</tr>");
    
        $(".btnSaveOI").bind("click", SaveOI);      
        $(".btnDelete").bind("click", Delete);
}; 

function SaveV(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    tdDetail.html(tdDetail.children("input[type=text]").val());
    tdAmount.html(tdAmount.children("input[type=text]").val());
    tdButtons.html("<img src='/AccountingCourse/img/delete.png' class='btnDelete'/><img src='/AccountingCourse/img/pencil.png' class='btnEditV'/>");

    $(".btnEditV").bind("click", EditV);
    $(".btnDelete").bind("click", Delete);
}; 

function SaveCV(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    tdDetail.html(tdDetail.children("input[type=text]").val());
    tdAmount.html(tdAmount.children("input[type=text]").val());
    tdButtons.html("<img src='/AccountingCourse/img/delete.png' class='btnDelete'/><img src='/AccountingCourse/img/pencil.png' class='btnEditCV'/>");

    $(".btnEditCV").bind("click", EditCV);
    $(".btnDelete").bind("click", Delete);
}; 

function SaveOP(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    tdDetail.html(tdDetail.children("input[type=text]").val());
    tdAmount.html(tdAmount.children("input[type=text]").val());
    tdButtons.html("<img src='/AccountingCourse/img/delete.png' class='btnDelete'/><img src='/AccountingCourse/img/pencil.png' class='btnEditOP'/>");

    $(".btnEditOP").bind("click", EditOP);
    $(".btnDelete").bind("click", Delete);
}; 

function SaveOI(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    tdDetail.html(tdDetail.children("input[type=text]").val());
    tdAmount.html(tdAmount.children("input[type=text]").val());
    tdButtons.html("<img src='/AccountingCourse/img/delete.png' class='btnDelete'/><img src='/AccountingCourse/img/pencil.png' class='btnEditOI'/>");

    $(".btnEditOI").bind("click", EditOI);
    $(".btnDelete").bind("click", Delete);
}; 


function EditV(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    tdDetail.html("<input type='text' id='txtDetail' value='"+tdDetail.html()+"'/>");
    tdAmount.html("<input type='text' id='txtAmount' value='"+tdAmount.html()+"'/>");
    tdButtons.html("<img src='/AccountingCourse/img/disk.jpg' class='btnSaveV'/>");

    $(".btnSaveV").bind("click", SaveV);
    $(".btnEditV").bind("click", EditV);
    $(".btnDelete").bind("click", Delete);
};

function EditCV(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    tdDetail.html("<input type='text' id='txtDetail' value='"+tdDetail.html()+"'/>");
    tdAmount.html("<input type='text' id='txtAmount' value='"+tdAmount.html()+"'/>");
    tdButtons.html("<img src='/AccountingCourse/img/disk.jpg' class='btnSaveCV'/>");

    $(".btnSaveCV").bind("click", SaveCV);
    $(".btnEditCV").bind("click", EditCV);
    $(".btnDelete").bind("click", Delete);
};

function EditOP(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    tdDetail.html("<input type='text' id='txtDetail' value='"+tdDetail.html()+"'/>");
    tdAmount.html("<input type='text' id='txtAmount' value='"+tdAmount.html()+"'/>");
    tdButtons.html("<img src='/AccountingCourse/img/disk.jpg' class='btnSaveOP'/>");

    $(".btnSaveOP").bind("click", SaveOP);
    $(".btnEditOP").bind("click", EditOP);
    $(".btnDelete").bind("click", Delete);
};

function EditOI(){
    var par = $(this).parent().parent(); //tr
    var tdDetail = par.children("td:nth-child(1)");
    var tdAmount = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    tdDetail.html("<input type='text' id='txtDetail' value='"+tdDetail.html()+"'/>");
    tdAmount.html("<input type='text' id='txtAmount' value='"+tdAmount.html()+"'/>");
    tdButtons.html("<img src='/AccountingCourse/img/disk.jpg' class='btnSaveOI'/>");

    $(".btnSaveOI").bind("click", SaveOI);
    $(".btnEditOI").bind("click", EditOI);
    $(".btnDelete").bind("click", Delete);
};

function Delete(){
    var par = $(this).parent().parent(); //tr
    par.remove();
}; 
