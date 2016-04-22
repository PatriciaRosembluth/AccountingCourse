var accounts = [];
window.onload = drawAccount;

function drawAccount(){
    for (var i = 0; i < 30; i++) {
        
    }
    accounts = sessionStorage.accounts.split(',');
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
    //Variables de sesion
    sessionStorage.setItem('accounts',accounts);
    sessionStorage.setItem('detailMayores',detailMayores);
    //end

    for(var i = 0; i < accounts.length; i=i+2) {
        optionsAsString += "<option value='" + accounts[i] + "'>" + accounts[i] + "</option>";
    }
    sessionStorage.setItem('optionsAsString',optionsAsString);  
}