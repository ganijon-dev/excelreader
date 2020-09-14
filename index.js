const xlsxFile = require("read-excel-file/node");
const fs = require("fs");

xlsxFile("highloadblock.xlsx")
  .then((rows) => {
    console.log(rows);
    rows.forEach((col) => {
      col.forEach((data) => {
        console.log(data);
        console.log(typeof data);
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });

// var XLSX = require("xlsx");
// var workbook = XLSX.readFile("./highloadblock.xlsx");
// console.log(workbook);
// var sheet_name_list = workbook.SheetNames;
// var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
// console.log(xlData);
