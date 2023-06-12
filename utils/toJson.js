const moment = require("moment");

const toJSON = (csv) => {
    const fs = require("fs");
    const csvFilePath = "./seeders/" + csv;
  
    const csvData = fs.readFileSync(
      csvFilePath,
      { encoding: "utf-8" },
      function (err, csvData) {
        if (err) {
          console.log(err);
        }
  
        return csvData;
      }
    );
    const csvRecordsArray = csvData.split(/\r?\n|\r/);
  
    const headers = ["title", "author", "timestamp", "score", "sentiment", "url", "summarize", "keyword"];
    const jsonArray = [];
  
    for (let i = 0; i < csvRecordsArray.length; i++) {
      const currentRecord = csvRecordsArray[i].split(";");
      const obj = {};
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentRecord[j];
        obj["createdAt"] = new Date();
        obj["updatedAt"] = new Date();
        if (headers[j] === "timestamp") {
            const originalDate = moment(currentRecord[j], 'DD/MM/YY:HH:mm');
            const formattedDate = originalDate.format('YYYY-MM-DD HH:mm:ss');
            obj[headers[j]] = formattedDate;
          }
      }
      jsonArray.push(obj);
    }
    return jsonArray;
  };
  
  module.exports = toJSON;
  