var inputValues = [];
var totalActivo = 0;
var text;

function getAllValues() {
     
    $('#mainDiv input').each(function() {
        var type = $(this).attr("type");
        inputValues.push($(this).val()); 
        // text = $('#mainDiv').find('input[name="monto-'+ i +'"]').val();
        //totalActivo = parseInt(text);
        //i++;
        //console.log(jQuery.type( totalActivo ) );
    })

    document.getElementById("demo").innerHTML = inputValues;
    for (var i = 0; i < inputValues.length; i++) {
        i++;
    totalActivo += parseInt(inputValues[i]);
    }
    document.getElementById("totalActivo").innerHTML = totalActivo;
    document.getElementById("capital").innerHTML = totalActivo;
    //return inputValues;//.join(',');
}


// function SaveActivo(){
//     par = $(this).closest('tr'); //tr
//     tdDetail = par.children("td:nth-child(1)");
//     tdAmount = par.children("td:nth-child(2)");
//     tdButtons = par.children("td:nth-child(3)");

//     tdDetail.html(tdDetail.children("input[type=text]").val());
//     tdAmount.html(tdAmount.children("input[type=text]").val());
//     tdButtons.html("<img src='/AccountingCourse/img/delete.png' class='btnDeleteActivo'/><img src='/AccountingCourse/img/pencil.png' class='btnEditActivo'/>");

//     detail = tdDetail.html();
//     intAmount = parseInt(tdAmount.html());
//     amounts.push(intAmount);
//     details.push(detail);
//     position++;
//     document.getElementById("demo").innerHTML = details;
//     document.getElementById("demo2").innerHTML = amounts;
    
//     if(isNaN(intAmount) == false){
//     totalActivo += intAmount;
//     $("#totalActivo").text(totalActivo);
//     $("#capital").text(totalActivo);
//     }

//     $(".btnEditActivo").bind("click", EditActivo);
//     $(".btnDeleteActivo").bind("click", DeleteActivo);
// }; 

