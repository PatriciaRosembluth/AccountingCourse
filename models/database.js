var fs = require("fs");
var DataBase = function () {
  

  var lista = new Array();

  this.getTable = function (table_name) {

    var elementos = fs.readFileSync('bd/' + table_name + '.json');
    lista = JSON.parse(elementos);

    return lista;
  }

  this.putTable = function (table_name, table) {
    fs.writeFileSync('bd/' + table_name + '.json', JSON.stringify(table), 'utf8');
  }

  this.find = function(table_name, campo, value){
    lista = this.getTable(table_name);
  }
}
