const xlsxFile = require('read-excel-file/node');

xlsxFile('./highloadblock.xls').then((rows) => {
    console.log(rows);

})