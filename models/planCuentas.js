var accounts = [];
window.onload = drawAccount;

function drawAccount(){
    stringAccount = "";
    for (var i = 0; i < 40; i++) {
       stringAccount += "<tr>"+
        "<td><input id = 'account-"+i+"' type='text' size='50'/></td>"+
        "<td><select style = 'width:200px;height:24px;' id = 'valueAccount-"+i+"'>"+
        "<option value='0'>Seleccionar</option>"+
        "<option value='A'>Activo</option>"+
        "<option value='P'>Pasivo</option>"+
        "<option value='C'>Capital</option>"+
        "<option value='G'>Gasto</option>"+
        "<option value='I'>Ingreso</option>"+
        "</select></td>"+
        "</tr>";  
    }
    $('#accounts tbody').append(stringAccount);
    accounts = localStorage.accounts.split(',');
    j=0;
    if (accounts!=[]) {
        for (var i = 0; i < accounts.length; i=i+2) {    
            $('#account-'+j).val(accounts[i]);
            $('#valueAccount-'+j).val(accounts[i+1]);
            j++;
        }
    }

}
function getAccounts(){
    detailMayores = [];
    stringTypesAccounts = [];
    accounts = [];
    sortAccount = [];
    optionsAsString = "<option value = 0>Seleccionar</option>";
    $('#accounts input').each(function() {
        if ($(this).val()==="") {return}
        detailMayores.push($(this).val()); 
    });
    $('#accounts select').each(function() {
        if ($(this).val()==="0") {return}
        stringTypesAccounts.push($(this).val()); 
    });
    for (var i = 0; i < detailMayores.length; i++) {
        accounts.push(detailMayores[i]);
        accounts.push(stringTypesAccounts[i]); 
    }
    jPrompt("Plan de cuentas registrado exitosamente", 'Registro correcto');
    //Variables de sesion
    localStorage.setItem('accounts',accounts);
    localStorage.setItem('detailMayores',detailMayores);
    //end
    sortAccount = detailMayores.sort();
    for(var i = 0; i < sortAccount.length; i++) {
        optionsAsString += "<option value='" + sortAccount[i] + "'>" + sortAccount[i] + "</option>";
    }
    localStorage.setItem('optionsAsString',optionsAsString);  
}